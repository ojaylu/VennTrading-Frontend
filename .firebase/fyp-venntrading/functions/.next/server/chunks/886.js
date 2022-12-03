"use strict";
exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 6840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LayoutHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2__);



const { Header  } = antd__WEBPACK_IMPORTED_MODULE_1__.Layout;
function LayoutHeader({ style ={} , children , ...rest }) {
    const { currentTheme  } = (0,react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2__.useThemeSwitcher)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
        ...rest,
        style: {
            padding: 0,
            height: "auto",
            backgroundColor: currentTheme == "light" ? "inherit" : null,
            ...style
        },
        children: children
    });
}


/***/ }),

/***/ 7238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);
/* harmony import */ var react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2__);



function ThemeSwitcher() {
    const { switcher , themes , currentTheme  } = (0,react_css_theme_switcher__WEBPACK_IMPORTED_MODULE_2__.useThemeSwitcher)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Switch, {
        checkedChildren: "Dark",
        unCheckedChildren: "Light",
        checked: currentTheme == "dark",
        onClick: (checked)=>{
            switcher({
                theme: checked ? themes.dark : themes.light
            });
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeSwitcher);


/***/ }),

/***/ 5193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9292);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7238);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthProvider__WEBPACK_IMPORTED_MODULE_2__]);
_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function DropdownItem({ children , onClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "text",
        size: "small",
        onClick: onClick,
        children: children
    });
}
function UserOptions() {
    const { isAuthenticated , logout  } = (0,_AuthProvider__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const authenticatedItems = [
        {
            key: "1",
            label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropdownItem, {
                onClick: logout,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LogoutOutlined, {
                        style: {
                            marginRight: "5px"
                        }
                    }),
                    "Logout"
                ]
            })
        }
    ];
    const unauthenticatedItems = [
        {
            key: "1",
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: "/login",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropdownItem, {
                    type: "text",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LoginOutlined, {
                            style: {
                                marginRight: "5px"
                            }
                        }),
                        "Login"
                    ]
                })
            })
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
                menu: {
                    items: isAuthenticated ? authenticatedItems : unauthenticatedItems
                },
                placement: "bottomLeft",
                arrow: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    type: "text",
                    shape: "circle",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;