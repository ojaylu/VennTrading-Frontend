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
      {
        "value": "BNBBUSD",
        "label": "BNBBUSD"
      },
      {
        "label": "BTCBUSD",
        "value": "BTCBUSD"
      },
      {
        "value": "ETHBUSD",
        "label": "ETHBUSD"
      },
      {
        "value": "LTCBUSD",
        "label": "LTCBUSD"
      },
      {
        "value": "TRXBUSD",
        "label": "TRXBUSD"
      },
      {
        "label": "XRPBUSD",
        "value": "XRPBUSD"
      },
      {
        "label": "BNBUSDT",
        "value": "BNBUSDT"
      },
      {
        "value": "BTCUSDT",
        "label": "BTCUSDT"
      },
      {
        "label": "ETHUSDT",
        "value": "ETHUSDT"
      },
      {
        "label": "LTCUSDT",
        "value": "LTCUSDT"
      },
      {
        "value": "TRXUSDT",
        "label": "TRXUSDT"
      },
      {
        "value": "XRPUSDT",
        "label": "XRPUSDT"
      },
      {
        "value": "BNBBTC",
        "label": "BNBBTC"
      },
      {
        "label": "ETHBTC",
        "value": "ETHBTC"
      },
      {
        "value": "LTCBTC",
        "label": "LTCBTC"
      },
      {
        "label": "TRXBTC",
        "value": "TRXBTC"
      },
      {
        "label": "XRPBTC",
        "value": "XRPBTC"
      },
      {
        "value": "LTCBNB",
        "label": "LTCBNB"
      },
      {
        "value": "TRXBNB",
        "label": "TRXBNB"
      },
      {
        "value": "XRPBNB",
        "label": "XRPBNB"
      }
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
