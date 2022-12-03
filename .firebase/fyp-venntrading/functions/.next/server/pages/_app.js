"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PrivateRoute)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9292);
/* harmony import */ var layouts_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_AuthProvider__WEBPACK_IMPORTED_MODULE_3__]);
components_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function PrivateRoute({ protectedRoutes , children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { isAuthenticated , isLoading , user , sendVerification  } = (0,components_AuthProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const pathIsProtected = protectedRoutes.has(router.pathname);
    const firstUpdate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        /*
      on first render, while AuthProvider is still checking session storage (i.e., isLoading),
        ignore.
      after !isLoading, redirect if !Authenticated
    */ if (!isLoading) {
            firstUpdate.current = false;
            if (!isAuthenticated && pathIsProtected) {
                router.push("/login");
            }
        }
    }, [
        isLoading,
        pathIsProtected
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!firstUpdate.current) {
            // when user logs out
            if (!isAuthenticated) {
                router.push("/");
            } else {
                if (false) {}
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
    }, [
        isAuthenticated
    ]);
    /*
    isLoading && pathIsProtected on first render
    !isAuthenticated && pathIsProtected on subsequent renders
  */ if ((isLoading || !isAuthenticated) && pathIsProtected) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
    }
    return children;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9292);
/* harmony import */ var components_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6489);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_AuthProvider__WEBPACK_IMPORTED_MODULE_3__, components_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__]);
([components_AuthProvider__WEBPACK_IMPORTED_MODULE_3__, components_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const themes = {
    dark: "/styles/dark-theme.css",
    light: "/styles/light-theme.css"
};
function MyApp({ Component , pageProps  }) {
    const protectedRoutes = new Set([
        "/main-page"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2__.ThemeSwitcherProvider, {
        themeMap: themes,
        defaultTheme: "dark",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_AuthProvider__WEBPACK_IMPORTED_MODULE_3__/* .AuthProvider */ .H, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                protectedRoutes: protectedRoutes,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 115:
/***/ ((module) => {

module.exports = require("react-css-theme-switcher");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9500:
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,292,216], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();