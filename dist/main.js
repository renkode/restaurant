/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    overflow-y: scroll;\n}\n\nbody {\n    background: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    background-attachment: fixed;\n    margin:0;\n    color: rgb(221, 218, 203);\n    font-family: 'Noto Sans', sans-serif\n    \n}\n\n#content {\n    border-left: 1px solid #dca564;\n    border-right: 1px solid #dca564;\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    min-width: 600px;\n    min-height: 100vh;\n    height: 100%;\n    align-items: center;\n    margin: auto;\n    background-color: #03141180;\n}\n\nh1 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 4.5rem;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    white-space: nowrap;\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n\n#header-img{\n    width: 100%;\n    height: 220px;\n    background: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n}\n\n#sawtooth {\n    margin-top: auto;\n    background-image:\n    linear-gradient(\n        135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        -135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        0deg,\n        rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%\n    );\n    background-position: top center, top center;\n    background-size: 2rem 2rem, 2rem 2rem;\n    background-repeat: repeat-x;\n    width: 100%;\n    height: 31px;\n}\n\nnav {\n    width: 100%;\n    height: 50px;\n    background-color: #121a18cb;\n    display: flex;\n    justify-content: center;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);\n    gap: 10px;\n    border-bottom: 1px solid #dca66449;\n}\n\n.nav-btn {\n    position: relative;\n    align-self: flex-end;\n    height: 50px;\n    background-color: transparent;\n    border: 0px;\n    cursor: pointer;\n    color: rgb(221, 218, 203);\n    text-transform: uppercase;\n    font-size: 16px;\n    text-shadow: 0px 0px 8px #cc8c4200;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover {\n    color: #ffe48a;\n    text-shadow: 0px 0px 8px #cc8c42;\n}\n\n.nav-btn::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    display: block;\n    width: 0px;\n    height: 1px;\n    background-color: #dca564;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover::after {\n    width: 110%;\n}\n\n#content-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 80%;\n    background-color: #121a18;\n    border-radius: 20px;\n    padding: 3%;\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);\n    border: 1px solid #dca564;\n    padding: 30px 20px;\n    animation: fadein ease-in 0.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; transform: scale(0.98,0.98);}\n    to   { opacity: 1; transform: scale(1,1);}\n}\n\nfooter {\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #121a18;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);\n    border-top: 1px solid #dca66449;\n}\n\n.rounded-circle {\n    width: 11rem; \n    height: 11rem; \n    box-shadow: 0 0 8px rgba(0,0,0,.8); \n\tbackground: url(https://cdn.discordapp.com/attachments/871914093865472011/889046568517378088/nid.png) no-repeat center center; \n\tbackground-size: cover; \n    background-color: transparent;\n    border-radius: 50%;\n    margin: auto;\n    margin-bottom: 20px;\n}\n\n.divider-wrapper {\n    width: 100%;\n    display: flex;\n    color:#9ee73d; \n    font-style: italic;\n}\n\n.menu-item {\n    width: 100%;\n    display: flex;\n    font-style: italic;\n}\n\nspan.dotted {\n    margin: 0px 4px;\n    flex: 1;\n    height: 1rem;\n    border-bottom: 1px dotted rgb(143, 145, 115);\n}\n\nspan.divider {\n    margin-left: 4px;\n    flex: 1;\n    height: 0.8rem;\n    border-bottom: 1px solid rgba(143, 145, 115, 0.541);\n}\n\n\n\nh2 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 30px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0px;\n    text-align:center;\n    text-transform: capitalize;\n    \n}\n\nh3 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 24px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0;\n    margin-top: 16px;\n}\n\np {\n    margin-bottom: 0px;\n}\n\n#menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 5%;\n}\n\n#contact-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.fas {\n    color:#9ee73d;\n    margin-right: 8px;\n}\n\nul {\n    display: flex;\n    width: 100%;\n    list-style-type: none;\n    margin: auto;\n    padding-left:0;\n    margin-top: 16px;\n    align-items: center;\n}\n\nli {\n    margin: 6px;\n    \n}\n\n@media only screen and (max-device-width: 600px) {\n    html {\n    }\n    \n    body {\n        font-size: 1rem;\n        width: 100vw;\n        min-height: 100vh;\n        background-attachment: scroll;\n    }\n\n    header {\n        width: 100vw;\n        height: 25vh;\n    }\n\n    nav {\n        width: 100vw;\n    }\n\n    #menu-grid {\n        grid-template-columns: 1fr;\n    }\n\n    #content {\n        width: 100vw;\n        min-width: 0vw;\n    }\n\n    .rounded-circle {\n        width: 10rem; \n        height: 10rem; \n    }\n\n    .info {\n        margin: 2rem;\n    }\n\n    h1 {\n        font-size: 350%;\n        margin-top: 5vh;\n        margin-bottom: 5vh;\n    }\n\n    h2 {\n        font-size: 3rem;\n    }\n\n    h3 {\n        font-size: 2rem;\n    }\n\n    span.divider {\n        height: 0.8rem;\n        border-bottom: 0.1rem solid rgba(143, 145, 115, 0.541);\n    }\n\n    footer {\n        width: 100vw;\n    }\n\n    ul {\n        width: 70%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    overflow-y: scroll;\n}\n\nbody {\n    background: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    background-attachment: fixed;\n    margin:0;\n    color: rgb(221, 218, 203);\n    font-family: 'Noto Sans', sans-serif\n    \n}\n\n#content {\n    border-left: 1px solid #dca564;\n    border-right: 1px solid #dca564;\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    min-width: 600px;\n    min-height: 100vh;\n    height: 100%;\n    align-items: center;\n    margin: auto;\n    background-color: #03141180;\n}\n\nh1 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 4.5rem;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    white-space: nowrap;\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n\n#header-img{\n    width: 100%;\n    height: 220px;\n    background: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n}\n\n#sawtooth {\n    margin-top: auto;\n    background-image:\n    linear-gradient(\n        135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        -135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        0deg,\n        rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%\n    );\n    background-position: top center, top center;\n    background-size: 2rem 2rem, 2rem 2rem;\n    background-repeat: repeat-x;\n    width: 100%;\n    height: 31px;\n}\n\nnav {\n    width: 100%;\n    height: 50px;\n    background-color: #121a18cb;\n    display: flex;\n    justify-content: center;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);\n    gap: 10px;\n    border-bottom: 1px solid #dca66449;\n}\n\n.nav-btn {\n    position: relative;\n    align-self: flex-end;\n    height: 50px;\n    background-color: transparent;\n    border: 0px;\n    cursor: pointer;\n    color: rgb(221, 218, 203);\n    text-transform: uppercase;\n    font-size: 16px;\n    text-shadow: 0px 0px 8px #cc8c4200;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover {\n    color: #ffe48a;\n    text-shadow: 0px 0px 8px #cc8c42;\n}\n\n.nav-btn::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    display: block;\n    width: 0px;\n    height: 1px;\n    background-color: #dca564;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover::after {\n    width: 110%;\n}\n\n#content-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 80%;\n    background-color: #121a18;\n    border-radius: 20px;\n    padding: 3%;\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);\n    border: 1px solid #dca564;\n    padding: 30px 20px;\n    animation: fadein ease-in 0.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; transform: scale(0.98,0.98);}\n    to   { opacity: 1; transform: scale(1,1);}\n}\n\nfooter {\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #121a18;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);\n    border-top: 1px solid #dca66449;\n}\n\n.rounded-circle {\n    width: 11rem; \n    height: 11rem; \n    box-shadow: 0 0 8px rgba(0,0,0,.8); \n\tbackground: url(https://cdn.discordapp.com/attachments/871914093865472011/889046568517378088/nid.png) no-repeat center center; \n\tbackground-size: cover; \n    background-color: transparent;\n    border-radius: 50%;\n    margin: auto;\n    margin-bottom: 20px;\n}\n\n.divider-wrapper {\n    width: 100%;\n    display: flex;\n    color:#9ee73d; \n    font-style: italic;\n}\n\n.menu-item {\n    width: 100%;\n    display: flex;\n    font-style: italic;\n}\n\nspan.dotted {\n    margin: 0px 4px;\n    flex: 1;\n    height: 1rem;\n    border-bottom: 1px dotted rgb(143, 145, 115);\n}\n\nspan.divider {\n    margin-left: 4px;\n    flex: 1;\n    height: 0.8rem;\n    border-bottom: 1px solid rgba(143, 145, 115, 0.541);\n}\n\n\n\nh2 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 30px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0px;\n    text-align:center;\n    text-transform: capitalize;\n    \n}\n\nh3 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 24px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0;\n    margin-top: 16px;\n}\n\np {\n    margin-bottom: 0px;\n}\n\n#menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 5%;\n}\n\n#contact-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.fas {\n    color:#9ee73d;\n    margin-right: 8px;\n}\n\nul {\n    display: flex;\n    width: 100%;\n    list-style-type: none;\n    margin: auto;\n    padding-left:0;\n    margin-top: 16px;\n    align-items: center;\n}\n\nli {\n    margin: 6px;\n    \n}\n\n@media only screen and (max-device-width: 600px) {\n    html {\n    }\n    \n    body {\n        font-size: 1rem;\n        width: 100vw;\n        min-height: 100vh;\n        background-attachment: scroll;\n    }\n\n    header {\n        width: 100vw;\n        height: 25vh;\n    }\n\n    nav {\n        width: 100vw;\n    }\n\n    #menu-grid {\n        grid-template-columns: 1fr;\n    }\n\n    #content {\n        width: 100vw;\n        min-width: 0vw;\n    }\n\n    .rounded-circle {\n        width: 10rem; \n        height: 10rem; \n    }\n\n    .info {\n        margin: 2rem;\n    }\n\n    h1 {\n        font-size: 350%;\n        margin-top: 5vh;\n        margin-bottom: 5vh;\n    }\n\n    h2 {\n        font-size: 3rem;\n    }\n\n    h3 {\n        font-size: 2rem;\n    }\n\n    span.divider {\n        height: 0.8rem;\n        border-bottom: 0.1rem solid rgba(143, 145, 115, 0.541);\n    }\n\n    footer {\n        width: 100vw;\n    }\n\n    ul {\n        width: 70%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
function createContact() {
    let contact = document.createElement("div");
    contact.id = "contact";
    contact.className = "info";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Contact"

    let divider = document.createElement("div");
    divider.className = "divider-wrapper";

    let span = document.createElement("span");
    span.className = "divider";
    divider.appendChild(span);

    let ul = document.createElement("ul");
    ul.id = "contact-details";

    let address = document.createElement("li");
    address.innerHTML = "<i class='fas fa-map-marker-alt'></i>123 Main Street, Duskhaven";
    let phone = document.createElement("li");
    phone.innerHTML = "<i class='fas fa-phone'></i>888-8888 (Mon-Fri, 8:00 am - 5:30 pm)";
    let email = document.createElement("li");
    email.innerHTML = "<i class='fas fa-envelope'></i>viperidae@animail.com";
    
    ul.append(address, phone, email);
    contact.append(h2, divider, ul);
    return contact;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
    let home = document.createElement("div");
    home.id = "home";
    home.className = "info";

    let circle = document.createElement("div");
    circle.className = "rounded-circle";

    let divider = document.createElement("div");
    divider.className = "divider-wrapper"
    divider.innerHTML = "NID VIPERIDAE";

    let span = document.createElement("span");
    span.className = "divider";
    divider.appendChild(span);

    let p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    home.append(circle,divider,p);
    return home;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
const menuData = __webpack_require__(/*! ./menu.json */ "./src/menu.json");

function createMenu() {
    let menu = document.createElement("div");
    menu.id = "menu";
    menu.className = "info";

    let title = document.createElement("h2");
    title.innerHTML = "Menu";

    let divider = document.createElement("div");
    divider.className = "divider-wrapper";

    let span = document.createElement("span");
    span.className = "divider";
    divider.appendChild(span);

    let grid = document.createElement("div");
    grid.id = "menu-grid";

    let categories = [];
    menuData.items.forEach(item => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    });
    categories.forEach(type => {
        let category = document.createElement("div");
        category.id = type;
        category.className = "category";

        let h3 = document.createElement("h3");
        h3.innerHTML = type;
        category.appendChild(h3);

        menuData.items.forEach(item => {
            if (item.category === type) {
                let div = document.createElement("div");
                div.className = "menu-item";

                let name = document.createElement("span");
                name.innerHTML = item.name;

                let divider = document.createElement("span");
                divider.className = "dotted";

                let price = document.createElement("span");
                price.innerHTML = item.price;

                div.append(name, divider, price);
                category.appendChild(div);
            }
        });
        grid.appendChild(category);
    });
    menu.append(title, divider, grid);
    return menu;
}

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"items":[{"category":"Coffee","name":"Cold Brew","price":"300δ"},{"category":"Coffee","name":"Iced Latte","price":"350δ"},{"category":"Coffee","name":"Espresso","price":"400δ"},{"category":"Coffee","name":"Cappuccino","price":"420δ"},{"category":"Teas","name":"Green Tea","price":"150δ"},{"category":"Teas","name":"Black Tea","price":"250δ"},{"category":"Wine","name":"Red Wine","price":"400δ"},{"category":"Wine","name":"Sparkling Wine","price":"550δ"},{"category":"Cocktails","name":"Margarita","price":"400δ"},{"category":"Cocktails","name":"Martini","price":"500δ"},{"category":"Cocktails","name":"The Viper","price":"800δ"},{"category":"Sandwiches","name":"Ham & Cheese","price":"1000δ"},{"category":"Sandwiches","name":"BLT","price":"1200δ"},{"category":"Pastries","name":"Glazed Donut","price":"500δ"},{"category":"Pastries","name":"Anima Cake","price":"750δ"},{"category":"Snacks","name":"Candy Pop","price":"100δ"},{"category":"Snacks","name":"Chocolate Bar","price":"150δ"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
//import css from "./style.css";






let content = document.getElementById("content");
let container = document.createElement("div");
container.id = "content-container";
let currentTab = "home";

function createHeader() {
    let header = document.createElement("header");

    let headerImg = document.createElement("div");
    headerImg.id = "header-img";

    let title = document.createElement("h1");
    title.innerHTML = "Viperidae Cafe";

    // used to be a sawtooth banner but..
    let sawtooth = document.createElement("div");
    sawtooth.id = "sawtooth";

    let nav = document.createElement("nav");
    let homeBtn = document.createElement("button");
    let menuBtn = document.createElement("button");
    let contactBtn = document.createElement("button");
    homeBtn.id = "home-btn"; 
    homeBtn.className = "nav-btn";
    homeBtn.innerHTML = "Home";
    homeBtn.addEventListener("click", () => {
        changeTabs("home");
    })
    menuBtn.id = "menu-btn"; 
    menuBtn.className = "nav-btn";
    menuBtn.innerHTML = "Menu";
    menuBtn.addEventListener("click", () => {
        changeTabs("menu");
    })
    contactBtn.id = "contact-btn"; 
    contactBtn.className = "nav-btn";
    contactBtn.innerHTML = "Contact";
    contactBtn.addEventListener("click", () => {
        changeTabs("contact");
    })
    
    nav.append(homeBtn, menuBtn, contactBtn);
    headerImg.append(title,sawtooth, nav);
    header.appendChild(headerImg);

    return header;
}

function createFooter() {
    let footer = document.createElement("footer");
    footer.textContent = "Developed by zaraku";
    return footer;
}

function createContent() {
    container.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    content.append(createHeader(), container, createFooter());
}

function changeTabs(tab) {
    if (currentTab === tab) return;
    container.removeChild(container.firstChild);
    
    if (tab === "home") container.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    if (tab === "menu") container.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    if (tab === "contact") container.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    currentTab = tab;
}

createContent();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHlCQUF5QixHQUFHLFVBQVUsOE1BQThNLDZCQUE2QixtQ0FBbUMsZUFBZSxnQ0FBZ0MsbURBQW1ELGNBQWMscUNBQXFDLHNDQUFzQyxvQkFBb0IsNkJBQTZCLGtCQUFrQix1QkFBdUIsd0JBQXdCLG1CQUFtQiwwQkFBMEIsbUJBQW1CLGtDQUFrQyxHQUFHLFFBQVEscUNBQXFDLHFCQUFxQix3QkFBd0IseUJBQXlCLGdCQUFnQixvQ0FBb0MsNkVBQTZFLDBCQUEwQixHQUFHLFlBQVksa0JBQWtCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLDBCQUEwQixHQUFHLGdCQUFnQixrQkFBa0Isb0JBQW9CLDhNQUE4TSw2QkFBNkIsb0JBQW9CLDZCQUE2QixHQUFHLGVBQWUsdUJBQXVCLGtTQUFrUyxrREFBa0QsNENBQTRDLGtDQUFrQyxrQkFBa0IsbUJBQW1CLEdBQUcsU0FBUyxrQkFBa0IsbUJBQW1CLGtDQUFrQyxvQkFBb0IsOEJBQThCLGlEQUFpRCxnQkFBZ0IseUNBQXlDLEdBQUcsY0FBYyx5QkFBeUIsMkJBQTJCLG1CQUFtQixvQ0FBb0Msa0JBQWtCLHNCQUFzQixnQ0FBZ0MsZ0NBQWdDLHNCQUFzQix5Q0FBeUMsdUNBQXVDLEdBQUcsb0JBQW9CLHFCQUFxQix1Q0FBdUMsR0FBRyxxQkFBcUIsb0JBQW9CLHlCQUF5QixpQkFBaUIsZ0JBQWdCLG9DQUFvQyxxQkFBcUIsaUJBQWlCLGtCQUFrQixnQ0FBZ0MsdUNBQXVDLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLHdCQUF3QixjQUFjLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixrQkFBa0IsR0FBRyxXQUFXLHFCQUFxQix3QkFBd0IsaUJBQWlCLGdDQUFnQywwQkFBMEIsa0JBQWtCLGlEQUFpRCxnQ0FBZ0MseUJBQXlCLHFDQUFxQyxHQUFHLHVCQUF1QixhQUFhLFlBQVksNkJBQTZCLGFBQWEsWUFBWSx1QkFBdUIsR0FBRyxZQUFZLG9CQUFvQixrQkFBa0IsbUJBQW1CLGdDQUFnQyw4QkFBOEIsMEJBQTBCLGtEQUFrRCxzQ0FBc0MsR0FBRyxxQkFBcUIsb0JBQW9CLHFCQUFxQiwwQ0FBMEMsbUlBQW1JLDRCQUE0QixvQ0FBb0MseUJBQXlCLG1CQUFtQiwwQkFBMEIsR0FBRyxzQkFBc0Isa0JBQWtCLG9CQUFvQixxQkFBcUIseUJBQXlCLEdBQUcsZ0JBQWdCLGtCQUFrQixvQkFBb0IseUJBQXlCLEdBQUcsaUJBQWlCLHNCQUFzQixjQUFjLG1CQUFtQixtREFBbUQsR0FBRyxrQkFBa0IsdUJBQXVCLGNBQWMscUJBQXFCLDBEQUEwRCxHQUFHLFlBQVkscUNBQXFDLHFCQUFxQixzQkFBc0IsNkVBQTZFLGtCQUFrQix3QkFBd0IsaUNBQWlDLFNBQVMsUUFBUSxxQ0FBcUMscUJBQXFCLHNCQUFzQiw2RUFBNkUsZ0JBQWdCLHVCQUF1QixHQUFHLE9BQU8seUJBQXlCLEdBQUcsZ0JBQWdCLG9CQUFvQixxQ0FBcUMscUJBQXFCLEdBQUcsc0JBQXNCLG9CQUFvQiw2QkFBNkIsR0FBRyxVQUFVLG9CQUFvQix3QkFBd0IsR0FBRyxRQUFRLG9CQUFvQixrQkFBa0IsNEJBQTRCLG1CQUFtQixxQkFBcUIsdUJBQXVCLDBCQUEwQixHQUFHLFFBQVEsa0JBQWtCLFNBQVMsc0RBQXNELFlBQVksT0FBTyxrQkFBa0IsMEJBQTBCLHVCQUF1Qiw0QkFBNEIsd0NBQXdDLE9BQU8sZ0JBQWdCLHVCQUF1Qix1QkFBdUIsT0FBTyxhQUFhLHVCQUF1QixPQUFPLG9CQUFvQixxQ0FBcUMsT0FBTyxrQkFBa0IsdUJBQXVCLHlCQUF5QixPQUFPLHlCQUF5Qix3QkFBd0IseUJBQXlCLE9BQU8sZUFBZSx1QkFBdUIsT0FBTyxZQUFZLDBCQUEwQiwwQkFBMEIsNkJBQTZCLE9BQU8sWUFBWSwwQkFBMEIsT0FBTyxZQUFZLDBCQUEwQixPQUFPLHNCQUFzQix5QkFBeUIsaUVBQWlFLE9BQU8sZ0JBQWdCLHVCQUF1QixPQUFPLFlBQVkscUJBQXFCLE9BQU8sR0FBRyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksaUJBQWlCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssZ0NBQWdDLGlDQUFpQyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsb0RBQVU7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxvREFBVTtBQUN4RCw4Q0FBOEMsb0RBQVU7QUFDeEQsaURBQWlELHVEQUFhO0FBQzlEO0FBQ0E7O0FBRUEsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAxMzM5ODQ3MzAyLWFjNDI2YTRhN2NiYj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAwMCZxPTgwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMTgsIDIwMyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZlxcbiAgICBcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzE0MTE4MDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI2NjOGI0MiwgMHB4IDBweCA4cHggYmxhY2ssIDBweCAwcHggOHB4IGJsYWNrO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDgxODMzNzYxODIwLTA1MDlkMzIxNzAzOT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAwMCZxPTgwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Nhd3Rvb3RoIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMTM1ZGVnLFxcbiAgICAgICAgdHJhbnNwYXJlbnQgNTAlLCAjMTIxYTE4MDAgNTAlXFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIC0xMzVkZWcsXFxuICAgICAgICB0cmFuc3BhcmVudCA1MCUsICMxMjFhMTgwMCA1MCVcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMGRlZyxcXG4gICAgICAgIHJnYmEoMCwwLDAsMCkgMzAlLCByZ2JhKDAsMCwwLDApIDEwMCVcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlciwgdG9wIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAycmVtIDJyZW0sIDJyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxYTE4Y2I7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2E2NjQ0OTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDIyMSwgMjE4LCAyMDMpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCAjY2M4YzQyMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggI2NjOGM0MjtcXG59XFxuXFxuLm5hdi1idG46OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNhNTY0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcXG59XFxuXFxuLm5hdi1idG46aG92ZXI6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDExMCU7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFhMTg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDMlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gZWFzZS1pbiAwLjNzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOTgsMC45OCk7fVxcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO31cXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMWExODtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAtNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNhNjY0NDk7XFxufVxcblxcbi5yb3VuZGVkLWNpcmNsZSB7XFxuICAgIHdpZHRoOiAxMXJlbTsgXFxuICAgIGhlaWdodDogMTFyZW07IFxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwwLDAsLjgpOyBcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvODcxOTE0MDkzODY1NDcyMDExLzg4OTA0NjU2ODUxNzM3ODA4OC9uaWQucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmRpdmlkZXItd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjojOWVlNzNkOyBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuc3Bhbi5kb3R0ZWQge1xcbiAgICBtYXJnaW46IDBweCA0cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTQzLCAxNDUsIDExNSk7XFxufVxcblxcbnNwYW4uZGl2aWRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMC44cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDMsIDE0NSwgMTE1LCAwLjU0MSk7XFxufVxcblxcblxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6IENhcmF0dGVyZSxjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmZTQ4YTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI2NjOGI0MiwgMHB4IDBweCA4cHggYmxhY2ssIDBweCAwcHggOHB4IGJsYWNrO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBcXG59XFxuXFxuaDMge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjY2M4YjQyLCAwcHggMHB4IDhweCBibGFjaywgMHB4IDBweCA4cHggYmxhY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuI21lbnUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgY29sdW1uLWdhcDogNSU7XFxufVxcblxcbiNjb250YWN0LWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmFzIHtcXG4gICAgY29sb3I6IzllZTczZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nLWxlZnQ6MDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGkge1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAgXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDYwMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICB9XFxuICAgIFxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMjV2aDtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuXFxuICAgICNtZW51LWdyaWQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgbWluLXdpZHRoOiAwdnc7XFxuICAgIH1cXG5cXG4gICAgLnJvdW5kZWQtY2lyY2xlIHtcXG4gICAgICAgIHdpZHRoOiAxMHJlbTsgXFxuICAgICAgICBoZWlnaHQ6IDEwcmVtOyBcXG4gICAgfVxcblxcbiAgICAuaW5mbyB7XFxuICAgICAgICBtYXJnaW46IDJyZW07XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAzNTAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICB9XFxuXFxuICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcblxcbiAgICBoMyB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgc3Bhbi5kaXZpZGVyIHtcXG4gICAgICAgIGhlaWdodDogMC44cmVtO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHJnYmEoMTQzLCAxNDUsIDExNSwgMC41NDEpO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgdWwge1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdU1BQXVNO0lBQ3ZNLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLHlCQUF5QjtJQUN6Qjs7QUFFSjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixzRUFBc0U7SUFDdEUsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdU1BQXVNO0lBQ3ZNLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCOzs7Ozs7Ozs7Ozs7S0FZQztJQUNELDJDQUEyQztJQUMzQyxxQ0FBcUM7SUFDckMsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsU0FBUztJQUNULGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRSwyQkFBMkIsQ0FBQztJQUMvQyxPQUFPLFVBQVUsRUFBRSxxQkFBcUIsQ0FBQztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztDQUNyQyw2SEFBNkg7Q0FDN0gsc0JBQXNCO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxZQUFZO0lBQ1osNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxjQUFjO0lBQ2QsbURBQW1EO0FBQ3ZEOzs7O0FBSUE7SUFDSSw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGVBQWU7SUFDZixzRUFBc0U7SUFDdEUsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7O0FBRTlCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0VBQXNFO0lBQ3RFLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSTtJQUNBOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLHNEQUFzRDtJQUMxRDs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAxMzM5ODQ3MzAyLWFjNDI2YTRhN2NiYj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAwMCZxPTgwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMTgsIDIwMyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZlxcbiAgICBcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzE0MTE4MDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI2NjOGI0MiwgMHB4IDBweCA4cHggYmxhY2ssIDBweCAwcHggOHB4IGJsYWNrO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDgxODMzNzYxODIwLTA1MDlkMzIxNzAzOT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAwMCZxPTgwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Nhd3Rvb3RoIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMTM1ZGVnLFxcbiAgICAgICAgdHJhbnNwYXJlbnQgNTAlLCAjMTIxYTE4MDAgNTAlXFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIC0xMzVkZWcsXFxuICAgICAgICB0cmFuc3BhcmVudCA1MCUsICMxMjFhMTgwMCA1MCVcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMGRlZyxcXG4gICAgICAgIHJnYmEoMCwwLDAsMCkgMzAlLCByZ2JhKDAsMCwwLDApIDEwMCVcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlciwgdG9wIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAycmVtIDJyZW0sIDJyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxYTE4Y2I7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2E2NjQ0OTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDIyMSwgMjE4LCAyMDMpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCAjY2M4YzQyMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggI2NjOGM0MjtcXG59XFxuXFxuLm5hdi1idG46OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNhNTY0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcXG59XFxuXFxuLm5hdi1idG46aG92ZXI6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDExMCU7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFhMTg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDMlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gZWFzZS1pbiAwLjNzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOTgsMC45OCk7fVxcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO31cXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMWExODtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAtNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNhNjY0NDk7XFxufVxcblxcbi5yb3VuZGVkLWNpcmNsZSB7XFxuICAgIHdpZHRoOiAxMXJlbTsgXFxuICAgIGhlaWdodDogMTFyZW07IFxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwwLDAsLjgpOyBcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvODcxOTE0MDkzODY1NDcyMDExLzg4OTA0NjU2ODUxNzM3ODA4OC9uaWQucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmRpdmlkZXItd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjojOWVlNzNkOyBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuc3Bhbi5kb3R0ZWQge1xcbiAgICBtYXJnaW46IDBweCA0cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTQzLCAxNDUsIDExNSk7XFxufVxcblxcbnNwYW4uZGl2aWRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMC44cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDMsIDE0NSwgMTE1LCAwLjU0MSk7XFxufVxcblxcblxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6IENhcmF0dGVyZSxjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmZTQ4YTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI2NjOGI0MiwgMHB4IDBweCA4cHggYmxhY2ssIDBweCAwcHggOHB4IGJsYWNrO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBcXG59XFxuXFxuaDMge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjY2M4YjQyLCAwcHggMHB4IDhweCBibGFjaywgMHB4IDBweCA4cHggYmxhY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuI21lbnUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgY29sdW1uLWdhcDogNSU7XFxufVxcblxcbiNjb250YWN0LWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmFzIHtcXG4gICAgY29sb3I6IzllZTczZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nLWxlZnQ6MDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGkge1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAgXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDYwMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICB9XFxuICAgIFxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMjV2aDtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuXFxuICAgICNtZW51LWdyaWQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgbWluLXdpZHRoOiAwdnc7XFxuICAgIH1cXG5cXG4gICAgLnJvdW5kZWQtY2lyY2xlIHtcXG4gICAgICAgIHdpZHRoOiAxMHJlbTsgXFxuICAgICAgICBoZWlnaHQ6IDEwcmVtOyBcXG4gICAgfVxcblxcbiAgICAuaW5mbyB7XFxuICAgICAgICBtYXJnaW46IDJyZW07XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAzNTAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICB9XFxuXFxuICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcblxcbiAgICBoMyB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgc3Bhbi5kaXZpZGVyIHtcXG4gICAgICAgIGhlaWdodDogMC44cmVtO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHJnYmEoMTQzLCAxNDUsIDExNSwgMC41NDEpO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgdWwge1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9IFwiaW5mb1wiO1xuXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLmlubmVySFRNTCA9IFwiQ29udGFjdFwiXG5cbiAgICBsZXQgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2aWRlci5jbGFzc05hbWUgPSBcImRpdmlkZXItd3JhcHBlclwiO1xuXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwiZGl2aWRlclwiO1xuICAgIGRpdmlkZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuaWQgPSBcImNvbnRhY3QtZGV0YWlsc1wiO1xuXG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtbWFwLW1hcmtlci1hbHQnPjwvaT4xMjMgTWFpbiBTdHJlZXQsIER1c2toYXZlblwiO1xuICAgIGxldCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwaG9uZS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtcGhvbmUnPjwvaT44ODgtODg4OCAoTW9uLUZyaSwgODowMCBhbSAtIDU6MzAgcG0pXCI7XG4gICAgbGV0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGVtYWlsLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1lbnZlbG9wZSc+PC9pPnZpcGVyaWRhZUBhbmltYWlsLmNvbVwiO1xuICAgIFxuICAgIHVsLmFwcGVuZChhZGRyZXNzLCBwaG9uZSwgZW1haWwpO1xuICAgIGNvbnRhY3QuYXBwZW5kKGgyLCBkaXZpZGVyLCB1bCk7XG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZS5pZCA9IFwiaG9tZVwiO1xuICAgIGhvbWUuY2xhc3NOYW1lID0gXCJpbmZvXCI7XG5cbiAgICBsZXQgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaXJjbGUuY2xhc3NOYW1lID0gXCJyb3VuZGVkLWNpcmNsZVwiO1xuXG4gICAgbGV0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdmlkZXIuY2xhc3NOYW1lID0gXCJkaXZpZGVyLXdyYXBwZXJcIlxuICAgIGRpdmlkZXIuaW5uZXJIVE1MID0gXCJOSUQgVklQRVJJREFFXCI7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkaXZpZGVyXCI7XG4gICAgZGl2aWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC5pbm5lckhUTUwgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiO1xuXG4gICAgaG9tZS5hcHBlbmQoY2lyY2xlLGRpdmlkZXIscCk7XG4gICAgcmV0dXJuIGhvbWU7XG59IiwiY29uc3QgbWVudURhdGEgPSByZXF1aXJlKCcuL21lbnUuanNvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XG4gICAgbWVudS5jbGFzc05hbWUgPSBcImluZm9cIjtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZGl2aWRlci13cmFwcGVyXCI7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkaXZpZGVyXCI7XG4gICAgZGl2aWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkLmlkID0gXCJtZW51LWdyaWRcIjtcblxuICAgIGxldCBjYXRlZ29yaWVzID0gW107XG4gICAgbWVudURhdGEuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzLmluY2x1ZGVzKGl0ZW0uY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goaXRlbS5jYXRlZ29yeSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjYXRlZ29yaWVzLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmlkID0gdHlwZTtcbiAgICAgICAgY2F0ZWdvcnkuY2xhc3NOYW1lID0gXCJjYXRlZ29yeVwiO1xuXG4gICAgICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgaDMuaW5uZXJIVE1MID0gdHlwZTtcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgICAgIG1lbnVEYXRhLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBuYW1lLmlubmVySFRNTCA9IGl0ZW0ubmFtZTtcblxuICAgICAgICAgICAgICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgZGl2aWRlci5jbGFzc05hbWUgPSBcImRvdHRlZFwiO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gaXRlbS5wcmljZTtcblxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQobmFtZSwgZGl2aWRlciwgcHJpY2UpO1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgICBtZW51LmFwcGVuZCh0aXRsZSwgZGl2aWRlciwgZ3JpZCk7XG4gICAgcmV0dXJuIG1lbnU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIuaWQgPSBcImNvbnRlbnQtY29udGFpbmVyXCI7XG5sZXQgY3VycmVudFRhYiA9IFwiaG9tZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICBsZXQgaGVhZGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJJbWcuaWQgPSBcImhlYWRlci1pbWdcIjtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlZpcGVyaWRhZSBDYWZlXCI7XG5cbiAgICAvLyB1c2VkIHRvIGJlIGEgc2F3dG9vdGggYmFubmVyIGJ1dC4uXG4gICAgbGV0IHNhd3Rvb3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYXd0b290aC5pZCA9IFwic2F3dG9vdGhcIjtcblxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhvbWVCdG4uaWQgPSBcImhvbWUtYnRuXCI7IFxuICAgIGhvbWVCdG4uY2xhc3NOYW1lID0gXCJuYXYtYnRuXCI7XG4gICAgaG9tZUJ0bi5pbm5lckhUTUwgPSBcIkhvbWVcIjtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZVRhYnMoXCJob21lXCIpO1xuICAgIH0pXG4gICAgbWVudUJ0bi5pZCA9IFwibWVudS1idG5cIjsgXG4gICAgbWVudUJ0bi5jbGFzc05hbWUgPSBcIm5hdi1idG5cIjtcbiAgICBtZW51QnRuLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2hhbmdlVGFicyhcIm1lbnVcIik7XG4gICAgfSlcbiAgICBjb250YWN0QnRuLmlkID0gXCJjb250YWN0LWJ0blwiOyBcbiAgICBjb250YWN0QnRuLmNsYXNzTmFtZSA9IFwibmF2LWJ0blwiO1xuICAgIGNvbnRhY3RCdG4uaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjaGFuZ2VUYWJzKFwiY29udGFjdFwiKTtcbiAgICB9KVxuICAgIFxuICAgIG5hdi5hcHBlbmQoaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bik7XG4gICAgaGVhZGVySW1nLmFwcGVuZCh0aXRsZSxzYXd0b290aCwgbmF2KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySW1nKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkRldmVsb3BlZCBieSB6YXJha3VcIjtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUhlYWRlcigpLCBjb250YWluZXIsIGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFicyh0YWIpIHtcbiAgICBpZiAoY3VycmVudFRhYiA9PT0gdGFiKSByZXR1cm47XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICBcbiAgICBpZiAodGFiID09PSBcImhvbWVcIikgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgaWYgKHRhYiA9PT0gXCJtZW51XCIpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgIGlmICh0YWIgPT09IFwiY29udGFjdFwiKSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbiAgICBjdXJyZW50VGFiID0gdGFiO1xufVxuXG5jcmVhdGVDb250ZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9