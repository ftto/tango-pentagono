"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@emotion/styled"
const styled_namespaceObject = require("@emotion/styled");
;// CONCATENATED MODULE: ./theme/index.tsx

const theme = {
    colors: {
        black1: "#000000"
    }
};
/* harmony default export */ const theme_0 = ((/* unused pure expression or super */ null && (styled)));

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./config.ts
const config = {
    title: "",
    description: ""
};
/* harmony default export */ const config_0 = (config);

;// CONCATENATED MODULE: ./components/Head.tsx



const HeadComponent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: config_0.title || "정보공개센터"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: config_0.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, user-scalable=no"
            })
        ]
    });
};
/* harmony default export */ const Head = (HeadComponent);

;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./pages/_app.tsx





const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(310));
module.exports = __webpack_exports__;

})();