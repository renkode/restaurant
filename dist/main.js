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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    overflow-y: scroll;\n}\n\nbody {\n    background: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    background-attachment: fixed;\n    margin:0;\n    color: rgb(221, 218, 203);\n    font-family: 'Noto Sans', sans-serif\n    \n}\n\n#content {\n    border-left: 1px solid #dca564;\n    border-right: 1px solid #dca564;\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    min-width: 600px;\n    min-height: 100vh;\n    height: 100%;\n    align-items: center;\n    margin: auto;\n    background-color: #03141180;\n}\n\nh1 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 80px;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n\n#header-img{\n    width: 100%;\n    height: 220px;\n    background: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n}\n\n#sawtooth {\n    margin-top: auto;\n    background-image:\n    linear-gradient(\n        135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        -135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        0deg,\n        rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%\n    );\n    background-position: top center, top center;\n    background-size: 2rem 2rem, 2rem 2rem;\n    background-repeat: repeat-x;\n    width: 100%;\n    height: 31px;\n}\n\nnav {\n    width: 100%;\n    height: 50px;\n    background-color: #121a18cb;\n    display: flex;\n    justify-content: center;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);\n    gap: 10px;\n    border-bottom: 1px solid #dca66449;\n}\n\n.nav-btn {\n    position: relative;\n    align-self: flex-end;\n    height: 50px;\n    background-color: transparent;\n    border: 0px;\n    cursor: pointer;\n    color: rgb(221, 218, 203);\n    text-transform: uppercase;\n    font-size: 16px;\n    text-shadow: 0px 0px 8px #cc8c4200;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover {\n    color: #ffe48a;\n    text-shadow: 0px 0px 8px #cc8c42;\n}\n\n.nav-btn::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    display: block;\n    width: 0px;\n    height: 1px;\n    background-color: #dca564;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover::after {\n    width: 110%;\n}\n\n#content-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 80%;\n    background-color: #121a18;\n    border-radius: 20px;\n    padding: 3%;\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);\n    border: 1px solid #dca564;\n    padding: 30px 20px;\n    animation: fadein ease-in 0.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; transform: scale(0.98,0.98);}\n    to   { opacity: 1; transform: scale(1,1);}\n}\n\nfooter {\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #121a18;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);\n    border-top: 1px solid #dca66449;\n}\n\n.rounded-circle {\n    width: 11rem; \n    height: 11rem; \n    box-shadow: 0 0 8px rgba(0,0,0,.8); \n\tbackground: url(https://cdn.discordapp.com/attachments/871914093865472011/889046568517378088/nid.png) no-repeat center center; \n\tbackground-size: cover; \n    background-color: transparent;\n    border-radius: 50%;\n    margin: auto;\n    margin-bottom: 20px;\n}\n\n.divider-wrapper {\n    width: 100%;\n    display: flex;\n    color:#9ee73d; \n    font-style: italic;\n}\n\n.menu-item {\n    width: 100%;\n    display: flex;\n    font-style: italic;\n}\n\nspan.dotted {\n    margin: 0px 4px;\n    flex: 1;\n    height: 1rem;\n    border-bottom: 1px dotted rgb(143, 145, 115);\n}\n\nspan.divider {\n    margin-left: 4px;\n    flex: 1;\n    height: 0.8rem;\n    border-bottom: 1px solid rgba(143, 145, 115, 0.541);\n}\n\n\n\nh2 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 30px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0px;\n    text-align:center;\n    text-transform: capitalize;\n    \n}\n\nh3 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 24px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0;\n    margin-top: 16px;\n}\n\np {\n    margin-bottom: 0px;\n}\n\n#menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 12px;\n}\n\n#contact-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.fas {\n    color:#9ee73d;\n    margin-right: 8px;\n}\n\nul {\n    display: flex;\n    width: 100%;\n    list-style-type: none;\n    margin: auto;\n    padding-left:0;\n    margin-top: 16px;\n    align-items: center;\n}\n\nli {\n    margin: 6px;\n    \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n    overflow-y: scroll;\n}\n\nbody {\n    background: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    background-attachment: fixed;\n    margin:0;\n    color: rgb(221, 218, 203);\n    font-family: 'Noto Sans', sans-serif\n    \n}\n\n#content {\n    border-left: 1px solid #dca564;\n    border-right: 1px solid #dca564;\n    display: flex;\n    flex-direction: column;\n    width: 50vw;\n    min-width: 600px;\n    min-height: 100vh;\n    height: 100%;\n    align-items: center;\n    margin: auto;\n    background-color: #03141180;\n}\n\nh1 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 80px;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n}\n\n#header-img{\n    width: 100%;\n    height: 220px;\n    background: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) no-repeat center center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n}\n\n#sawtooth {\n    margin-top: auto;\n    background-image:\n    linear-gradient(\n        135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        -135deg,\n        transparent 50%, #121a1800 50%\n    ),\n    linear-gradient(\n        0deg,\n        rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%\n    );\n    background-position: top center, top center;\n    background-size: 2rem 2rem, 2rem 2rem;\n    background-repeat: repeat-x;\n    width: 100%;\n    height: 31px;\n}\n\nnav {\n    width: 100%;\n    height: 50px;\n    background-color: #121a18cb;\n    display: flex;\n    justify-content: center;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);\n    gap: 10px;\n    border-bottom: 1px solid #dca66449;\n}\n\n.nav-btn {\n    position: relative;\n    align-self: flex-end;\n    height: 50px;\n    background-color: transparent;\n    border: 0px;\n    cursor: pointer;\n    color: rgb(221, 218, 203);\n    text-transform: uppercase;\n    font-size: 16px;\n    text-shadow: 0px 0px 8px #cc8c4200;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover {\n    color: #ffe48a;\n    text-shadow: 0px 0px 8px #cc8c42;\n}\n\n.nav-btn::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    display: block;\n    width: 0px;\n    height: 1px;\n    background-color: #dca564;\n    transition: all ease-in-out 0.2s;\n}\n\n.nav-btn:hover::after {\n    width: 110%;\n}\n\n#content-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.info {\n    margin-top: 5%;\n    margin-bottom: 5%;\n    width: 80%;\n    background-color: #121a18;\n    border-radius: 20px;\n    padding: 3%;\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);\n    border: 1px solid #dca564;\n    padding: 30px 20px;\n    animation: fadein ease-in 0.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; transform: scale(0.98,0.98);}\n    to   { opacity: 1; transform: scale(1,1);}\n}\n\nfooter {\n    display: flex;\n    width: 100%;\n    height: 50px;\n    background-color: #121a18;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);\n    border-top: 1px solid #dca66449;\n}\n\n.rounded-circle {\n    width: 11rem; \n    height: 11rem; \n    box-shadow: 0 0 8px rgba(0,0,0,.8); \n\tbackground: url(https://cdn.discordapp.com/attachments/871914093865472011/889046568517378088/nid.png) no-repeat center center; \n\tbackground-size: cover; \n    background-color: transparent;\n    border-radius: 50%;\n    margin: auto;\n    margin-bottom: 20px;\n}\n\n.divider-wrapper {\n    width: 100%;\n    display: flex;\n    color:#9ee73d; \n    font-style: italic;\n}\n\n.menu-item {\n    width: 100%;\n    display: flex;\n    font-style: italic;\n}\n\nspan.dotted {\n    margin: 0px 4px;\n    flex: 1;\n    height: 1rem;\n    border-bottom: 1px dotted rgb(143, 145, 115);\n}\n\nspan.divider {\n    margin-left: 4px;\n    flex: 1;\n    height: 0.8rem;\n    border-bottom: 1px solid rgba(143, 145, 115, 0.541);\n}\n\n\n\nh2 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 30px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0px;\n    text-align:center;\n    text-transform: capitalize;\n    \n}\n\nh3 {\n    font-family: Carattere,cursive;\n    color: #ffe48a;\n    font-size: 24px;\n    text-shadow: 0px 0px 4px #cc8b42, 0px 0px 8px black, 0px 0px 8px black;\n    margin: 0;\n    margin-top: 16px;\n}\n\np {\n    margin-bottom: 0px;\n}\n\n#menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 12px;\n}\n\n#contact-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.fas {\n    color:#9ee73d;\n    margin-right: 8px;\n}\n\nul {\n    display: flex;\n    width: 100%;\n    list-style-type: none;\n    margin: auto;\n    padding-left:0;\n    margin-top: 16px;\n    align-items: center;\n}\n\nli {\n    margin: 6px;\n    \n}"],"sourceRoot":""}]);
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

function createFooter() {
    let footer = document.createElement("footer");
    footer.textContent = "Developed by zaraku";
    return footer;
}

function createContent() {
    container.appendChild(createHome());
    content.append(createHeader(), container, createFooter());
}

function changeTabs(tab) {
    if (currentTab === tab) return;
    container.removeChild(container.firstChild);
    
    if (tab === "home") container.appendChild(createHome());
    if (tab === "menu") container.appendChild(createMenu());
    if (tab === "contact") container.appendChild(createContact());
    currentTab = tab;
}

createContent();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAxMzM5ODQ3MzAyLWFjNDI2YTRhN2NiYj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAwMCZxPTgwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMTgsIDIwMyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZlxcbiAgICBcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkY2E1NjQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzE0MTE4MDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNjYzhiNDIsIDBweCAwcHggOHB4IGJsYWNrLCAwcHggMHB4IDhweCBibGFjaztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyLWltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4MTgzMzc2MTgyMC0wNTA5ZDMyMTcwMzk/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwMDAmcT04MCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzYXd0b290aCB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDEzNWRlZyxcXG4gICAgICAgIHRyYW5zcGFyZW50IDUwJSwgIzEyMWExODAwIDUwJVxcbiAgICApLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAtMTM1ZGVnLFxcbiAgICAgICAgdHJhbnNwYXJlbnQgNTAlLCAjMTIxYTE4MDAgNTAlXFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDBkZWcsXFxuICAgICAgICByZ2JhKDAsMCwwLDApIDMwJSwgcmdiYSgwLDAsMCwwKSAxMDAlXFxuICAgICk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXIsIHRvcCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMnJlbSAycmVtLCAycmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzFweDtcXG59XFxuXFxubmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMWExOGNiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNhNjY0NDk7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHJnYigyMjEsIDIxOCwgMjAzKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggI2NjOGM0MjAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZTQ4YTtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4ICNjYzhjNDI7XFxufVxcblxcbi5uYXYtYnRuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjYTU2NDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxufVxcblxcbi5uYXYtYnRuOmhvdmVyOjphZnRlciB7XFxuICAgIHdpZHRoOiAxMTAlO1xcbn1cXG5cXG4jY29udGVudC1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxYTE4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAzJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNhNTY0O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIGFuaW1hdGlvbjogZmFkZWluIGVhc2UtaW4gMC4zcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4LDAuOTgpO31cXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogc2NhbGUoMSwxKTt9XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFhMTg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggLTRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjYTY2NDQ5O1xcbn1cXG5cXG4ucm91bmRlZC1jaXJjbGUge1xcbiAgICB3aWR0aDogMTFyZW07IFxcbiAgICBoZWlnaHQ6IDExcmVtOyBcXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsMCwwLC44KTsgXFxuXFx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzg3MTkxNDA5Mzg2NTQ3MjAxMS84ODkwNDY1Njg1MTczNzgwODgvbmlkLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5kaXZpZGVyLXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IzllZTczZDsgXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbnNwYW4uZG90dGVkIHtcXG4gICAgbWFyZ2luOiAwcHggNHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiKDE0MywgMTQ1LCAxMTUpO1xcbn1cXG5cXG5zcGFuLmRpdmlkZXIge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQzLCAxNDUsIDExNSwgMC41NDEpO1xcbn1cXG5cXG5cXG5cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiBDYXJhdHRlcmUsY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNjYzhiNDIsIDBweCAwcHggOHB4IGJsYWNrLCAwcHggMHB4IDhweCBibGFjaztcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgXFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1mYW1pbHk6IENhcmF0dGVyZSxjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmZTQ4YTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI2NjOGI0MiwgMHB4IDBweCA4cHggYmxhY2ssIDBweCAwcHggOHB4IGJsYWNrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbiNtZW51LWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDEycHg7XFxufVxcblxcbiNjb250YWN0LWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmFzIHtcXG4gICAgY29sb3I6IzllZTczZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nLWxlZnQ6MDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGkge1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1TUFBdU07SUFDdk0sc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCOztBQUVKOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLHNFQUFzRTtBQUMxRTs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVNQUF1TTtJQUN2TSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjs7Ozs7Ozs7Ozs7O0tBWUM7SUFDRCwyQ0FBMkM7SUFDM0MscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLFNBQVM7SUFDVCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksT0FBTyxVQUFVLEVBQUUsMkJBQTJCLENBQUM7SUFDL0MsT0FBTyxVQUFVLEVBQUUscUJBQXFCLENBQUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7Q0FDckMsNkhBQTZIO0NBQzdILHNCQUFzQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsWUFBWTtJQUNaLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsY0FBYztJQUNkLG1EQUFtRDtBQUN2RDs7OztBQUlBO0lBQ0ksOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0VBQXNFO0lBQ3RFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZUFBZTtJQUNmLHNFQUFzRTtJQUN0RSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7O0FBRWZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMTMzOTg0NzMwMi1hYzQyNmE0YTdjYmI/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwMDAmcT04MCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIG1hcmdpbjowO1xcbiAgICBjb2xvcjogcmdiKDIyMSwgMjE4LCAyMDMpO1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWZcXG4gICAgXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGNhNTY0O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGNhNTY0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxNDExODA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IENhcmF0dGVyZSxjdXJzaXZlO1xcbiAgICBjb2xvcjogI2ZmZTQ4YTtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjY2M4YjQyLCAwcHggMHB4IDhweCBibGFjaywgMHB4IDBweCA4cHggYmxhY2s7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1pbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODE4MzM3NjE4MjAtMDUwOWQzMjE3MDM5P2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDAwJnE9ODApIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2F3dG9vdGgge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAxMzVkZWcsXFxuICAgICAgICB0cmFuc3BhcmVudCA1MCUsICMxMjFhMTgwMCA1MCVcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgLTEzNWRlZyxcXG4gICAgICAgIHRyYW5zcGFyZW50IDUwJSwgIzEyMWExODAwIDUwJVxcbiAgICApLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAwZGVnLFxcbiAgICAgICAgcmdiYSgwLDAsMCwwKSAzMCUsIHJnYmEoMCwwLDAsMCkgMTAwJVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyLCB0b3AgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDJyZW0gMnJlbSwgMnJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMxcHg7XFxufVxcblxcbm5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFhMThjYjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjYTY2NDQ5O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjIxLCAyMTgsIDIwMyk7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4ICNjYzhjNDIwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxufVxcblxcbi5uYXYtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCAjY2M4YzQyO1xcbn1cXG5cXG4ubmF2LWJ0bjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2E1NjQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xcbn1cXG5cXG4ubmF2LWJ0bjpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTEwJTtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMWExODtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMyU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjYTU2NDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgICBhbmltYXRpb246IGZhZGVpbiBlYXNlLWluIDAuM3M7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45OCwwLjk4KTt9XFxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7fVxcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxYTE4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IC00cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2E2NjQ0OTtcXG59XFxuXFxuLnJvdW5kZWQtY2lyY2xlIHtcXG4gICAgd2lkdGg6IDExcmVtOyBcXG4gICAgaGVpZ2h0OiAxMXJlbTsgXFxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLDAsMCwuOCk7IFxcblxcdGJhY2tncm91bmQ6IHVybChodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy84NzE5MTQwOTM4NjU0NzIwMTEvODg5MDQ2NTY4NTE3Mzc4MDg4L25pZC5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGl2aWRlci13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiM5ZWU3M2Q7IFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5zcGFuLmRvdHRlZCB7XFxuICAgIG1hcmdpbjogMHB4IDRweDtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxNDMsIDE0NSwgMTE1KTtcXG59XFxuXFxuc3Bhbi5kaXZpZGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0MywgMTQ1LCAxMTUsIDAuNTQxKTtcXG59XFxuXFxuXFxuXFxuaDIge1xcbiAgICBmb250LWZhbWlseTogQ2FyYXR0ZXJlLGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZlNDhhO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjY2M4YjQyLCAwcHggMHB4IDhweCBibGFjaywgMHB4IDBweCA4cHggYmxhY2s7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIFxcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiBDYXJhdHRlcmUsY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmZmU0OGE7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNjYzhiNDIsIDBweCAwcHggOHB4IGJsYWNrLCAwcHggMHB4IDhweCBibGFjaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4jbWVudS1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxMnB4O1xcbn1cXG5cXG4jY29udGFjdC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZhcyB7XFxuICAgIGNvbG9yOiM5ZWU3M2Q7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZy1sZWZ0OjA7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmxpIHtcXG4gICAgbWFyZ2luOiA2cHg7XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5jb25zdCBtZW51RGF0YSA9IHJlcXVpcmUoJy4vbWVudS5qc29uJyk7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lci5pZCA9IFwiY29udGVudC1jb250YWluZXJcIjtcbmxldCBjdXJyZW50VGFiID0gXCJob21lXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGxldCBoZWFkZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckltZy5pZCA9IFwiaGVhZGVyLWltZ1wiO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVmlwZXJpZGFlIENhZmVcIjtcblxuICAgIC8vIHVzZWQgdG8gYmUgYSBzYXd0b290aCBiYW5uZXIgYnV0Li5cbiAgICBsZXQgc2F3dG9vdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhd3Rvb3RoLmlkID0gXCJzYXd0b290aFwiO1xuXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbGV0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaG9tZUJ0bi5pZCA9IFwiaG9tZS1idG5cIjsgXG4gICAgaG9tZUJ0bi5jbGFzc05hbWUgPSBcIm5hdi1idG5cIjtcbiAgICBob21lQnRuLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2hhbmdlVGFicyhcImhvbWVcIik7XG4gICAgfSlcbiAgICBtZW51QnRuLmlkID0gXCJtZW51LWJ0blwiOyBcbiAgICBtZW51QnRuLmNsYXNzTmFtZSA9IFwibmF2LWJ0blwiO1xuICAgIG1lbnVCdG4uaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjaGFuZ2VUYWJzKFwibWVudVwiKTtcbiAgICB9KVxuICAgIGNvbnRhY3RCdG4uaWQgPSBcImNvbnRhY3QtYnRuXCI7IFxuICAgIGNvbnRhY3RCdG4uY2xhc3NOYW1lID0gXCJuYXYtYnRuXCI7XG4gICAgY29udGFjdEJ0bi5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZVRhYnMoXCJjb250YWN0XCIpO1xuICAgIH0pXG4gICAgXG4gICAgbmF2LmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcbiAgICBoZWFkZXJJbWcuYXBwZW5kKHRpdGxlLHNhd3Rvb3RoLCBuYXYpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJbWcpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZS5pZCA9IFwiaG9tZVwiO1xuICAgIGhvbWUuY2xhc3NOYW1lID0gXCJpbmZvXCI7XG5cbiAgICBsZXQgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaXJjbGUuY2xhc3NOYW1lID0gXCJyb3VuZGVkLWNpcmNsZVwiO1xuXG4gICAgbGV0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdmlkZXIuY2xhc3NOYW1lID0gXCJkaXZpZGVyLXdyYXBwZXJcIlxuICAgIGRpdmlkZXIuaW5uZXJIVE1MID0gXCJOSUQgVklQRVJJREFFXCI7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkaXZpZGVyXCI7XG4gICAgZGl2aWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC5pbm5lckhUTUwgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiO1xuXG4gICAgaG9tZS5hcHBlbmQoY2lyY2xlLGRpdmlkZXIscCk7XG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgICBtZW51LmNsYXNzTmFtZSA9IFwiaW5mb1wiO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiTWVudVwiO1xuXG4gICAgbGV0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdmlkZXIuY2xhc3NOYW1lID0gXCJkaXZpZGVyLXdyYXBwZXJcIjtcblxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcImRpdmlkZXJcIjtcbiAgICBkaXZpZGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWQuaWQgPSBcIm1lbnUtZ3JpZFwiO1xuXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgICBtZW51RGF0YS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWNhdGVnb3JpZXMuaW5jbHVkZXMoaXRlbS5jYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChpdGVtLmNhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2F0ZWdvcnkuaWQgPSB0eXBlO1xuICAgICAgICBjYXRlZ29yeS5jbGFzc05hbWUgPSBcImNhdGVnb3J5XCI7XG5cbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBoMy5pbm5lckhUTUwgPSB0eXBlO1xuICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICAgICAgbWVudURhdGEuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNhdGVnb3J5ID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIG5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZG90dGVkXCI7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBwcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZChuYW1lLCBkaXZpZGVyLCBwcmljZSk7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIH0pO1xuICAgIG1lbnUuYXBwZW5kKHRpdGxlLCBkaXZpZGVyLCBncmlkKTtcbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xuICAgIGNvbnRhY3QuY2xhc3NOYW1lID0gXCJpbmZvXCI7XG5cbiAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIuaW5uZXJIVE1MID0gXCJDb250YWN0XCJcblxuICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IFwiZGl2aWRlci13cmFwcGVyXCI7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJkaXZpZGVyXCI7XG4gICAgZGl2aWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB1bC5pZCA9IFwiY29udGFjdC1kZXRhaWxzXCI7XG5cbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1tYXAtbWFya2VyLWFsdCc+PC9pPjEyMyBNYWluIFN0cmVldCwgRHVza2hhdmVuXCI7XG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHBob25lLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1waG9uZSc+PC9pPjg4OC04ODg4IChNb24tRnJpLCA4OjAwIGFtIC0gNTozMCBwbSlcIjtcbiAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZW1haWwuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmFzIGZhLWVudmVsb3BlJz48L2k+dmlwZXJpZGFlQGFuaW1haWwuY29tXCI7XG4gICAgXG4gICAgdWwuYXBwZW5kKGFkZHJlc3MsIHBob25lLCBlbWFpbCk7XG4gICAgY29udGFjdC5hcHBlbmQoaDIsIGRpdmlkZXIsIHVsKTtcbiAgICByZXR1cm4gY29udGFjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiRGV2ZWxvcGVkIGJ5IHphcmFrdVwiO1xuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgY29udGVudC5hcHBlbmQoY3JlYXRlSGVhZGVyKCksIGNvbnRhaW5lciwgY3JlYXRlRm9vdGVyKCkpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYWJzKHRhYikge1xuICAgIGlmIChjdXJyZW50VGFiID09PSB0YWIpIHJldHVybjtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIFxuICAgIGlmICh0YWIgPT09IFwiaG9tZVwiKSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgICBpZiAodGFiID09PSBcIm1lbnVcIikgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgaWYgKHRhYiA9PT0gXCJjb250YWN0XCIpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuICAgIGN1cnJlbnRUYWIgPSB0YWI7XG59XG5cbmNyZWF0ZUNvbnRlbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=