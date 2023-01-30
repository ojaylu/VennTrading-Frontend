import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthProvider';
import Loading from 'layouts/Loading';

export default function PrivateRoute({ /* protectedRoutes,*/ children, symbolsHandler }) {
  const router = useRouter();
  const { isAuthenticated, isLoading, user, sendVerification } = useAuth();
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
      if (!isAuthenticated && pathIsProtected) {
        router.push('/login');
      }
    }
  }, [isLoading, pathIsProtected]);

  useEffect(() => {
    // after checking session storage (!isLoading)
    if (!firstRender.current) {
      // when user logs out
      if (!isAuthenticated) {
        router.push("/");
      } else {
        if (!user.displayName) {
          router.push("/sign-up/2");
        } else if (!user.emailVerified) {
          sendVerification();
          router.push("/sign-up/3");
        } else {
          router.push("/usr/main");
          fetch("http://localhost:4000/symbols")
            .then(res => res.json())
            .then(data => {
              // symbolsHandler(data.symbols); // testing
              symbolsHandler([
                'BNBBUSD', 'BTCBUSD', 'ETHBUSD',
                'LTCBUSD', 'TRXBUSD', 'XRPBUSD',
                'BNBUSDT', 'BTCUSDT', 'ETHUSDT',
                'LTCUSDT', 'TRXUSDT', 'XRPUSDT',
                'BNBBTC',  'ETHBTC',  'LTCBTC',
                'TRXBTC',  'XRPBTC',  'LTCBNB',
                'TRXBNB',  'XRPBNB'
              ]);
            });
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