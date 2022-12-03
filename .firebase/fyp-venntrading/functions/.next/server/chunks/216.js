"use strict";
exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 7216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_imagePaths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1363);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(115);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_3__);




function Loading() {
    const { currentTheme  } = (0,react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_3__.useThemeSwitcher)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: currentTheme == "light" ? utils_imagePaths__WEBPACK_IMPORTED_MODULE_2__/* .logoBlack */ .I9 : utils_imagePaths__WEBPACK_IMPORTED_MODULE_2__/* .logoWhite */ .JV,
                width: "100",
                height: "100",
                priority: true
            }),
            "Loading"
        ]
    });
}


/***/ }),

/***/ 1363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I9": () => (/* binding */ logoBlack),
/* harmony export */   "JV": () => (/* binding */ logoWhite),
/* harmony export */   "K_": () => (/* binding */ banner)
/* harmony export */ });
const imagePath = "/images/final";
const logoWhite = imagePath + "/logo-white.png";
const logoBlack = imagePath + "/logo-black.png";
const banner = imagePath + "/banner.png";


/***/ })

};
;