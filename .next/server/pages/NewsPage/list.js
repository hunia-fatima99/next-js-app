"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/NewsPage/list";
exports.ids = ["pages/NewsPage/list"];
exports.modules = {

/***/ "./config/firebase.config.js":
/*!***********************************!*\
  !*** ./config/firebase.config.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAKZHjHUz0zkNr_sigUh-v_Za4bNA39k5c\",\n    authDomain: \"newsproject-86cb1.firebaseapp.com\",\n    projectId: \"newsproject-86cb1\",\n    storageBucket: \"newsproject-86cb1.appspot.com\",\n    messagingSenderId: \"253017791573\",\n    appId: \"1:253017791573:web:7b78b1cfb5be66daa0c8dc\",\n    measurementId: \"G-YJFJHDBCXE\"\n};\nconst firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nconst db = firebaseApp.firestore();\nconst auth = firebaseApp.auth();\nconst fireInstance = firebaseApp;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fireInstance);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UuY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFDYjtBQUNLO0FBRWxDLEtBQUssQ0FBQ0MsY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQW1DO0lBQy9DQyxTQUFTLEVBQUUsQ0FBbUI7SUFDOUJDLGFBQWEsRUFBRSxDQUErQjtJQUM5Q0MsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsQ0FBYztBQUMvQixDQUFDO0FBRUQsS0FBSyxDQUFDQyxXQUFXLEdBQUdULHlFQUFzQixDQUFDQyxjQUFjO0FBRXpELEtBQUssQ0FBQ1UsRUFBRSxHQUFHRixXQUFXLENBQUNHLFNBQVM7QUFDaEMsS0FBSyxDQUFDQyxJQUFJLEdBQUdKLFdBQVcsQ0FBQ0ksSUFBSTtBQUU3QixLQUFLLENBQUNDLFlBQVksR0FBR0wsV0FBVztBQUNoQyxpRUFBZUssWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qcy1wcm9qZWN0Ly4vY29uZmlnL2ZpcmViYXNlLmNvbmZpZy5qcz9lNTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lBS1pIakhVejB6a05yX3NpZ1VoLXZfWmE0Yk5BMzlrNWNcIixcbiAgYXV0aERvbWFpbjogXCJuZXdzcHJvamVjdC04NmNiMS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcIm5ld3Nwcm9qZWN0LTg2Y2IxXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibmV3c3Byb2plY3QtODZjYjEuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjUzMDE3NzkxNTczXCIsXG4gIGFwcElkOiBcIjE6MjUzMDE3NzkxNTczOndlYjo3Yjc4YjFjZmI1YmU2NmRhYTBjOGRjXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1ZSkZKSERCQ1hFXCJcbn07XG5cbmNvbnN0IGZpcmViYXNlQXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbmNvbnN0IGRiID0gZmlyZWJhc2VBcHAuZmlyZXN0b3JlKCk7XG5jb25zdCBhdXRoID0gZmlyZWJhc2VBcHAuYXV0aCgpO1xuXG5jb25zdCBmaXJlSW5zdGFuY2UgPSBmaXJlYmFzZUFwcDtcbmV4cG9ydCBkZWZhdWx0IGZpcmVJbnN0YW5jZTsiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZUFwcCIsImluaXRpYWxpemVBcHAiLCJkYiIsImZpcmVzdG9yZSIsImF1dGgiLCJmaXJlSW5zdGFuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/firebase.config.js\n");

/***/ }),

/***/ "./pages/NewsPage/list.js":
/*!********************************!*\
  !*** ./pages/NewsPage/list.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/firebase.config */ \"./config/firebase.config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase_config__WEBPACK_IMPORTED_MODULE_2__]);\n_config_firebase_config__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction NewsList({ news =[]  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"These are news\"\n            }, void 0, false, {\n                fileName: \"/Users/huniafatima/Desktop/EMPGLABS/practice/next-js-app/pages/NewsPage/list.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: news === null || news === void 0 ? void 0 : news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: item.title\n                    }, item.id, false, {\n                        fileName: \"/Users/huniafatima/Desktop/EMPGLABS/practice/next-js-app/pages/NewsPage/list.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"/Users/huniafatima/Desktop/EMPGLABS/practice/next-js-app/pages/NewsPage/list.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsList);\nasync function getStaticProps() {\n    // const url = 'https://newsapi.org/v2/everything?q=apple&from=2022-02-03&apiKey=aa9bc2e6d2a24574a96f0f47fae99e84';\n    // const responseBody = await fetch(url)\n    // const responseJson = await responseBody.json()\n    // const news = responseJson.articles || []\n    let news = [];\n    const querySnapshot = await _config_firebase_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].firestore().collection('news').get();\n    querySnapshot.forEach(function(doc) {\n        news.push({\n            id: doc.id,\n            ...doc.data()\n        });\n    });\n    return {\n        props: {\n            news: news || []\n        },\n        revalidate: 300\n    };\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9OZXdzUGFnZS9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7U0FHOUNHLFFBQVEsQ0FBQyxDQUFDQyxDQUFBQSxJQUFJLEVBQUcsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDO0lBQzVCLE1BQU07O3dGQUVHQyxDQUFFOzBCQUFDLENBQWM7Ozs7Ozt3RkFDakJDLENBQUU7MEJBQ0VGLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBRUcsR0FBRyxFQUFFQyxJQUFJLCtFQUNYQyxDQUFFO2tDQUFnQkQsSUFBSSxDQUFDRSxLQUFLO3VCQUFwQkYsSUFBSSxDQUFDRyxFQUFFOzs7Ozs7Ozs7Ozs7O0FBS3BDLENBQUM7QUFFRCxpRUFBZVIsUUFBUSxFQUFDO0FBRWpCLGVBQWVTLGNBQWMsR0FBRyxDQUFDO0lBQ3BDLEVBQW1IO0lBQ25ILEVBQXdDO0lBQ3hDLEVBQWlEO0lBQ2pELEVBQTJDO0lBQzNDLEdBQUcsQ0FBQ1IsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLEtBQUssQ0FBQ1MsYUFBYSxHQUFHLEtBQUssQ0FBQ1gseUVBQ2QsR0FDVGEsVUFBVSxDQUFDLENBQU0sT0FDakJDLEdBQUc7SUFFUkgsYUFBYSxDQUFDSSxPQUFPLENBQUMsUUFBUSxDQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUNsQ2QsSUFBSSxDQUFDZSxJQUFJLENBQUMsQ0FBQztZQUNQUixFQUFFLEVBQUVPLEdBQUcsQ0FBQ1AsRUFBRTtlQUNQTyxHQUFHLENBQUNFLElBQUk7UUFDZixDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ0pDLEtBQUssRUFBRSxDQUFDO1lBQ0pqQixJQUFJLEVBQUVBLElBQUksSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNEa0IsVUFBVSxFQUFFLEdBQUc7SUFDbkIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLXByb2plY3QvLi9wYWdlcy9OZXdzUGFnZS9saXN0LmpzPzIyYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmaXJlSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2NvbmZpZy9maXJlYmFzZS5jb25maWdcIjtcblxuXG5mdW5jdGlvbiBOZXdzTGlzdCh7bmV3cyA9IFtdfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+VGhlc2UgYXJlIG5ld3M8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtuZXdzPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0udGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3c0xpc3Q7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICAvLyBjb25zdCB1cmwgPSAnaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9YXBwbGUmZnJvbT0yMDIyLTAyLTAzJmFwaUtleT1hYTliYzJlNmQyYTI0NTc0YTk2ZjBmNDdmYWU5OWU4NCc7XG4gICAgLy8gY29uc3QgcmVzcG9uc2VCb2R5ID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIC8vIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlQm9keS5qc29uKClcbiAgICAvLyBjb25zdCBuZXdzID0gcmVzcG9uc2VKc29uLmFydGljbGVzIHx8IFtdXG4gICAgbGV0IG5ld3MgPSBbXVxuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlSW5zdGFuY2VcbiAgICAgICAgLmZpcmVzdG9yZSgpXG4gICAgICAgIC5jb2xsZWN0aW9uKCduZXdzJylcbiAgICAgICAgLmdldCgpO1xuXG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgbmV3cy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBuZXdzOiBuZXdzIHx8IFtdLFxuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiAzMDBcbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmlyZUluc3RhbmNlIiwiTmV3c0xpc3QiLCJuZXdzIiwiaDEiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsInRpdGxlIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsInF1ZXJ5U25hcHNob3QiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJkYXRhIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/NewsPage/list.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/NewsPage/list.js"));
module.exports = __webpack_exports__;

})();