/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/file-loader/dist/cjs.js!./src/style.css":
/*!**************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js!./src/style.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"398d8e7635d29f083cb1fce93ae1585e.css\");\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/file-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_file_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!../node_modules/file-loader/dist/cjs.js!./style.css */ \"./node_modules/file-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n\nvar options = {};\n\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_1___default().bind(null, \"head\");\n    \n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoLinkTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_file_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js":
/*!***************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nmodule.exports = function (url, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === \"object\" ? options.attributes : {};\n\n  if (typeof options.attributes.nonce === \"undefined\") {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  var linkElement = document.createElement(\"link\");\n  linkElement.rel = \"stylesheet\";\n  linkElement.href = url;\n  Object.keys(options.attributes).forEach(function (key) {\n    linkElement.setAttribute(key, options.attributes[key]);\n  });\n  options.insert(linkElement);\n  return function (newUrl) {\n    if (typeof newUrl === \"string\") {\n      linkElement.href = newUrl;\n    } else {\n      linkElement.parentNode.removeChild(linkElement);\n    }\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\n/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.js */ \"./src/delete.js\");\n\r\nfunction createContact(mainBody){\r\n    let content = mainBody.children[1]\r\n    ;(0,_delete_js__WEBPACK_IMPORTED_MODULE_0__.clear)(content);\r\n    console.log('creating Contact');\r\n    content.textContent = \"contact\";\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear)\n/* harmony export */ });\nfunction clear(content){\r\n    \r\n    content.textContent = \"\";\r\n    console.log(\"Cleared data\")\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/delete.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createHeader(mainBody){\r\n    let a = [];\r\n\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n\r\n    const home = document.createElement(\"div\");\r\n    home.classList.add(\"home\");\r\n    home.textContent = \"Home\";\r\n    home.addEventListener(\"click\", () => {\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)(mainBody);\r\n    });\r\n\r\n    const menu = document.createElement(\"div\");\r\n    menu.textContent = \"Menu\";\r\n    menu.classList.add(\"menu\");\r\n    menu.addEventListener(\"click\", () => {\r\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)(mainBody);\r\n    })\r\n\r\n    const contact = document.createElement(\"div\");\r\n    contact.classList.add(\"contact\");\r\n    contact.textContent = \"Contact\";\r\n    contact.addEventListener(\"click\", () => {\r\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContact)(mainBody);\r\n    });\r\n\r\n    a.push(home);\r\n    a.push(menu);\r\n    a.push(contact);\r\n\r\n    a.forEach(e =>{\r\n        header.append(e);\r\n    });\r\n\r\n    mainBody.append(header);\r\n\r\n    return a;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.js */ \"./src/delete.js\");\n\r\nfunction createHome(mainBody){\r\n    let content = mainBody.children[1]\r\n    ;(0,_delete_js__WEBPACK_IMPORTED_MODULE_0__.clear)(content);\r\n    console.log('creating home');\r\n    content.textContent = \"Home\";\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\nconst mainBody = document.querySelector(\"#content\");\r\nconst header = (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)(mainBody);\r\n\r\nconst content = document.createElement(\"div\");\r\ncontent.classList.add(\"content\");\r\nmainBody.append(content);\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_2__.createHome)(mainBody);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.js */ \"./src/delete.js\");\n\r\n\r\nfunction createMenu(mainBody){\r\n    let content = mainBody.children[1]\r\n    ;(0,_delete_js__WEBPACK_IMPORTED_MODULE_0__.clear)(content);\r\n    console.log('creating menu');\r\n    content.textContent = \"menu\";\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;