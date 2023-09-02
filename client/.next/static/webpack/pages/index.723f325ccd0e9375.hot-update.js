"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_JsonPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/JsonPlaceholder */ \"./components/JsonPlaceholder.tsx\");\n/* harmony import */ var _data_orders_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/orders.json */ \"../data/orders.json\");\n/* harmony import */ var _data_transactions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/transactions.json */ \"../data/transactions.json\");\n/* harmony import */ var _data_orders_corrupted_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/orders_corrupted.json */ \"../data/orders_corrupted.json\");\n/* harmony import */ var _data_transactions_corrupted_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/transactions_corrupted.json */ \"../data/transactions_corrupted.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(_data_orders_json__WEBPACK_IMPORTED_MODULE_3__));\n    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(_data_transactions_json__WEBPACK_IMPORTED_MODULE_4__));\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const [selectedText, setSelectedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Normal\");\n    const handleOptionChange = (event)=>{\n        setSelectedOption(event.target.value);\n        if (event.target.value === \"1\") {\n            setOrders(JSON.stringify(_data_orders_json__WEBPACK_IMPORTED_MODULE_3__));\n            setTransactions(JSON.stringify(_data_transactions_json__WEBPACK_IMPORTED_MODULE_4__));\n            setSelectedText(\"Normal\");\n        } else {\n            setOrders(JSON.stringify(_data_orders_corrupted_json__WEBPACK_IMPORTED_MODULE_5__));\n            setTransactions(JSON.stringify(_data_transactions_corrupted_json__WEBPACK_IMPORTED_MODULE_6__));\n            setSelectedText(\"Corrupted\");\n        }\n    };\n    const handleSimpleMatching = ()=>{\n        const jsonOrders = JSON.parse(orders);\n        const jsonTransactions = JSON.parse(transactions);\n        const data = {\n            orders: jsonOrders,\n            transactions: jsonTransactions\n        };\n        const requestOptions = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        };\n        fetch(\"http://localhost:5000/api/v1/matchTransaction\", requestOptions).then((response)=>response.json()).then((data)=>{\n            // Handle the response here\n            console.log(\"Response from Simple Matching:\", data);\n        }).catch((error)=>{\n            // Handle errors here\n            console.error(\"Error from Simple Matching:\", error);\n        });\n    };\n    const handleEnhancedMatching = ()=>{\n        const jsonOrders = JSON.parse(orders);\n        const jsonTransactions = JSON.parse(transactions);\n        const data = {\n            orders: jsonOrders,\n            transactions: jsonTransactions\n        };\n        const requestOptions = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        };\n        fetch(\"http://localhost:5000/api/v1/matchTransactionReloaded\", requestOptions).then((response)=>response.json()).then((data)=>{\n            // Handle the response here\n            console.log(\"Response from Enhanced Matching:\", data);\n        }).catch((error)=>{\n            // Handle errors here\n            console.error(\"Error from Enhanced Matching:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-3 text-2xl font-semibold\",\n                    children: \"Fintary Test\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 83,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"place-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                    children: \"A test App using ReactJS-NextJS and NodeJS-Express.\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"place-items-center mt-2 mb-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Select data type:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: selectedOption,\n                            onChange: handleOptionChange,\n                            style: {\n                                backgroundColor: \"lightgray\",\n                                color: \"black\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"1\",\n                                    children: \"Normal data\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"2\",\n                                    children: \"Corrupted data\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"You selected: \",\n                                selectedText\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 93,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex place-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JsonPlaceholder__WEBPACK_IMPORTED_MODULE_2__.JsonPlaceholder, {\n                        title: \"Orders\",\n                        value: orders,\n                        onChange: (event)=>setOrders(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JsonPlaceholder__WEBPACK_IMPORTED_MODULE_2__.JsonPlaceholder, {\n                        title: \"Transactions\",\n                        value: transactions,\n                        onChange: (event)=>setTransactions(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 107,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex place-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSimpleMatching,\n                        className: \"bg-blue-500 text-white rounded px-4 py-2 m-2\",\n                        children: \"Use simple matching\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleEnhancedMatching,\n                        className: \"bg-red-500 text-white rounded px-4 py-2 m-2\",\n                        children: \"Use enhanced matching\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 119,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Side Projects\\\\fintary_test\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 82,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"TwvtgmTtEzrUQmOYcQSH+8N5byY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUNBeEIsT0FBT1A7NEJBQ1BnQyxVQUFVNUI7NEJBQ1Y2QixPQUFPO2dDQUFFQyxpQkFBaUI7Z0NBQWFDLE9BQU87NEJBQVE7OzhDQUV0RCw4REFBQ0M7b0NBQU83QixPQUFNOzhDQUFJOzs7Ozs7OENBQ2xCLDhEQUFDNkI7b0NBQU83QixPQUFNOzhDQUFJOzs7Ozs7Ozs7Ozs7c0NBRW5CLDhEQUFDdUI7O2dDQUFFO2dDQUFlNUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHcEIsOERBQUMwQjtnQkFBSUQsV0FBVTs7a0NBQ2QsOERBQUN2Qyx3RUFBZUE7d0JBQ2ZpRCxPQUFPO3dCQUNQOUIsT0FBT2I7d0JBQ1BzQyxVQUFVLENBQUMzQixRQUFVVixVQUFVVSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FFbEQsOERBQUNuQix3RUFBZUE7d0JBQ2ZpRCxPQUFPO3dCQUNQOUIsT0FBT1Q7d0JBQ1BrQyxVQUFVLENBQUMzQixRQUFVTixnQkFBZ0JNLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUd6RCw4REFBQ3FCO2dCQUFJRCxXQUFVOztrQ0FDZCw4REFBQ1c7d0JBQ0FDLFNBQVMvQjt3QkFDVG1CLFdBQVU7a0NBQ1Q7Ozs7OztrQ0FJRiw4REFBQ1c7d0JBQ0FDLFNBQVNkO3dCQUNURSxXQUFVO2tDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNTjtHQTlId0JsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBKc29uUGxhY2Vob2xkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvSnNvblBsYWNlaG9sZGVyJztcbmltcG9ydCB7IE9yZGVyLCBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL0B0eXBlcy9pbmRleCc7XG5pbXBvcnQgZGF0YU9yZGVycyBmcm9tICcuLi8uLi9kYXRhL29yZGVycy5qc29uJztcbmltcG9ydCBkYXRhVHJhbnNhY3Rpb25zIGZyb20gJy4uLy4uL2RhdGEvdHJhbnNhY3Rpb25zLmpzb24nO1xuaW1wb3J0IGRhdGFPcmRlcnNDb3JydXB0ZWQgZnJvbSAnLi4vLi4vZGF0YS9vcmRlcnNfY29ycnVwdGVkLmpzb24nO1xuaW1wb3J0IGRhdGFUcmFuc2FjdGlvbnNDb3JydXB0ZWQgZnJvbSAnLi4vLi4vZGF0YS90cmFuc2FjdGlvbnNfY29ycnVwdGVkLmpzb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cblx0Y29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlPHN0cmluZz4oSlNPTi5zdHJpbmdpZnkoZGF0YU9yZGVycykpO1xuXHRjb25zdCBbdHJhbnNhY3Rpb25zLCBzZXRUcmFuc2FjdGlvbnNdID0gdXNlU3RhdGU8c3RyaW5nPihKU09OLnN0cmluZ2lmeShkYXRhVHJhbnNhY3Rpb25zKSk7XG5cdGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoJzEnKTtcblx0Y29uc3QgW3NlbGVjdGVkVGV4dCwgc2V0U2VsZWN0ZWRUZXh0XSA9IHVzZVN0YXRlKCdOb3JtYWwnKTtcblxuXHRjb25zdCBoYW5kbGVPcHRpb25DaGFuZ2UgPSAoZXZlbnQ6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWRPcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiMVwiKXtcblx0XHRcdHNldE9yZGVycyhKU09OLnN0cmluZ2lmeShkYXRhT3JkZXJzKSk7XG5cdFx0XHRzZXRUcmFuc2FjdGlvbnMoSlNPTi5zdHJpbmdpZnkoZGF0YVRyYW5zYWN0aW9ucykpO1xuXHRcdFx0c2V0U2VsZWN0ZWRUZXh0KFwiTm9ybWFsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRPcmRlcnMoSlNPTi5zdHJpbmdpZnkoZGF0YU9yZGVyc0NvcnJ1cHRlZCkpO1xuXHRcdFx0c2V0VHJhbnNhY3Rpb25zKEpTT04uc3RyaW5naWZ5KGRhdGFUcmFuc2FjdGlvbnNDb3JydXB0ZWQpKTtcblx0XHRcdHNldFNlbGVjdGVkVGV4dChcIkNvcnJ1cHRlZFwiKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2ltcGxlTWF0Y2hpbmcgPSAoKSA9PiB7XG5cdFx0Y29uc3QganNvbk9yZGVyczogT3JkZXJbXSA9IEpTT04ucGFyc2Uob3JkZXJzKTtcblx0XHRjb25zdCBqc29uVHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdID0gSlNPTi5wYXJzZSh0cmFuc2FjdGlvbnMpO1xuXHRcdGNvbnN0IGRhdGEgPSB7b3JkZXJzOiBqc29uT3JkZXJzLCB0cmFuc2FjdGlvbnM6IGpzb25UcmFuc2FjdGlvbnN9O1xuXG5cdFx0Y29uc3QgcmVxdWVzdE9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAvLyBTZXQgdGhlIGNvbnRlbnQgdHlwZSB0byBKU09OXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG5cdFx0fTtcblxuXHRcdGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21hdGNoVHJhbnNhY3Rpb24nLCByZXF1ZXN0T3B0aW9ucylcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0Ly8gSGFuZGxlIHRoZSByZXNwb25zZSBoZXJlXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdSZXNwb25zZSBmcm9tIFNpbXBsZSBNYXRjaGluZzonLCBkYXRhKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdC8vIEhhbmRsZSBlcnJvcnMgaGVyZVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmcm9tIFNpbXBsZSBNYXRjaGluZzonLCBlcnJvcik7XG5cdFx0XHR9KTtcblxuXHR9XG5cblx0Y29uc3QgaGFuZGxlRW5oYW5jZWRNYXRjaGluZyA9ICgpID0+IHtcblx0XHRjb25zdCBqc29uT3JkZXJzOiBPcmRlcltdID0gSlNPTi5wYXJzZShvcmRlcnMpO1xuXHRcdGNvbnN0IGpzb25UcmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10gPSBKU09OLnBhcnNlKHRyYW5zYWN0aW9ucyk7XG5cdFx0Y29uc3QgZGF0YSA9IHtvcmRlcnM6IGpzb25PcmRlcnMsIHRyYW5zYWN0aW9uczoganNvblRyYW5zYWN0aW9uc307XG5cblx0XHRjb25zdCByZXF1ZXN0T3B0aW9uczogUmVxdWVzdEluaXQgPSB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIC8vIFNldCB0aGUgY29udGVudCB0eXBlIHRvIEpTT05cblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHR9O1xuXG5cdFx0ZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWF0Y2hUcmFuc2FjdGlvblJlbG9hZGVkJywgcmVxdWVzdE9wdGlvbnMpXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgcmVzcG9uc2UgaGVyZVxuXHRcdFx0XHRjb25zb2xlLmxvZygnUmVzcG9uc2UgZnJvbSBFbmhhbmNlZCBNYXRjaGluZzonLCBkYXRhKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdC8vIEhhbmRsZSBlcnJvcnMgaGVyZVxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmcm9tIEVuaGFuY2VkIE1hdGNoaW5nOicsIGVycm9yKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTpoLVszMDBweF0gYmVmb3JlOnctWzQ4MHB4XSBiZWZvcmU6LXRyYW5zbGF0ZS14LTEvMiBiZWZvcmU6cm91bmRlZC1mdWxsIGJlZm9yZTpiZy1ncmFkaWVudC1yYWRpYWwgYmVmb3JlOmZyb20td2hpdGUgYmVmb3JlOnRvLXRyYW5zcGFyZW50IGJlZm9yZTpibHVyLTJ4bCBiZWZvcmU6Y29udGVudC1bJyddIGFmdGVyOmFic29sdXRlIGFmdGVyOi16LTIwIGFmdGVyOmgtWzE4MHB4XSBhZnRlcjp3LVsyNDBweF0gYWZ0ZXI6dHJhbnNsYXRlLXgtMS8zIGFmdGVyOmJnLWdyYWRpZW50LWNvbmljIGFmdGVyOmZyb20tc2t5LTIwMCBhZnRlcjp2aWEtYmx1ZS0yMDAgYWZ0ZXI6Ymx1ci0yeGwgYWZ0ZXI6Y29udGVudC1bJyddIGJlZm9yZTpkYXJrOmJnLWdyYWRpZW50LXRvLWJyIGJlZm9yZTpkYXJrOmZyb20tdHJhbnNwYXJlbnQgYmVmb3JlOmRhcms6dG8tYmx1ZS03MDAgYmVmb3JlOmRhcms6b3BhY2l0eS0xMCBhZnRlcjpkYXJrOmZyb20tc2t5LTkwMCBhZnRlcjpkYXJrOnZpYS1bIzAxNDFmZl0gYWZ0ZXI6ZGFyazpvcGFjaXR5LTQwIGJlZm9yZTpsZzpoLVszNjBweF0gei1bLTFdXCI+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuXHRcdFx0XHRcdFx0RmludGFyeSBUZXN0XG5cdFx0XHRcdFx0PC9oMj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbGFjZS1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cblx0XHRcdFx0XHRBIHRlc3QgQXBwIHVzaW5nIFJlYWN0SlMtTmV4dEpTIGFuZCBOb2RlSlMtRXhwcmVzcy5cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsYWNlLWl0ZW1zLWNlbnRlciBtdC0yIG1iLTJcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aDI+U2VsZWN0IGRhdGEgdHlwZTo8L2gyPlxuXHRcdFx0XHRcdDxzZWxlY3QgXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWRPcHRpb259IFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZU9wdGlvbkNoYW5nZX1cblx0XHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheScsIGNvbG9yOiAnYmxhY2snIH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj5Ob3JtYWwgZGF0YTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjJcIj5Db3JydXB0ZWQgZGF0YTwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDxwPllvdSBzZWxlY3RlZDoge3NlbGVjdGVkVGV4dH08L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggcGxhY2UtaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxKc29uUGxhY2Vob2xkZXJcblx0XHRcdFx0XHR0aXRsZT17XCJPcmRlcnNcIn1cblx0XHRcdFx0XHR2YWx1ZT17b3JkZXJzfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE9yZGVycyhldmVudC50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8SnNvblBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0dGl0bGU9e1wiVHJhbnNhY3Rpb25zXCJ9XG5cdFx0XHRcdFx0dmFsdWU9e3RyYW5zYWN0aW9uc31cblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUcmFuc2FjdGlvbnMoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlU2ltcGxlTWF0Y2hpbmd9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHB4LTQgcHktMiBtLTJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRVc2Ugc2ltcGxlIG1hdGNoaW5nXG5cdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVFbmhhbmNlZE1hdGNoaW5nfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHB4LTQgcHktMiBtLTJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRVc2UgZW5oYW5jZWQgbWF0Y2hpbmdcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21haW4+XG5cdClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkpzb25QbGFjZWhvbGRlciIsImRhdGFPcmRlcnMiLCJkYXRhVHJhbnNhY3Rpb25zIiwiZGF0YU9yZGVyc0NvcnJ1cHRlZCIsImRhdGFUcmFuc2FjdGlvbnNDb3JydXB0ZWQiLCJIb21lIiwib3JkZXJzIiwic2V0T3JkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyYW5zYWN0aW9ucyIsInNldFRyYW5zYWN0aW9ucyIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RlZFRleHQiLCJzZXRTZWxlY3RlZFRleHQiLCJoYW5kbGVPcHRpb25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2ltcGxlTWF0Y2hpbmciLCJqc29uT3JkZXJzIiwicGFyc2UiLCJqc29uVHJhbnNhY3Rpb25zIiwiZGF0YSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZUVuaGFuY2VkTWF0Y2hpbmciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwib3B0aW9uIiwidGl0bGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});