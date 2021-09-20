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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    overflow-y: scroll;\n}\n\nbody {\n    background: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    background-attachment: fixed;\n    margin:0;\n    color: rgb(221, 218, 203);\n    font-family: 'Noto Sans', sans-serif\n    \n}\n\n#content {\n    border-left: 1px solid #dca564;\n    border-right: 1px solid #dca564;\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    min-width: 600px;\n    min-height: 100vh;\n    height: 100%;\n    align-items: center;\n    margin: auto;\n    background-color: #03141180;\n}\n\nh1 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 4.5rem;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    white-space: nowrap;\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n\n#header-img{\n    width: 100%;\n    height: 220px;\n    background: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n}\n\n#sawtooth {\n    margin-top: auto;\n    background-image:\n    linear-gradient(\n        135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        -135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        0deg,\n        rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%\n    );\n    background-position: top center, top center;\n    background-size: 2rem 2rem, 2rem 2rem;\n    background-repeat: repeat-x;\n    width: 100%;\n    height: 31px;\n}\n\nnav {\n    width: 100%;\n    height: 50px;\n    background-color: #121a18cb;\n    display: flex;\n    justify-content: center;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);\n    gap: 10px;\n    border-bottom: 1px solid #dca66449;\n}\n\n.nav-btn {\n    position: relative;\n    align-self: flex-end;\n    height: 50px;\n    background-color: transparent;\n    border: 0px;\n    cursor: pointer;\n    color: rgb(221, 218, 203);\n    text-transform: uppercase;\n    font-size: 16px;\n    text-shadow: 0px 0px 8px #cc8c4200;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover {\n    color: #ffe48a;\n    text-shadow: 0px 0px 8px #cc8c42;\n}\n\n.nav-btn::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    display: block;\n    width: 0px;\n    height: 1px;\n    background-color: #dca564;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover::after {\n    width: 110%;\n}\n\n#content-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 80%;\n    background-color: #121a18;\n    border-radius: 20px;\n    padding: 3%;\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);\n    border: 1px solid #dca564;\n    padding: 30px 20px;\n    animation: fadein ease-in 0.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; transform: scale(0.98,0.98);}\n    to   { opacity: 1; transform: scale(1,1);}\n}\n\nfooter {\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #121a18;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);\n    border-top: 1px solid #dca66449;\n}\n\n.rounded-circle {\n    width: 11rem; \n    height: 11rem; \n    box-shadow: 0 0 8px rgba(0,0,0,.8); \n\tbackground: url(https://cdn.discordapp.com/attachments/871914093865472011/889046568517378088/nid.png) no-repeat center center; \n\tbackground-size: cover; \n    background-color: transparent;\n    border-radius: 50%;\n    margin: auto;\n    margin-bottom: 20px;\n}\n\n.divider-wrapper {\n    width: 100%;\n    display: flex;\n    color:#9ee73d; \n    font-style: italic;\n}\n\n.menu-item {\n    width: 100%;\n    display: flex;\n    font-style: italic;\n}\n\nspan.dotted {\n    margin: 0px 4px;\n    flex: 1;\n    height: 1rem;\n    border-bottom: 1px dotted rgb(143, 145, 115);\n}\n\nspan.divider {\n    margin-left: 4px;\n    flex: 1;\n    height: 0.8rem;\n    border-bottom: 1px solid rgba(143, 145, 115, 0.541);\n}\n\n\n\nh2 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 30px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0px;\n    text-align:center;\n    text-transform: capitalize;\n    \n}\n\nh3 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 24px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0;\n    margin-top: 16px;\n}\n\np {\n    margin-bottom: 0px;\n}\n\n#menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 5%;\n}\n\n#contact-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.fas {\n    color:#9ee73d;\n    margin-right: 8px;\n}\n\nul {\n    display: flex;\n    width: 100%;\n    list-style-type: none;\n    margin: auto;\n    padding-left:0;\n    margin-top: 16px;\n    align-items: center;\n}\n\nli {\n    margin: 6px;\n    \n}\n\n@media only screen and (max-device-width: 400px) {\n    html {\n        box-sizing: border-box;\n    }\n    \n    body {\n        font-size: 1rem;\n        width: 100vw;\n        min-height: 100vh;\n        background-attachment: scroll;\n        box-sizing: border-box;\n    }\n\n    header {\n        height: 25vh;\n    }\n\n    nav {\n        width: 100vw;\n    }\n\n    #menu-grid {\n        grid-template-columns: 1fr;\n    }\n\n    #content {\n        width: 100vw;\n        min-width: 0vw;\n        box-sizing: border-box;\n    }\n\n    .rounded-circle {\n        width: 10rem; \n        height: 10rem; \n    }\n\n    .info {\n        margin: 0;\n    }\n\n    h1 {\n        font-size: 4rem;\n        margin-top: 5vh;\n        margin-bottom: 5vh;\n    }\n\n    h2 {\n        font-size: 3rem;\n    }\n\n    h3 {\n        font-size: 2rem;\n    }\n\n    span.divider {\n        height: 0.8rem;\n        border-bottom: 0.1rem solid rgba(143, 145, 115, 0.541);\n    }\n\n    footer {\n        width: 100vw;\n    }\n\n    ul {\n        width: 70%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    overflow-y: scroll;\n}\n\nbody {\n    background: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    background-attachment: fixed;\n    margin:0;\n    color: rgb(221, 218, 203);\n    font-family: 'Noto Sans', sans-serif\n    \n}\n\n#content {\n    border-left: 1px solid #dca564;\n    border-right: 1px solid #dca564;\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    min-width: 600px;\n    min-height: 100vh;\n    height: 100%;\n    align-items: center;\n    margin: auto;\n    background-color: #03141180;\n}\n\nh1 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 4.5rem;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    white-space: nowrap;\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n\n#header-img{\n    width: 100%;\n    height: 220px;\n    background: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n}\n\n#sawtooth {\n    margin-top: auto;\n    background-image:\n    linear-gradient(\n        135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        -135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        0deg,\n        rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%\n    );\n    background-position: top center, top center;\n    background-size: 2rem 2rem, 2rem 2rem;\n    background-repeat: repeat-x;\n    width: 100%;\n    height: 31px;\n}\n\nnav {\n    width: 100%;\n    height: 50px;\n    background-color: #121a18cb;\n    display: flex;\n    justify-content: center;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);\n    gap: 10px;\n    border-bottom: 1px solid #dca66449;\n}\n\n.nav-btn {\n    position: relative;\n    align-self: flex-end;\n    height: 50px;\n    background-color: transparent;\n    border: 0px;\n    cursor: pointer;\n    color: rgb(221, 218, 203);\n    text-transform: uppercase;\n    font-size: 16px;\n    text-shadow: 0px 0px 8px #cc8c4200;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover {\n    color: #ffe48a;\n    text-shadow: 0px 0px 8px #cc8c42;\n}\n\n.nav-btn::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    display: block;\n    width: 0px;\n    height: 1px;\n    background-color: #dca564;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover::after {\n    width: 110%;\n}\n\n#content-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 80%;\n    background-color: #121a18;\n    border-radius: 20px;\n    padding: 3%;\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);\n    border: 1px solid #dca564;\n    padding: 30px 20px;\n    animation: fadein ease-in 0.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; transform: scale(0.98,0.98);}\n    to   { opacity: 1; transform: scale(1,1);}\n}\n\nfooter {\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #121a18;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);\n    border-top: 1px solid #dca66449;\n}\n\n.rounded-circle {\n    width: 11rem; \n    height: 11rem; \n    box-shadow: 0 0 8px rgba(0,0,0,.8); \n\tbackground: url(https://cdn.discordapp.com/attachments/871914093865472011/889046568517378088/nid.png) no-repeat center center; \n\tbackground-size: cover; \n    background-color: transparent;\n    border-radius: 50%;\n    margin: auto;\n    margin-bottom: 20px;\n}\n\n.divider-wrapper {\n    width: 100%;\n    display: flex;\n    color:#9ee73d; \n    font-style: italic;\n}\n\n.menu-item {\n    width: 100%;\n    display: flex;\n    font-style: italic;\n}\n\nspan.dotted {\n    margin: 0px 4px;\n    flex: 1;\n    height: 1rem;\n    border-bottom: 1px dotted rgb(143, 145, 115);\n}\n\nspan.divider {\n    margin-left: 4px;\n    flex: 1;\n    height: 0.8rem;\n    border-bottom: 1px solid rgba(143, 145, 115, 0.541);\n}\n\n\n\nh2 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 30px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0px;\n    text-align:center;\n    text-transform: capitalize;\n    \n}\n\nh3 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 24px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0;\n    margin-top: 16px;\n}\n\np {\n    margin-bottom: 0px;\n}\n\n#menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 5%;\n}\n\n#contact-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.fas {\n    color:#9ee73d;\n    margin-right: 8px;\n}\n\nul {\n    display: flex;\n    width: 100%;\n    list-style-type: none;\n    margin: auto;\n    padding-left:0;\n    margin-top: 16px;\n    align-items: center;\n}\n\nli {\n    margin: 6px;\n    \n}\n\n@media only screen and (max-device-width: 400px) {\n    html {\n        box-sizing: border-box;\n    }\n    \n    body {\n        font-size: 1rem;\n        width: 100vw;\n        min-height: 100vh;\n        background-attachment: scroll;\n        box-sizing: border-box;\n    }\n\n    header {\n        height: 25vh;\n    }\n\n    nav {\n        width: 100vw;\n    }\n\n    #menu-grid {\n        grid-template-columns: 1fr;\n    }\n\n    #content {\n        width: 100vw;\n        min-width: 0vw;\n        box-sizing: border-box;\n    }\n\n    .rounded-circle {\n        width: 10rem; \n        height: 10rem; \n    }\n\n    .info {\n        margin: 0;\n    }\n\n    h1 {\n        font-size: 4rem;\n        margin-top: 5vh;\n        margin-bottom: 5vh;\n    }\n\n    h2 {\n        font-size: 3rem;\n    }\n\n    h3 {\n        font-size: 2rem;\n    }\n\n    span.divider {\n        height: 0.8rem;\n        border-bottom: 0.1rem solid rgba(143, 145, 115, 0.541);\n    }\n\n    footer {\n        width: 100vw;\n    }\n\n    ul {\n        width: 70%;\n    }\n}"],"sourceRoot":""}]);
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
const menuData = __webpack_require__(/*! ./menu.json */ "./src/menu.json");





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixvREFBVTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLG9EQUFVO0FBQ3hELDhDQUE4QyxvREFBVTtBQUN4RCxpREFBaUQsdURBQWE7QUFDOUQ7QUFDQTs7QUFFQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDEzMzk4NDczMDItYWM0MjZhNGE3Y2JiP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDAwJnE9ODApIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBtYXJnaW46MDtcXG4gICAgY29sb3I6IHJnYigyMjEsIDIxOCwgMjAzKTtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmXFxuICAgIFxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RjYTU2NDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RjYTU2NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTQxMTgwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDYXJhdHRlcmUsY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjY2M4YjQyLCAwcHggMHB4IDhweCBibGFjaywgMHB4IDBweCA4cHggYmxhY2s7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1pbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODE4MzM3NjE4MjAtMDUwOWQzMjE3MDM5P2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDAwJnE9ODApIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2F3dG9vdGgge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAxMzVkZWcsXFxuICAgICAgICB0cmFuc3BhcmVudCA1MCUsICMxMjFhMTgwMCA1MCVcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgLTEzNWRlZyxcXG4gICAgICAgIHRyYW5zcGFyZW50IDUwJSwgIzEyMWExODAwIDUwJVxcbiAgICApLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAwZGVnLFxcbiAgICAgICAgcmdiYSgwLDAsMCwwKSAzMCUsIHJnYmEoMCwwLDAsMCkgMTAwJVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyLCB0b3AgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDJyZW0gMnJlbSwgMnJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMxcHg7XFxufVxcblxcbm5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFhMThjYjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjYTY2NDQ5O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMTgsIDIwMyk7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4ICNjYzhjNDIwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxufVxcblxcbi5uYXYtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCAjY2M4YzQyO1xcbn1cXG5cXG4ubmF2LWJ0bjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2E1NjQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ0bjpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTEwJTtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMWExODtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMyU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjYTU2NDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgICBhbmltYXRpb246IGZhZGVpbiBlYXNlLWluIDAuM3M7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45OCwwLjk4KTt9XFxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7fVxcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxYTE4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IC00cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2E2NjQ0OTtcXG59XFxuXFxuLnJvdW5kZWQtY2lyY2xlIHtcXG4gICAgd2lkdGg6IDExcmVtOyBcXG4gICAgaGVpZ2h0OiAxMXJlbTsgXFxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLDAsMCwuOCk7IFxcblxcdGJhY2tncm91bmQ6IHVybChodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy84NzE5MTQwOTM4NjU0NzIwMTEvODg5MDQ2NTY4NTE3Mzc4MDg4L25pZC5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGl2aWRlci13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiM5ZWU3M2Q7IFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5zcGFuLmRvdHRlZCB7XFxuICAgIG1hcmdpbjogMHB4IDRweDtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxNDMsIDE0NSwgMTE1KTtcXG59XFxuXFxuc3Bhbi5kaXZpZGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0MywgMTQ1LCAxMTUsIDAuNTQxKTtcXG59XFxuXFxuXFxuXFxuaDIge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjY2M4YjQyLCAwcHggMHB4IDhweCBibGFjaywgMHB4IDBweCA4cHggYmxhY2s7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIFxcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiBDYXJhdHRlcmUsY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNjYzhiNDIsIDBweCAwcHggOHB4IGJsYWNrLCAwcHggMHB4IDhweCBibGFjaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4jbWVudS1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiA1JTtcXG59XFxuXFxuI2NvbnRhY3QtZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mYXMge1xcbiAgICBjb2xvcjojOWVlNzNkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmctbGVmdDowO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5saSB7XFxuICAgIG1hcmdpbjogNnB4O1xcbiAgICBcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDAwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB9XFxuICAgIFxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbiAgICAjbWVudS1ncmlkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIG1pbi13aWR0aDogMHZ3O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgfVxcblxcbiAgICAucm91bmRlZC1jaXJjbGUge1xcbiAgICAgICAgd2lkdGg6IDEwcmVtOyBcXG4gICAgICAgIGhlaWdodDogMTByZW07IFxcbiAgICB9XFxuXFxuICAgIC5pbmZvIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAgIH1cXG5cXG4gICAgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICBzcGFuLmRpdmlkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmdiYSgxNDMsIDE0NSwgMTE1LCAwLjU0MSk7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1TUFBdU07SUFDdk0sc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixRQUFR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QUNkLGVBQWU7SUFDZixzRUFBc0U7SUFDdEUsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsNkJBQTZCO1FBQzdCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7UUFDZCxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsc0RBQXNEO0lBQzFEOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDEzMzk4NDczMDItYWM0MjZhNGE3Y2JiP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDAwJnE9ODApIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBtYXJnaW46MDtcXG4gICAgY29sb3I6IHJnYigyMjEsIDIxOCwgMjAzKTtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmXFxuICAgIFxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RjYTU2NDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RjYTU2NDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTQxMTgwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDYXJhdHRlcmUsY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjY2M4YjQyLCAwcHggMHB4IDhweCBibGFjaywgMHB4IDBweCA4cHggYmxhY2s7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1pbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODE4MzM3NjE4MjAtMDUwOWQzMjE3MDM5P2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDAwJnE9ODApIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2F3dG9vdGgge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAxMzVkZWcsXFxuICAgICAgICB0cmFuc3BhcmVudCA1MCUsICMxMjFhMTgwMCA1MCVcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgLTEzNWRlZyxcXG4gICAgICAgIHRyYW5zcGFyZW50IDUwJSwgIzEyMWExODAwIDUwJVxcbiAgICApLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAwZGVnLFxcbiAgICAgICAgcmdiYSgwLDAsMCwwKSAzMCUsIHJnYmEoMCwwLDAsMCkgMTAwJVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyLCB0b3AgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDJyZW0gMnJlbSwgMnJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMxcHg7XFxufVxcblxcbm5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFhMThjYjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjYTY2NDQ5O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMTgsIDIwMyk7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4ICNjYzhjNDIwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxufVxcblxcbi5uYXYtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCAjY2M4YzQyO1xcbn1cXG5cXG4ubmF2LWJ0bjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2E1NjQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ0bjpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTEwJTtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMWExODtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMyU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjYTU2NDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgICBhbmltYXRpb246IGZhZGVpbiBlYXNlLWluIDAuM3M7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45OCwwLjk4KTt9XFxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7fVxcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxYTE4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IC00cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2E2NjQ0OTtcXG59XFxuXFxuLnJvdW5kZWQtY2lyY2xlIHtcXG4gICAgd2lkdGg6IDExcmVtOyBcXG4gICAgaGVpZ2h0OiAxMXJlbTsgXFxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLDAsMCwuOCk7IFxcblxcdGJhY2tncm91bmQ6IHVybChodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy84NzE5MTQwOTM4NjU0NzIwMTEvODg5MDQ2NTY4NTE3Mzc4MDg4L25pZC5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGl2aWRlci13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiM5ZWU3M2Q7IFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5zcGFuLmRvdHRlZCB7XFxuICAgIG1hcmdpbjogMHB4IDRweDtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxNDMsIDE0NSwgMTE1KTtcXG59XFxuXFxuc3Bhbi5kaXZpZGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0MywgMTQ1LCAxMTUsIDAuNTQxKTtcXG59XFxuXFxuXFxuXFxuaDIge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjY2M4YjQyLCAwcHggMHB4IDhweCBibGFjaywgMHB4IDBweCA4cHggYmxhY2s7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIFxcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiBDYXJhdHRlcmUsY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNjYzhiNDIsIDBweCAwcHggOHB4IGJsYWNrLCAwcHggMHB4IDhweCBibGFjaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4jbWVudS1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiA1JTtcXG59XFxuXFxuI2NvbnRhY3QtZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mYXMge1xcbiAgICBjb2xvcjojOWVlNzNkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmctbGVmdDowO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5saSB7XFxuICAgIG1hcmdpbjogNnB4O1xcbiAgICBcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDAwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB9XFxuICAgIFxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbiAgICAjbWVudS1ncmlkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIG1pbi13aWR0aDogMHZ3O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgfVxcblxcbiAgICAucm91bmRlZC1jaXJjbGUge1xcbiAgICAgICAgd2lkdGg6IDEwcmVtOyBcXG4gICAgICAgIGhlaWdodDogMTByZW07IFxcbiAgICB9XFxuXFxuICAgIC5pbmZvIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAgIH1cXG5cXG4gICAgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICBzcGFuLmRpdmlkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmdiYSgxNDMsIDE0NSwgMTE1LCAwLjU0MSk7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xuICAgIGNvbnRhY3QuY2xhc3NOYW1lID0gXCJpbmZvXCI7XG5cbiAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIuaW5uZXJIVE1MID0gXCJDb250YWN0XCJcblxuICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZGl2aWRlci13cmFwcGVyXCI7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkaXZpZGVyXCI7XG4gICAgZGl2aWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB1bC5pZCA9IFwiY29udGFjdC1kZXRhaWxzXCI7XG5cbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1tYXAtbWFya2VyLWFsdCc+PC9pPjEyMyBNYWluIFN0cmVldCwgRHVza2hhdmVuXCI7XG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHBob25lLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1waG9uZSc+PC9pPjg4OC04ODg4IChNb24tRnJpLCA4OjAwIGFtIC0gNTozMCBwbSlcIjtcbiAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZW1haWwuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmFzIGZhLWVudmVsb3BlJz48L2k+dmlwZXJpZGFlQGFuaW1haWwuY29tXCI7XG4gICAgXG4gICAgdWwuYXBwZW5kKGFkZHJlc3MsIHBob25lLCBlbWFpbCk7XG4gICAgY29udGFjdC5hcHBlbmQoaDIsIGRpdmlkZXIsIHVsKTtcbiAgICByZXR1cm4gY29udGFjdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lLmlkID0gXCJob21lXCI7XG4gICAgaG9tZS5jbGFzc05hbWUgPSBcImluZm9cIjtcblxuICAgIGxldCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpcmNsZS5jbGFzc05hbWUgPSBcInJvdW5kZWQtY2lyY2xlXCI7XG5cbiAgICBsZXQgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2aWRlci5jbGFzc05hbWUgPSBcImRpdmlkZXItd3JhcHBlclwiXG4gICAgZGl2aWRlci5pbm5lckhUTUwgPSBcIk5JRCBWSVBFUklEQUVcIjtcblxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcImRpdmlkZXJcIjtcbiAgICBkaXZpZGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmlubmVySFRNTCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCI7XG5cbiAgICBob21lLmFwcGVuZChjaXJjbGUsZGl2aWRlcixwKTtcbiAgICByZXR1cm4gaG9tZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XG4gICAgbWVudS5jbGFzc05hbWUgPSBcImluZm9cIjtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZGl2aWRlci13cmFwcGVyXCI7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkaXZpZGVyXCI7XG4gICAgZGl2aWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkLmlkID0gXCJtZW51LWdyaWRcIjtcblxuICAgIGxldCBjYXRlZ29yaWVzID0gW107XG4gICAgbWVudURhdGEuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzLmluY2x1ZGVzKGl0ZW0uY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goaXRlbS5jYXRlZ29yeSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjYXRlZ29yaWVzLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmlkID0gdHlwZTtcbiAgICAgICAgY2F0ZWdvcnkuY2xhc3NOYW1lID0gXCJjYXRlZ29yeVwiO1xuXG4gICAgICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgaDMuaW5uZXJIVE1MID0gdHlwZTtcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgICAgIG1lbnVEYXRhLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBuYW1lLmlubmVySFRNTCA9IGl0ZW0ubmFtZTtcblxuICAgICAgICAgICAgICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgZGl2aWRlci5jbGFzc05hbWUgPSBcImRvdHRlZFwiO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gaXRlbS5wcmljZTtcblxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQobmFtZSwgZGl2aWRlciwgcHJpY2UpO1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgICBtZW51LmFwcGVuZCh0aXRsZSwgZGl2aWRlciwgZ3JpZCk7XG4gICAgcmV0dXJuIG1lbnU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbmNvbnN0IG1lbnVEYXRhID0gcmVxdWlyZSgnLi9tZW51Lmpzb24nKTtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyLmlkID0gXCJjb250ZW50LWNvbnRhaW5lclwiO1xubGV0IGN1cnJlbnRUYWIgPSBcImhvbWVcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgbGV0IGhlYWRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVySW1nLmlkID0gXCJoZWFkZXItaW1nXCI7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJWaXBlcmlkYWUgQ2FmZVwiO1xuXG4gICAgLy8gdXNlZCB0byBiZSBhIHNhd3Rvb3RoIGJhbm5lciBidXQuLlxuICAgIGxldCBzYXd0b290aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2F3dG9vdGguaWQgPSBcInNhd3Rvb3RoXCI7XG5cbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBsZXQgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnRuLmlkID0gXCJob21lLWJ0blwiOyBcbiAgICBob21lQnRuLmNsYXNzTmFtZSA9IFwibmF2LWJ0blwiO1xuICAgIGhvbWVCdG4uaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjaGFuZ2VUYWJzKFwiaG9tZVwiKTtcbiAgICB9KVxuICAgIG1lbnVCdG4uaWQgPSBcIm1lbnUtYnRuXCI7IFxuICAgIG1lbnVCdG4uY2xhc3NOYW1lID0gXCJuYXYtYnRuXCI7XG4gICAgbWVudUJ0bi5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZVRhYnMoXCJtZW51XCIpO1xuICAgIH0pXG4gICAgY29udGFjdEJ0bi5pZCA9IFwiY29udGFjdC1idG5cIjsgXG4gICAgY29udGFjdEJ0bi5jbGFzc05hbWUgPSBcIm5hdi1idG5cIjtcbiAgICBjb250YWN0QnRuLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2hhbmdlVGFicyhcImNvbnRhY3RcIik7XG4gICAgfSlcbiAgICBcbiAgICBuYXYuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xuICAgIGhlYWRlckltZy5hcHBlbmQodGl0bGUsc2F3dG9vdGgsIG5hdik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckltZyk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJEZXZlbG9wZWQgYnkgemFyYWt1XCI7XG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVIZWFkZXIoKSwgY29udGFpbmVyLCBjcmVhdGVGb290ZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhYnModGFiKSB7XG4gICAgaWYgKGN1cnJlbnRUYWIgPT09IHRhYikgcmV0dXJuO1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgXG4gICAgaWYgKHRhYiA9PT0gXCJob21lXCIpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICAgIGlmICh0YWIgPT09IFwibWVudVwiKSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgICBpZiAodGFiID09PSBcImNvbnRhY3RcIikgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG4gICAgY3VycmVudFRhYiA9IHRhYjtcbn1cblxuY3JlYXRlQ29udGVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==