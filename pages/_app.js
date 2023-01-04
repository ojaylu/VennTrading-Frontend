import React from "react";
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

  return (
    <ApolloProvider client={client}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="dark">
        <AuthProvider>
          {/* <PrivateRoute protectedRoutes={protectedRoutes}> */}
          <PrivateRoute>
            <Component {...pageProps} />
          </PrivateRoute>
        </AuthProvider>
      </ThemeSwitcherProvider>
    </ApolloProvider>
  )
}

export default MyApp
