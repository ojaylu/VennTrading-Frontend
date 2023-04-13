import React, { useState } from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher"
import { AuthProvider } from "components/AuthProvider";
import PrivateRoute from "components/PrivateRoute";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, from } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { auth } from "firebase-config";
import "public/styles/styles.scss";

const themes = {
  dark: "/styles/dark-theme.css",
  light: "/styles/light-theme.css"
}

function MyApp({ Component, pageProps }) {
  // const protectedRoutes = new Set(["/main"]);
  const [symbols, setSymbols] = useState([]);

  const tokenMiddleware = setContext(async(_, context = {}) => {
    const {headers, ...rest} = context;
    const token = await auth.currentUser.getIdToken(true);
    return ({
      ...rest,
      headers: {
        ...headers,
        "X-Token": token
      }
    })
  })

  const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});

  const client = new ApolloClient({
    link: from([ tokenMiddleware, httpLink ]),
    cache: new InMemoryCache(),
  });


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
