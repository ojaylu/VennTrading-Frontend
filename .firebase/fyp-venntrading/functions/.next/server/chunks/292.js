"use strict";
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 9292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3158);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_firebase_loginWithPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3358);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_config__WEBPACK_IMPORTED_MODULE_3__, utils_firebase_loginWithPopup__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_config__WEBPACK_IMPORTED_MODULE_3__, utils_firebase_loginWithPopup__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function AuthProvider({ children  }) {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .auth.currentUser */ .I8.currentUser);
    const { 0: isAuthenticated , 1: setAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // check session storage on first render
        if (user) {
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);
    const resetUser = ()=>{
        setUser(null);
    };
    const success = (msg)=>{
        antd__WEBPACK_IMPORTED_MODULE_4__.message.success(msg);
    };
    const error = (msg)=>{
        antd__WEBPACK_IMPORTED_MODULE_4__.message.error(msg);
    };
    function loginWithEmail(email, password) {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, email, password).then((userCredential)=>{
            setUser(userCredential.user);
            success("Logged in");
            setAuthenticated(true);
        }).catch((err)=>{
            error(err.message);
        });
    }
    function loginWithThirdParty(providerName) {
        (0,utils_firebase_loginWithPopup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(providerName).then(({ user , token  })=>{
            setUser(user);
            success("Logged in");
            setAuthenticated(true);
        }).catch((err)=>{
            error(err.message);
        });
    }
    function createUser({ email , password  }) {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, email, password).then(({ user  })=>{
            setUser(user);
            success("Created User");
            router.push("/sign-up/2");
        }).catch((err)=>{
            error(err.message);
        });
    }
    function updateUserProfile(fields) {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.updateProfile)(firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .auth.currentUser */ .I8.currentUser, fields).then(()=>{
            success("Profile Updated");
            sendVerification();
            router.push("/sign-up/3");
        }).catch((err)=>{
            error(err.message);
        });
    }
    function logout() {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8).then(()=>{
            success("Logged out");
            setAuthenticated(false);
            resetUser();
        }).catch((err)=>{
            error(err.message);
        });
    }
    function sendVerification() {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.sendEmailVerification)(firebase_config__WEBPACK_IMPORTED_MODULE_3__/* .auth.currentUser */ .I8.currentUser).then(()=>{
            success("Verification Sent");
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            isAuthenticated,
            user,
            loginWithEmail,
            loginWithThirdParty,
            logout,
            createUser,
            updateUserProfile,
            sendVerification,
            isLoading
        },
        children: children
    });
}
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth)
/* harmony export */ });
/* unused harmony exports app, db, googleProvider */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNSRe0598FccksSyqktd1CNBp7B-x2gOs",
    authDomain: "fyp-venntrading.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_API_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_API_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_API_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_API_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_API_MEASUREMENT_ID
};
console.log("fyp-venntrading.firebaseapp.com");
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
// export const analytics = getAnalytics(app);
const googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ loginWithPopup)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3158);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_config__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const providers = {
    google: {
        provider: new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider(),
        getCredential: (result)=>{
            return firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider.credentialFromResult(result);
        }
    }
};
async function loginWithPopup(providerName) {
    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(firebase_config__WEBPACK_IMPORTED_MODULE_1__/* .auth */ .I8, providers[providerName].provider).then((result)=>{
        const credential = providers[providerName].getCredential;
        const token = credential.accessToken;
        const user = result.user;
        return {
            user,
            token
        };
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;