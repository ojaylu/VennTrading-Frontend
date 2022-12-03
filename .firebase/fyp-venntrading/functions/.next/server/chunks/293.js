"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 1293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LogoTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_imagePaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1363);




function LogoTitle({ style , width , height , level , className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        style: {
            display: "flex",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: utils_imagePaths__WEBPACK_IMPORTED_MODULE_3__/* .logoWhite */ .JV,
                height: height,
                width: width
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
                level: level,
                style: {
                    margin: 0,
                    marginLeft: "5px",
                    ...style
                },
                children: "VennTrading"
            })
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