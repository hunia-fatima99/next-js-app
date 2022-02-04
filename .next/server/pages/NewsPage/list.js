"use strict";
(() => {
var exports = {};
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(773);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(826);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const firebaseConfig = {
    apiKey: "AIzaSyAKZHjHUz0zkNr_sigUh-v_Za4bNA39k5c",
    authDomain: "newsproject-86cb1.firebaseapp.com",
    projectId: "newsproject-86cb1",
    storageBucket: "newsproject-86cb1.appspot.com",
    messagingSenderId: "253017791573",
    appId: "1:253017791573:web:7b78b1cfb5be66daa0c8dc",
    measurementId: "G-YJFJHDBCXE"
};
const firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const fireInstance = firebaseApp;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fireInstance);

});

/***/ }),

/***/ 256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(731);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase_config__WEBPACK_IMPORTED_MODULE_2__]);
_config_firebase_config__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function NewsList({ news =[]  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "These are news"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: news === null || news === void 0 ? void 0 : news.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: item.title
                    }, item.id)
                )
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsList);
async function getStaticProps() {
    // const url = 'https://newsapi.org/v2/everything?q=apple&from=2022-02-03&apiKey=aa9bc2e6d2a24574a96f0f47fae99e84';
    // const responseBody = await fetch(url)
    // const responseJson = await responseBody.json()
    // const news = responseJson.articles || []
    let news = [];
    const querySnapshot = await _config_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"].firestore */ .Z.firestore().collection('news').get();
    debugger;
    querySnapshot.forEach(function(doc) {
        news.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return {
        props: {
            news: news || []
        }
    };
}

});

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ 826:
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ 741:
/***/ ((module) => {

module.exports = import("firebase/compat/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(256));
module.exports = __webpack_exports__;

})();