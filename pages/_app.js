import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher"
import { AuthProvider } from "components/AuthProvider";
import PrivateRoute from "components/PrivateRoute";
import "public/styles/styles.css";

const themes = {
  dark: "/styles/dark-theme.css",
  light: "/styles/light-theme.css"
}

function MyApp({ Component, pageProps }) {
  const protectedRoutes = new Set(["/main-page"]);

  return (
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="dark">
      <AuthProvider>
        <PrivateRoute protectedRoutes={protectedRoutes}>
          <Component {...pageProps} />
        </PrivateRoute>
      </AuthProvider>
    </ThemeSwitcherProvider>
  )
}

export default MyApp
