/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/register"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CProject%20Ecourse%5Cpages%5Cregister.js&page=%2Fregister!":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CProject%20Ecourse%5Cpages%5Cregister.js&page=%2Fregister! ***!
  \********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/register\",\n      function () {\n        return __webpack_require__(/*! ./pages/register.js */ \"./pages/register.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/register\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1EJTNBJTVDUHJvamVjdCUyMEVjb3Vyc2UlNUNwYWdlcyU1Q3JlZ2lzdGVyLmpzJnBhZ2U9JTJGcmVnaXN0ZXIhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzVDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz83NmVhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvcmVnaXN0ZXJcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL3JlZ2lzdGVyLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9yZWdpc3RlclwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CProject%20Ecourse%5Cpages%5Cregister.js&page=%2Fregister!\n");

/***/ }),

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Register = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name,\n            email: email,\n            password: password\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"p-5 big-header text-center bg-primary square\",\n                children: \"Register \"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project Ecourse\\\\pages\\\\register.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-1\",\n                            value: name,\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            placeholder: \"Enter name\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project Ecourse\\\\pages\\\\register.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-1\",\n                            value: email,\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            },\n                            placeholder: \"Enter email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project Ecourse\\\\pages\\\\register.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-1\",\n                            value: password,\n                            onChange: function(e) {\n                                return setPassword(e.target.value);\n                            },\n                            placeholder: \"Enter password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project Ecourse\\\\pages\\\\register.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-block btn-primary\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project Ecourse\\\\pages\\\\register.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Project Ecourse\\\\pages\\\\register.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Project Ecourse\\\\pages\\\\register.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Register, \"H0oogsi12FpBP5BGRBJJWCRHc9o=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFpQzs7QUFHakMsSUFBTUMsUUFBUSxHQUFHLFdBQUk7O0lBRWpCLElBQXFCRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTHJDLElBS2UsR0FBVUEsR0FBWSxHQUF0QixFQUxmLE9BS3VCLEdBQUVBLEdBQVksR0FBZDtJQUNuQixJQUF1QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU52QyxLQU1nQixHQUFXQSxJQUFZLEdBQXZCLEVBTmhCLFFBTXlCLEdBQUVBLElBQVksR0FBZDtJQUNyQixJQUE2QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVA3QyxRQU9tQixHQUFjQSxJQUFZLEdBQTFCLEVBUG5CLFdBTytCLEdBQUVBLElBQVksR0FBZDtJQUUzQixJQUFNUSxZQUFZLEdBQUMsU0FBQ0MsQ0FBQyxFQUFHO1FBQ3BCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CQyxPQUFPLENBQUNDLEtBQUssQ0FBQztZQUFDVixJQUFJLEVBQUpBLElBQUk7WUFBQ0UsS0FBSyxFQUFMQSxLQUFLO1lBQUNFLFFBQVEsRUFBUkEsUUFBUTtTQUFDLENBQUM7S0FDdkM7SUFDRCxxQkFDSTs7MEJBQ0ksOERBQUNPLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7MEJBQUMsV0FBUzs7Ozs7cUJBQUs7MEJBRTNFLDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMscUNBQXFDOzBCQUNoRCw0RUFBQ0UsTUFBSTtvQkFBQ0MsUUFBUSxFQUFFVCxZQUFZOztzQ0FDeEIsOERBQUNVLE9BQUs7NEJBQ0ZDLElBQUksRUFBQyxNQUFNOzRCQUNYTCxTQUFTLEVBQUMsdUJBQXVCOzRCQUNqQ00sS0FBSyxFQUFFbEIsSUFBSTs0QkFDWG1CLFFBQVEsRUFBRVosU0FBQUEsQ0FBQzt1Q0FBRU4sT0FBTyxDQUFDTSxDQUFDLENBQUNhLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDOzZCQUFBOzRCQUNwQ0csV0FBVyxFQUFDLFlBQVk7NEJBQ3hCQyxRQUFROzs7OztpQ0FDVjtzQ0FFRiw4REFBQ04sT0FBSzs0QkFDRkMsSUFBSSxFQUFDLE9BQU87NEJBQ1pMLFNBQVMsRUFBQyx1QkFBdUI7NEJBQ2pDTSxLQUFLLEVBQUVoQixLQUFLOzRCQUNaaUIsUUFBUSxFQUFFWixTQUFBQSxDQUFDO3VDQUFFSixRQUFRLENBQUNJLENBQUMsQ0FBQ2EsTUFBTSxDQUFDRixLQUFLLENBQUM7NkJBQUE7NEJBQ3JDRyxXQUFXLEVBQUMsYUFBYTs0QkFDekJDLFFBQVE7Ozs7O2lDQUNWO3NDQUVGLDhEQUFDTixPQUFLOzRCQUNGQyxJQUFJLEVBQUMsVUFBVTs0QkFDZkwsU0FBUyxFQUFDLHVCQUF1Qjs0QkFDakNNLEtBQUssRUFBRWQsUUFBUTs0QkFDZmUsUUFBUSxFQUFFWixTQUFBQSxDQUFDO3VDQUFFRixXQUFXLENBQUNFLENBQUMsQ0FBQ2EsTUFBTSxDQUFDRixLQUFLLENBQUM7NkJBQUE7NEJBQ3hDRyxXQUFXLEVBQUMsZ0JBQWdCOzRCQUM1QkMsUUFBUTs7Ozs7aUNBQ1Y7c0NBRUYsOERBQUNDLFFBQU07NEJBQUNOLElBQUksRUFBQyxRQUFROzRCQUFDTCxTQUFTLEVBQUMsMkJBQTJCO3NDQUFDLFFBRTVEOzs7OztpQ0FBUzs7Ozs7O3lCQUNOOzs7OztxQkFFTDs7b0JBQ1AsQ0FDTjtDQUNKO0dBbkRLYixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFxRGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKT0+e1xyXG5cclxuICAgIGNvbnN0IFtuYW1lLHNldE5hbWVdPXVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2VtYWlsLHNldEVtYWlsXT11c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF09dXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0PShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLnRhYmxlKHtuYW1lLGVtYWlsLHBhc3N3b3JkfSlcclxuICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNSBiaWctaGVhZGVyIHRleHQtY2VudGVyIGJnLXByaW1hcnkgc3F1YXJlXCI+UmVnaXN0ZXIgPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTVcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC0xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT5zZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWdpc3RlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwidGFibGUiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5CProject%20Ecourse%5Cpages%5Cregister.js&page=%2Fregister!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);