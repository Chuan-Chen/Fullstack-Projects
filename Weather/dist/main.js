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

/***/ "./src/script/EvenHandler.js":
/*!***********************************!*\
  !*** ./src/script/EvenHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\nfunction init(domObjects){\r\n    conversion(domObjects.conversion);\r\n    createCard(domObjects.content);\r\n    search(domObjects.search);\r\n}\r\n\r\nfunction conversion(conversion){\r\n    conversion.addEventListener('click', () => {\r\n        if(conversion.textContent == \"Fahrenheit\"){\r\n            conversion.dataset.unit = \"\";\r\n            conversion.textContent = \"Celcius\";\r\n        }else{\r\n            conversion.dataset.unit = \"&temperature_unit=fahrenheit\"\r\n            conversion.textContent = \"Fahrenheit\";\r\n        }\r\n        \r\n    });\r\n}\r\n\r\nfunction search(search){\r\n    search.addEventListener('keydown', (e)=>{\r\n        if(e.keyCode == 13 && search.value != \"\"){\r\n            console.log(search.value);\r\n        }\r\n    });\r\n}\r\n\r\n\r\nfunction createCard(content){\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"card\");\r\n    content.append(div);\r\n}\n\n//# sourceURL=webpack://weather/./src/script/EvenHandler.js?");

/***/ }),

/***/ "./src/script/clock.js":
/*!*****************************!*\
  !*** ./src/script/clock.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Clock\": () => (/* binding */ Clock)\n/* harmony export */ });\nclass Clock{\r\n    constructor(time){\r\n        this.timeObj = time;\r\n        this.init();\r\n    }\r\n    pad = (n) => {\r\n        if(n < 10) return `0${n}`;\r\n        return n\r\n    }\r\n    convert24Hour = (n) => {\r\n        if(n > 12) return n - 12;\r\n        return n;\r\n    }\r\n    clock = () => {\r\n        const currentTime = new Date();\r\n        this.timeObj.textContent = \r\n        `${this.pad(currentTime.getMonth()+1)}/${this.pad(currentTime.getDate())}  \r\n         ${this.pad(this.convert24Hour(currentTime.getHours()))}:${this.pad(currentTime.getMinutes())}:${this.pad(currentTime.getSeconds())}`;\r\n        setTimeout(this.clock, 1000);\r\n    }\r\n    init = () => {\r\n        this.clock();\r\n    }\r\n}\n\n//# sourceURL=webpack://weather/./src/script/clock.js?");

/***/ }),

/***/ "./src/script/coordinate.js":
/*!**********************************!*\
  !*** ./src/script/coordinate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoords\": () => (/* binding */ getCoords)\n/* harmony export */ });\nasync function getCoords(){\r\n    let position = {lat: \"\", lon: \"\", time: \"\"};\r\n    if(!navigator.geolocation){\r\n        console.log(\"no geolocation\")\r\n        return;\r\n    }\r\n    await navigator.geolocation.getCurrentPosition((pos)=>{\r\n        position.lat = pos.coords.latitude;\r\n        position.lon = pos.coords.longitude;\r\n        position.time = new Date();\r\n    }, (err)=>{console.log(err)});\r\n    return await position;\r\n}\n\n//# sourceURL=webpack://weather/./src/script/coordinate.js?");

/***/ }),

/***/ "./src/script/script.js":
/*!******************************!*\
  !*** ./src/script/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ \"./src/script/clock.js\");\n/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinate */ \"./src/script/coordinate.js\");\n/* harmony import */ var _EvenHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EvenHandler */ \"./src/script/EvenHandler.js\");\n\r\n\r\n\r\nconst search = document.querySelector(\"#search\");\r\nconst time = document.querySelector(\".time\");\r\nconst content = document.querySelector(\".content\");\r\nconst unit = document.querySelector(\".conversion\");\r\n\r\n\r\n\r\n\r\n\r\nconst clock = new _clock__WEBPACK_IMPORTED_MODULE_0__.Clock(time, new Date());\r\nconst coords = (0,_coordinate__WEBPACK_IMPORTED_MODULE_1__.getCoords)().then(data => console.log(data));\r\n\r\n(0,_EvenHandler__WEBPACK_IMPORTED_MODULE_2__.init)({conversion: unit, content: content, search: search});\r\n\r\n\r\nlet lat = \"40.7166\";\r\nlet lon = \"-73.7840\";\r\nlet url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current_weather=true${unit.dataset.unit}`;\r\nconsole.log(url);\n\n//# sourceURL=webpack://weather/./src/script/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/script.js");
/******/ 	
/******/ })()
;