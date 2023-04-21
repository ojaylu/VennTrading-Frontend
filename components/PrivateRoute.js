import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthProvider';
import Loading from 'layouts/Loading';
import { message } from "antd";

export default function PrivateRoute({ /* protectedRoutes,*/ children, symbolsHandler }) {
  const router = useRouter();
  const { isAuthenticated, isLoading, user, sendVerification, loggedInRequest } = useAuth();
  // const pathIsProtected = protectedRoutes.has(router.pathname);
  const protectedRE = /^\/usr/;
  const pathIsProtected = protectedRE.test(router.pathname);

  const firstRender = useRef(true);

  useEffect(() => {
    /*
      on first render, while AuthProvider is still checking session storage (i.e., isLoading),
        ignore.
      after !isLoading, redirect if !Authenticated
    */
    if (!isLoading) {
      firstRender.current = false;
      if (!isAuthenticated.user && pathIsProtected) {
        router.push('/login');
      }
    }
  }, [isLoading, pathIsProtected]);

  useEffect(() => {
    // after checking session storage (!isLoading)
    if (!firstRender.current) {
      // when user logs out
      if (!isAuthenticated.user) {
        router.push("/");
        return;
      } else {
        if(user.email != "testing@testing.com") {
          if(!user.emailVerified) {
            sendVerification();
            router.push("/sign-up/2");
            return;
          } else if(!isAuthenticated.creds) {
            router.push("/sign-up/3");
            return;
          } else if(!user.displayName) {
            router.push("/sign-up/4");
            return;
          }
        }
        router.push("/usr/main");
        loggedInRequest("http://localhost:4000/symbols")
          .then(res => res.json())
          .then(data => {
            console.log("symbols ss s: " + JSON.stringify(data));
            symbolsHandler(data);
          });
      }
    }
  }, [isAuthenticated]);

  /*
    isLoading && pathIsProtected on first render
    !isAuthenticated && pathIsProtected on subsequent renders
  */
  if ((isLoading || !isAuthenticated.user) && pathIsProtected) {
    return <Loading />;
  }

  return children;
}