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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    overflow-y: scroll;\n    background-color: black;\n}\n\nbody {\n    background: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    background-attachment: fixed;\n    margin:0;\n    color: rgb(221, 218, 203);\n    font-family: 'Noto Sans', sans-serif\n    \n}\n\n#content {\n    border-left: 1px solid #dca564;\n    border-right: 1px solid #dca564;\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    min-width: 600px;\n    min-height: 100vh;\n    height: 100%;\n    align-items: center;\n    margin: auto;\n    background-color: #03141180;\n}\n\nh1 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 4.5rem;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    white-space: nowrap;\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n\n#header-img{\n    width: 100%;\n    height: 220px;\n    background: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n}\n\n#sawtooth {\n    margin-top: auto;\n    background-image:\n    linear-gradient(\n        135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        -135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        0deg,\n        rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%\n    );\n    background-position: top center, top center;\n    background-size: 2rem 2rem, 2rem 2rem;\n    background-repeat: repeat-x;\n    width: 100%;\n    height: 31px;\n}\n\nnav {\n    width: 100%;\n    height: 50px;\n    background-color: #121a18cb;\n    display: flex;\n    justify-content: center;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);\n    gap: 10px;\n    border-bottom: 1px solid #dca66449;\n}\n\n.nav-btn {\n    position: relative;\n    align-self: flex-end;\n    height: 50px;\n    background-color: transparent;\n    border: 0px;\n    cursor: pointer;\n    color: rgb(221, 218, 203);\n    text-transform: uppercase;\n    font-size: 16px;\n    text-shadow: 0px 0px 8px #cc8c4200;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover {\n    color: #ffe48a;\n    text-shadow: 0px 0px 8px #cc8c42;\n}\n\n.nav-btn::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    display: block;\n    width: 0px;\n    height: 1px;\n    background-color: #dca564;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover::after {\n    width: 110%;\n}\n\n#content-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 80%;\n    background-color: #121a18;\n    border-radius: 20px;\n    padding: 3%;\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);\n    border: 1px solid #dca564;\n    padding: 30px 20px;\n    animation: fadein ease-in 0.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; transform: scale(0.98,0.98);}\n    to   { opacity: 1; transform: scale(1,1);}\n}\n\nfooter {\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #121a18;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);\n    border-top: 1px solid #dca66449;\n}\n\n.rounded-circle {\n    width: 11rem; \n    height: 11rem; \n    box-shadow: 0 0 8px rgba(0,0,0,.8); \n\tbackground: url(https://cdn.discordapp.com/attachments/871914093865472011/889046568517378088/nid.png) no-repeat center center; \n\tbackground-size: cover; \n    background-color: transparent;\n    border-radius: 50%;\n    margin: auto;\n    margin-bottom: 20px;\n}\n\n.divider-wrapper {\n    width: 100%;\n    display: flex;\n    color:#9ee73d; \n    font-style: italic;\n}\n\n.menu-item {\n    width: 100%;\n    display: flex;\n    font-style: italic;\n}\n\nspan.dotted {\n    margin: 0px 4px;\n    flex: 1;\n    height: 1rem;\n    border-bottom: 1px dotted rgb(143, 145, 115);\n}\n\nspan.divider {\n    margin-left: 4px;\n    flex: 1;\n    height: 0.8rem;\n    border-bottom: 1px solid rgba(143, 145, 115, 0.541);\n}\n\n\n\nh2 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 30px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0px;\n    text-align:center;\n    text-transform: capitalize;\n    \n}\n\nh3 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 24px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0;\n    margin-top: 16px;\n}\n\np {\n    margin-bottom: 0px;\n}\n\n#menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 5%;\n}\n\n#contact-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.fas {\n    color:#9ee73d;\n    margin-right: 8px;\n}\n\nul {\n    display: flex;\n    width: 100%;\n    list-style-type: none;\n    margin: auto;\n    padding-left:0;\n    margin-top: 16px;\n    align-items: center;\n}\n\nli {\n    margin: 6px;\n    \n}\n\n@media only screen and (max-device-width: 600px) {\n    html {\n        box-sizing: border-box;\n    }\n    \n    body {\n        font-size: 1rem;\n        width: 100vw;\n        min-height: 100vh;\n        background-attachment: scroll;\n    }\n\n    header {\n        width: 100vw;\n        height: 25vh;\n    }\n\n    nav {\n        width: 100vw;\n    }\n\n    #menu-grid {\n        grid-template-columns: 1fr;\n    }\n\n    #content {\n        width: 100vw;\n        min-width: 0vw;\n        box-sizing: border-box;\n    }\n\n    .rounded-circle {\n        width: 10rem; \n        height: 10rem; \n    }\n\n    .info {\n        margin: 2rem;\n    }\n\n    h1 {\n        font-size: 350%;\n        margin-top: 5vh;\n        margin-bottom: 5vh;\n    }\n\n    h2 {\n        font-size: 3rem;\n    }\n\n    h3 {\n        font-size: 2rem;\n    }\n\n    span.divider {\n        height: 0.8rem;\n        border-bottom: 0.1rem solid rgba(143, 145, 115, 0.541);\n    }\n\n    footer {\n        width: 100vw;\n    }\n\n    ul {\n        width: 70%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    overflow-y: scroll;\n    background-color: black;\n}\n\nbody {\n    background: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    background-attachment: fixed;\n    margin:0;\n    color: rgb(221, 218, 203);\n    font-family: 'Noto Sans', sans-serif\n    \n}\n\n#content {\n    border-left: 1px solid #dca564;\n    border-right: 1px solid #dca564;\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    min-width: 600px;\n    min-height: 100vh;\n    height: 100%;\n    align-items: center;\n    margin: auto;\n    background-color: #03141180;\n}\n\nh1 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 4.5rem;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    white-space: nowrap;\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n\n#header-img{\n    width: 100%;\n    height: 220px;\n    background: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n}\n\n#sawtooth {\n    margin-top: auto;\n    background-image:\n    linear-gradient(\n        135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        -135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        0deg,\n        rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%\n    );\n    background-position: top center, top center;\n    background-size: 2rem 2rem, 2rem 2rem;\n    background-repeat: repeat-x;\n    width: 100%;\n    height: 31px;\n}\n\nnav {\n    width: 100%;\n    height: 50px;\n    background-color: #121a18cb;\n    display: flex;\n    justify-content: center;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);\n    gap: 10px;\n    border-bottom: 1px solid #dca66449;\n}\n\n.nav-btn {\n    position: relative;\n    align-self: flex-end;\n    height: 50px;\n    background-color: transparent;\n    border: 0px;\n    cursor: pointer;\n    color: rgb(221, 218, 203);\n    text-transform: uppercase;\n    font-size: 16px;\n    text-shadow: 0px 0px 8px #cc8c4200;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover {\n    color: #ffe48a;\n    text-shadow: 0px 0px 8px #cc8c42;\n}\n\n.nav-btn::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    display: block;\n    width: 0px;\n    height: 1px;\n    background-color: #dca564;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover::after {\n    width: 110%;\n}\n\n#content-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 80%;\n    background-color: #121a18;\n    border-radius: 20px;\n    padding: 3%;\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);\n    border: 1px solid #dca564;\n    padding: 30px 20px;\n    animation: fadein ease-in 0.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; transform: scale(0.98,0.98);}\n    to   { opacity: 1; transform: scale(1,1);}\n}\n\nfooter {\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #121a18;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);\n    border-top: 1px solid #dca66449;\n}\n\n.rounded-circle {\n    width: 11rem; \n    height: 11rem; \n    box-shadow: 0 0 8px rgba(0,0,0,.8); \n\tbackground: url(https://cdn.discordapp.com/attachments/871914093865472011/889046568517378088/nid.png) no-repeat center center; \n\tbackground-size: cover; \n    background-color: transparent;\n    border-radius: 50%;\n    margin: auto;\n    margin-bottom: 20px;\n}\n\n.divider-wrapper {\n    width: 100%;\n    display: flex;\n    color:#9ee73d; \n    font-style: italic;\n}\n\n.menu-item {\n    width: 100%;\n    display: flex;\n    font-style: italic;\n}\n\nspan.dotted {\n    margin: 0px 4px;\n    flex: 1;\n    height: 1rem;\n    border-bottom: 1px dotted rgb(143, 145, 115);\n}\n\nspan.divider {\n    margin-left: 4px;\n    flex: 1;\n    height: 0.8rem;\n    border-bottom: 1px solid rgba(143, 145, 115, 0.541);\n}\n\n\n\nh2 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 30px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0px;\n    text-align:center;\n    text-transform: capitalize;\n    \n}\n\nh3 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 24px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0;\n    margin-top: 16px;\n}\n\np {\n    margin-bottom: 0px;\n}\n\n#menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 5%;\n}\n\n#contact-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.fas {\n    color:#9ee73d;\n    margin-right: 8px;\n}\n\nul {\n    display: flex;\n    width: 100%;\n    list-style-type: none;\n    margin: auto;\n    padding-left:0;\n    margin-top: 16px;\n    align-items: center;\n}\n\nli {\n    margin: 6px;\n    \n}\n\n@media only screen and (max-device-width: 600px) {\n    html {\n        box-sizing: border-box;\n    }\n    \n    body {\n        font-size: 1rem;\n        width: 100vw;\n        min-height: 100vh;\n        background-attachment: scroll;\n    }\n\n    header {\n        width: 100vw;\n        height: 25vh;\n    }\n\n    nav {\n        width: 100vw;\n    }\n\n    #menu-grid {\n        grid-template-columns: 1fr;\n    }\n\n    #content {\n        width: 100vw;\n        min-width: 0vw;\n        box-sizing: border-box;\n    }\n\n    .rounded-circle {\n        width: 10rem; \n        height: 10rem; \n    }\n\n    .info {\n        margin: 2rem;\n    }\n\n    h1 {\n        font-size: 350%;\n        margin-top: 5vh;\n        margin-bottom: 5vh;\n    }\n\n    h2 {\n        font-size: 3rem;\n    }\n\n    h3 {\n        font-size: 2rem;\n    }\n\n    span.divider {\n        height: 0.8rem;\n        border-bottom: 0.1rem solid rgba(143, 145, 115, 0.541);\n    }\n\n    footer {\n        width: 100vw;\n    }\n\n    ul {\n        width: 70%;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsb0RBQVU7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxvREFBVTtBQUN4RCw4Q0FBOEMsb0RBQVU7QUFDeEQsaURBQWlELHVEQUFhO0FBQzlEO0FBQ0E7O0FBRUEsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMTMzOTg0NzMwMi1hYzQyNmE0YTdjYmI/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwMDAmcT04MCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIG1hcmdpbjowO1xcbiAgICBjb2xvcjogcmdiKDIyMSwgMjE4LCAyMDMpO1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWZcXG4gICAgXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGNhNTY0O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGNhNTY0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxNDExODA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IENhcmF0dGVyZSxjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmZTQ4YTtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNjYzhiNDIsIDBweCAwcHggOHB4IGJsYWNrLCAwcHggMHB4IDhweCBibGFjaztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLWltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4MTgzMzc2MTgyMC0wNTA5ZDMyMTcwMzk/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwMDAmcT04MCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzYXd0b290aCB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDEzNWRlZyxcXG4gICAgICAgIHRyYW5zcGFyZW50IDUwJSwgIzEyMWExODAwIDUwJVxcbiAgICApLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAtMTM1ZGVnLFxcbiAgICAgICAgdHJhbnNwYXJlbnQgNTAlLCAjMTIxYTE4MDAgNTAlXFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDBkZWcsXFxuICAgICAgICByZ2JhKDAsMCwwLDApIDMwJSwgcmdiYSgwLDAsMCwwKSAxMDAlXFxuICAgICk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXIsIHRvcCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMnJlbSAycmVtLCAycmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzFweDtcXG59XFxuXFxubmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMWExOGNiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNhNjY0NDk7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHJnYigyMjEsIDIxOCwgMjAzKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggI2NjOGM0MjAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZTQ4YTtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4ICNjYzhjNDI7XFxufVxcblxcbi5uYXYtYnRuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjYTU2NDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxufVxcblxcbi5uYXYtYnRuOmhvdmVyOjphZnRlciB7XFxuICAgIHdpZHRoOiAxMTAlO1xcbn1cXG5cXG4jY29udGVudC1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxYTE4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAzJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNhNTY0O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIGFuaW1hdGlvbjogZmFkZWluIGVhc2UtaW4gMC4zcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4LDAuOTgpO31cXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogc2NhbGUoMSwxKTt9XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFhMTg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggLTRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjYTY2NDQ5O1xcbn1cXG5cXG4ucm91bmRlZC1jaXJjbGUge1xcbiAgICB3aWR0aDogMTFyZW07IFxcbiAgICBoZWlnaHQ6IDExcmVtOyBcXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsMCwwLC44KTsgXFxuXFx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzg3MTkxNDA5Mzg2NTQ3MjAxMS84ODkwNDY1Njg1MTczNzgwODgvbmlkLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5kaXZpZGVyLXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IzllZTczZDsgXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbnNwYW4uZG90dGVkIHtcXG4gICAgbWFyZ2luOiAwcHggNHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiKDE0MywgMTQ1LCAxMTUpO1xcbn1cXG5cXG5zcGFuLmRpdmlkZXIge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQzLCAxNDUsIDExNSwgMC41NDEpO1xcbn1cXG5cXG5cXG5cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiBDYXJhdHRlcmUsY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNjYzhiNDIsIDBweCAwcHggOHB4IGJsYWNrLCAwcHggMHB4IDhweCBibGFjaztcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgXFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1mYW1pbHk6IENhcmF0dGVyZSxjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmZTQ4YTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI2NjOGI0MiwgMHB4IDBweCA4cHggYmxhY2ssIDBweCAwcHggOHB4IGJsYWNrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbiNtZW51LWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDUlO1xcbn1cXG5cXG4jY29udGFjdC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZhcyB7XFxuICAgIGNvbG9yOiM5ZWU3M2Q7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZy1sZWZ0OjA7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmxpIHtcXG4gICAgbWFyZ2luOiA2cHg7XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2MDBweCkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIH1cXG4gICAgXFxuICAgIGJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtZ3JpZCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbiAgICAjY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBtaW4td2lkdGg6IDB2dztcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIH1cXG5cXG4gICAgLnJvdW5kZWQtY2lyY2xlIHtcXG4gICAgICAgIHdpZHRoOiAxMHJlbTsgXFxuICAgICAgICBoZWlnaHQ6IDEwcmVtOyBcXG4gICAgfVxcblxcbiAgICAuaW5mbyB7XFxuICAgICAgICBtYXJnaW46IDJyZW07XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAzNTAlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICB9XFxuXFxuICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcblxcbiAgICBoMyB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgc3Bhbi5kaXZpZGVyIHtcXG4gICAgICAgIGhlaWdodDogMC44cmVtO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHJnYmEoMTQzLCAxNDUsIDExNSwgMC41NDEpO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgdWwge1xcbiAgICAgICAgd2lkdGg6IDcwJTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVNQUF1TTtJQUN2TSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFFBQVE7SUFDUix5QkFBeUI7SUFDekI7O0FBRUo7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0Isc0VBQXNFO0lBQ3RFLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVNQUF1TTtJQUN2TSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjs7Ozs7Ozs7Ozs7O0tBWUM7SUFDRCwyQ0FBMkM7SUFDM0MscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLFNBQVM7SUFDVCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksT0FBTyxVQUFVLEVBQUUsMkJBQTJCLENBQUM7SUFDL0MsT0FBTyxVQUFVLEVBQUUscUJBQXFCLENBQUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7Q0FDckMsNkhBQTZIO0NBQzdILHNCQUFzQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsWUFBWTtJQUNaLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsY0FBYztJQUNkLG1EQUFtRDtBQUN2RDs7OztBQUlBO0lBQ0ksOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0VBQXNFO0lBQ3RFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZUFBZTtJQUNmLHNFQUFzRTtJQUN0RSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXOztBQUVmOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osY0FBYztRQUNkLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsc0RBQXNEO0lBQzFEOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAxMzM5ODQ3MzAyLWFjNDI2YTRhN2NiYj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAwMCZxPTgwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMTgsIDIwMyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZlxcbiAgICBcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzE0MTE4MDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI2NjOGI0MiwgMHB4IDBweCA4cHggYmxhY2ssIDBweCAwcHggOHB4IGJsYWNrO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDgxODMzNzYxODIwLTA1MDlkMzIxNzAzOT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAwMCZxPTgwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Nhd3Rvb3RoIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMTM1ZGVnLFxcbiAgICAgICAgdHJhbnNwYXJlbnQgNTAlLCAjMTIxYTE4MDAgNTAlXFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIC0xMzVkZWcsXFxuICAgICAgICB0cmFuc3BhcmVudCA1MCUsICMxMjFhMTgwMCA1MCVcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMGRlZyxcXG4gICAgICAgIHJnYmEoMCwwLDAsMCkgMzAlLCByZ2JhKDAsMCwwLDApIDEwMCVcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlciwgdG9wIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAycmVtIDJyZW0sIDJyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxYTE4Y2I7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2E2NjQ0OTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDIyMSwgMjE4LCAyMDMpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCAjY2M4YzQyMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggI2NjOGM0MjtcXG59XFxuXFxuLm5hdi1idG46OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNhNTY0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcXG59XFxuXFxuLm5hdi1idG46aG92ZXI6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDExMCU7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFhMTg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDMlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gZWFzZS1pbiAwLjNzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOTgsMC45OCk7fVxcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO31cXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMWExODtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAtNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNhNjY0NDk7XFxufVxcblxcbi5yb3VuZGVkLWNpcmNsZSB7XFxuICAgIHdpZHRoOiAxMXJlbTsgXFxuICAgIGhlaWdodDogMTFyZW07IFxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwwLDAsLjgpOyBcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvODcxOTE0MDkzODY1NDcyMDExLzg4OTA0NjU2ODUxNzM3ODA4OC9uaWQucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmRpdmlkZXItd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjojOWVlNzNkOyBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuc3Bhbi5kb3R0ZWQge1xcbiAgICBtYXJnaW46IDBweCA0cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTQzLCAxNDUsIDExNSk7XFxufVxcblxcbnNwYW4uZGl2aWRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMC44cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDMsIDE0NSwgMTE1LCAwLjU0MSk7XFxufVxcblxcblxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6IENhcmF0dGVyZSxjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmZTQ4YTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI2NjOGI0MiwgMHB4IDBweCA4cHggYmxhY2ssIDBweCAwcHggOHB4IGJsYWNrO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBcXG59XFxuXFxuaDMge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjY2M4YjQyLCAwcHggMHB4IDhweCBibGFjaywgMHB4IDBweCA4cHggYmxhY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuI21lbnUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgY29sdW1uLWdhcDogNSU7XFxufVxcblxcbiNjb250YWN0LWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmFzIHtcXG4gICAgY29sb3I6IzllZTczZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nLWxlZnQ6MDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGkge1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAgXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDYwMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgfVxcbiAgICBcXG4gICAgYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbiAgICAjbWVudS1ncmlkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIG1pbi13aWR0aDogMHZ3O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgfVxcblxcbiAgICAucm91bmRlZC1jaXJjbGUge1xcbiAgICAgICAgd2lkdGg6IDEwcmVtOyBcXG4gICAgICAgIGhlaWdodDogMTByZW07IFxcbiAgICB9XFxuXFxuICAgIC5pbmZvIHtcXG4gICAgICAgIG1hcmdpbjogMnJlbTtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDM1MCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAgIH1cXG5cXG4gICAgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICBzcGFuLmRpdmlkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgcmdiYSgxNDMsIDE0NSwgMTE1LCAwLjU0MSk7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgICB3aWR0aDogNzAlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xuICAgIGNvbnRhY3QuY2xhc3NOYW1lID0gXCJpbmZvXCI7XG5cbiAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIuaW5uZXJIVE1MID0gXCJDb250YWN0XCJcblxuICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZGl2aWRlci13cmFwcGVyXCI7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkaXZpZGVyXCI7XG4gICAgZGl2aWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB1bC5pZCA9IFwiY29udGFjdC1kZXRhaWxzXCI7XG5cbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1tYXAtbWFya2VyLWFsdCc+PC9pPjEyMyBNYWluIFN0cmVldCwgRHVza2hhdmVuXCI7XG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHBob25lLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1waG9uZSc+PC9pPjg4OC04ODg4IChNb24tRnJpLCA4OjAwIGFtIC0gNTozMCBwbSlcIjtcbiAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZW1haWwuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmFzIGZhLWVudmVsb3BlJz48L2k+dmlwZXJpZGFlQGFuaW1haWwuY29tXCI7XG4gICAgXG4gICAgdWwuYXBwZW5kKGFkZHJlc3MsIHBob25lLCBlbWFpbCk7XG4gICAgY29udGFjdC5hcHBlbmQoaDIsIGRpdmlkZXIsIHVsKTtcbiAgICByZXR1cm4gY29udGFjdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lLmlkID0gXCJob21lXCI7XG4gICAgaG9tZS5jbGFzc05hbWUgPSBcImluZm9cIjtcblxuICAgIGxldCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpcmNsZS5jbGFzc05hbWUgPSBcInJvdW5kZWQtY2lyY2xlXCI7XG5cbiAgICBsZXQgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2aWRlci5jbGFzc05hbWUgPSBcImRpdmlkZXItd3JhcHBlclwiXG4gICAgZGl2aWRlci5pbm5lckhUTUwgPSBcIk5JRCBWSVBFUklEQUVcIjtcblxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcImRpdmlkZXJcIjtcbiAgICBkaXZpZGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmlubmVySFRNTCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCI7XG5cbiAgICBob21lLmFwcGVuZChjaXJjbGUsZGl2aWRlcixwKTtcbiAgICByZXR1cm4gaG9tZTtcbn0iLCJjb25zdCBtZW51RGF0YSA9IHJlcXVpcmUoJy4vbWVudS5qc29uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgICBtZW51LmNsYXNzTmFtZSA9IFwiaW5mb1wiO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiTWVudVwiO1xuXG4gICAgbGV0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdmlkZXIuY2xhc3NOYW1lID0gXCJkaXZpZGVyLXdyYXBwZXJcIjtcblxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcImRpdmlkZXJcIjtcbiAgICBkaXZpZGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWQuaWQgPSBcIm1lbnUtZ3JpZFwiO1xuXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgICBtZW51RGF0YS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWNhdGVnb3JpZXMuaW5jbHVkZXMoaXRlbS5jYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChpdGVtLmNhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2F0ZWdvcnkuaWQgPSB0eXBlO1xuICAgICAgICBjYXRlZ29yeS5jbGFzc05hbWUgPSBcImNhdGVnb3J5XCI7XG5cbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBoMy5pbm5lckhUTUwgPSB0eXBlO1xuICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICAgICAgbWVudURhdGEuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIG5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZG90dGVkXCI7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBwcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZChuYW1lLCBkaXZpZGVyLCBwcmljZSk7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIH0pO1xuICAgIG1lbnUuYXBwZW5kKHRpdGxlLCBkaXZpZGVyLCBncmlkKTtcbiAgICByZXR1cm4gbWVudTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lci5pZCA9IFwiY29udGVudC1jb250YWluZXJcIjtcbmxldCBjdXJyZW50VGFiID0gXCJob21lXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGxldCBoZWFkZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckltZy5pZCA9IFwiaGVhZGVyLWltZ1wiO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVmlwZXJpZGFlIENhZmVcIjtcblxuICAgIC8vIHVzZWQgdG8gYmUgYSBzYXd0b290aCBiYW5uZXIgYnV0Li5cbiAgICBsZXQgc2F3dG9vdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhd3Rvb3RoLmlkID0gXCJzYXd0b290aFwiO1xuXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbGV0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaG9tZUJ0bi5pZCA9IFwiaG9tZS1idG5cIjsgXG4gICAgaG9tZUJ0bi5jbGFzc05hbWUgPSBcIm5hdi1idG5cIjtcbiAgICBob21lQnRuLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2hhbmdlVGFicyhcImhvbWVcIik7XG4gICAgfSlcbiAgICBtZW51QnRuLmlkID0gXCJtZW51LWJ0blwiOyBcbiAgICBtZW51QnRuLmNsYXNzTmFtZSA9IFwibmF2LWJ0blwiO1xuICAgIG1lbnVCdG4uaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjaGFuZ2VUYWJzKFwibWVudVwiKTtcbiAgICB9KVxuICAgIGNvbnRhY3RCdG4uaWQgPSBcImNvbnRhY3QtYnRuXCI7IFxuICAgIGNvbnRhY3RCdG4uY2xhc3NOYW1lID0gXCJuYXYtYnRuXCI7XG4gICAgY29udGFjdEJ0bi5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZVRhYnMoXCJjb250YWN0XCIpO1xuICAgIH0pXG4gICAgXG4gICAgbmF2LmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcbiAgICBoZWFkZXJJbWcuYXBwZW5kKHRpdGxlLHNhd3Rvb3RoLCBuYXYpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJbWcpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiRGV2ZWxvcGVkIGJ5IHphcmFrdVwiO1xuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgY29udGVudC5hcHBlbmQoY3JlYXRlSGVhZGVyKCksIGNvbnRhaW5lciwgY3JlYXRlRm9vdGVyKCkpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYWJzKHRhYikge1xuICAgIGlmIChjdXJyZW50VGFiID09PSB0YWIpIHJldHVybjtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIFxuICAgIGlmICh0YWIgPT09IFwiaG9tZVwiKSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgICBpZiAodGFiID09PSBcIm1lbnVcIikgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgaWYgKHRhYiA9PT0gXCJjb250YWN0XCIpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuICAgIGN1cnJlbnRUYWIgPSB0YWI7XG59XG5cbmNyZWF0ZUNvbnRlbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=