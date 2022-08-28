"use strict";
(() => {
var exports = {};
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);


const ShopItem = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-a1accc362081106a" + " " + "wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-a1accc362081106a" + " " + "background",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-a1accc362081106a" + " " + "header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-a1accc362081106a" + " " + "title",
                                children: props.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-a1accc362081106a" + " " + "desc",
                                children: props.desc
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-a1accc362081106a" + " " + "body",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-a1accc362081106a" + " " + "item",
                                children: "1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-a1accc362081106a" + " " + "item",
                                children: "2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-a1accc362081106a" + " " + "item",
                                children: "2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-a1accc362081106a" + " " + "item",
                                children: "2"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "jsx-a1accc362081106a" + " " + "btn-preorder",
                        children: "Preorder →"
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "a1accc362081106a",
                children: "div.wrapper.jsx-a1accc362081106a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;background-color:black}div.background.jsx-a1accc362081106a{position:relative;width:100%;height:100%;padding-top:8px;padding-right:8px;padding-left:8px;color:black;height:100%;max-width:360px;overflow:hidden}.header.jsx-a1accc362081106a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;background-color:black;color:white}.header.jsx-a1accc362081106a>.title.jsx-a1accc362081106a{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;font-family:Monument Grotesk;font-size:28px;font-weight:400;line-height:28px;letter-spacing:-.03em;text-align:left}.header.jsx-a1accc362081106a>.desc.jsx-a1accc362081106a{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;font-size:12px;font-weight:400;line-height:12px;letter-spacing:0em;text-align:left;white-space:pre-wrap}.body.jsx-a1accc362081106a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:black;margin-top:16px}.body.jsx-a1accc362081106a>.item.jsx-a1accc362081106a{color:white;height:200px;background-color:yellow;margin-top:4px}.btn-preorder.jsx-a1accc362081106a{position:fixed;bottom:0;left:0;right:0;width:100%;height:40px;background-color:white;color:black;font-family:Monument Grotesk;font-size:20px;font-weight:400;line-height:20px;letter-spacing:0em;text-align:center}"
            })
        ]
    });
};
ShopItem.getInitialProps = ({ req , query  })=>{
    const { id  } = query;
    let title;
    let desc;
    switch(query.id){
        case "poster":
            {
                title = "Poster";
                desc = "Specification;\n\nB1 Size (70*100cm)\nDigital Print\nPrinted in Germany\nLimited Prints (20 Copies)\nDesigned by CH42 Munich";
                break;
            }
        case "drip-bag":
            {
                title = "Drip Bag";
                desc = "Specification;\n\nColombia 50%\nGuatemala 30%\nKenya 20%\nProduced by Momento Brewers";
                break;
            }
        case "t-shirts":
            {
                title = "T Shirts";
                desc = "Specification;\n\nSilkscreen Printed\nPrintstar Heavy Weight\n250g/m\xb2, 7.4oz, Cotton 100%\n-----\nSize (L: Length, S: Shoulder)\nM - L:70, S:47\nL - L:74, S:50\nXL - L:78, S:53\n-----\nDesigned by CH42 Munich";
                break;
            }
    }
    return {
        title,
        desc
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopItem);


/***/ }),

/***/ 561:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(240));
module.exports = __webpack_exports__;

})();