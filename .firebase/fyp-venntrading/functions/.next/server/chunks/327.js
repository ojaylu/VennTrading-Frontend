"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 6604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_imagePaths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1363);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(115);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserOptions__WEBPACK_IMPORTED_MODULE_5__]);
_UserOptions__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MainHeader() {
    const routes = [
        {
            label: "Introduction",
            path: "/"
        },
        {
            label: "Contact Us",
            path: "/contact-us"
        }
    ];
    const { currentTheme  } = (0,react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_3__.useThemeSwitcher)();
    const routeLinks = routes.map((route, index)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: route.path,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                type: "link",
                className: currentTheme == "light" ? "main-header-light" : "main-header-dark",
                children: route.label
            })
        }, index);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.PageHeader, {
        title: "VennTrading",
        avatar: {
            src: currentTheme == "light" ? utils_imagePaths__WEBPACK_IMPORTED_MODULE_2__/* .logoBlack */ .I9 : utils_imagePaths__WEBPACK_IMPORTED_MODULE_2__/* .logoWhite */ .JV
        },
        subTitle: routeLinks,
        className: "title",
        extra: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserOptions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_MainHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6604);
/* harmony import */ var components_LayoutHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6840);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_MainHeader_js__WEBPACK_IMPORTED_MODULE_3__]);
components_MainHeader_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const { Content , Footer  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ children , className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_LayoutHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MainHeader_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                className: className,
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Footer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/test-loading",
                        children: "hi"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/login",
                        children: "hi"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;