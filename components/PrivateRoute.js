import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthProvider';
import Loading from 'layouts/Loading';

export default function PrivateRoute({ protectedRoutes, children }) {
  const router = useRouter();
  const { isAuthenticated, isLoading, user, sendVerification } = useAuth();
  const pathIsProtected = protectedRoutes.has(router.pathname);

  const firstUpdate = useRef(true);

  useEffect(() => {
    /*
      on first render, while AuthProvider is still checking session storage (i.e., isLoading),
        ignore.
      after !isLoading, redirect if !Authenticated
    */
    if (!isLoading) {
      firstUpdate.current = false;
      if (!isAuthenticated && pathIsProtected) {
        router.push('/login');
      }
    }
  }, [isLoading, pathIsProtected]);

  useEffect(() => {
    if (!firstUpdate.current) {
      // when user logs out
      if (!isAuthenticated) {
        router.push("/");
      } else {
        if (typeof window != "undefined") {
          window.user = user;
        }
        if (!user.displayName) {
          router.push("/sign-up/2");
        } else if (!user.emailVerified) {
          sendVerification();
          router.push("/sign-up/3");
        } else {
          router.push("/main-page");
        }
      }
    }
  }, [isAuthenticated]);

  /*
    isLoading && pathIsProtected on first render
    !isAuthenticated && pathIsProtected on subsequent renders
  */
  if ((isLoading || !isAuthenticated) && pathIsProtected) {
    return <Loading />;
  }

  return children;
}