import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthProvider';
import Loading from 'layouts/Loading';

export default function PrivateRoute({ protectedRoutes, children }) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  const pathIsProtected = protectedRoutes.has(router.pathname);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathIsProtected) {
      // Redirect route, you can point this to /login
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, pathIsProtected]);

  if ((isLoading || !isAuthenticated) && pathIsProtected) {
    return <Loading />;
  }

  return children;
}