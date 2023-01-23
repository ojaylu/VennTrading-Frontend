import React, { useState } from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher"
import { AuthProvider } from "components/AuthProvider";
import PrivateRoute from "components/PrivateRoute";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import "public/styles/styles.scss";

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const themes = {
  dark: "/styles/dark-theme.css",
  light: "/styles/light-theme.css"
}

function MyApp({ Component, pageProps }) {
  // const protectedRoutes = new Set(["/main"]);
  const [symbols, setSymbols] = useState([
    'BNBBUSD', 'BTCBUSD', 'ETHBUSD',
    'LTCBUSD', 'TRXBUSD', 'XRPBUSD',
    'BNBUSDT', 'BTCUSDT', 'ETHUSDT',
    'LTCUSDT', 'TRXUSDT', 'XRPUSDT',
    'BNBBTC',  'ETHBTC',  'LTCBTC',
    'TRXBTC',  'XRPBTC',  'LTCBNB',
    'TRXBNB',  'XRPBNB'
  ]);

  return (
    <ApolloProvider client={client}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="dark">
        <AuthProvider>
          {/* <PrivateRoute protectedRoutes={protectedRoutes}> */}
          <PrivateRoute symbolsHandler={(symbols) => setSymbols(symbols)}>
              <Component {...pageProps} symbols={ symbols } />
          </PrivateRoute>
        </AuthProvider>
      </ThemeSwitcherProvider>
    </ApolloProvider>
  )
}

export default MyApp
