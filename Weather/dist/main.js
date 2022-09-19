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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCard\": () => (/* binding */ createCard),\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _addressSearch___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addressSearch  */ \"./src/script/addressSearch .js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/script/weather.js\");\n\r\n\r\nfunction init(domObjects){\r\n    conversion(domObjects);\r\n    search(domObjects);\r\n}\r\n\r\n\r\nfunction conversion(domObjects){\r\n    let conversion = domObjects.conversion;\r\n    conversion.addEventListener('click', () => {\r\n        if(conversion.textContent == \"Fahrenheit\"){\r\n            conversion.dataset.unit = \"\";\r\n            conversion.textContent = \"Celcius\";\r\n        }else{\r\n            conversion.dataset.unit = \"&temperature_unit=fahrenheit\"\r\n            conversion.textContent = \"Fahrenheit\";\r\n        }\r\n        \r\n    });\r\n}\r\n\r\nasync function search(domObjects){\r\n    domObjects.search.addEventListener('keydown', async (e)=>{\r\n        if(e.keyCode == 13 && domObjects.search.value != \"\"){\r\n            let address = await (0,_addressSearch___WEBPACK_IMPORTED_MODULE_0__.getAddress)(\"\",\"\",\"\",\"\",\"\",domObjects.search.value);\r\n            let coords = address.features[0].geometry.coordinates;\r\n            let weather = await (0,_weather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(domObjects.unit, {lat: coords[0], lon: coords[1], time: new Date()});\r\n            console.log(weather)\r\n            createCard(domObjects);\r\n        }\r\n    });\r\n}\r\n\r\n\r\nfunction createCard(domObjects){\r\n    let content = domObjects.content;\r\n    let cardContent = document.createElement(\"div\");\r\n    let cardContentTitle = document.createElement(\"div\");\r\n    let cardUnit = document.createElement(\"div\");\r\n    let cardTemp = document.createElement(\"div\");\r\n    let cardWindDirection = document.createElement(\"div\");\r\n    let cardWindSpeed = document.createElement(\"div\");\r\n    \r\n    cardContentTitle.textContent = domObjects.search.value;\r\n    domObjects.search.value = \"\";\r\n    cardUnit.textContent = domObjects.unit.textContent;\r\n\r\n    cardContent.appendChild(cardContentTitle);\r\n    cardContent.appendChild(cardUnit);\r\n\r\n    cardContent.classList.add(\"card\");\r\n    content.appendChild(cardContent);\r\n}\n\n//# sourceURL=webpack://weather/./src/script/EvenHandler.js?");

/***/ }),

/***/ "./src/script/addressSearch .js":
/*!**************************************!*\
  !*** ./src/script/addressSearch .js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAddress\": () => (/* binding */ getAddress)\n/* harmony export */ });\nasync function getAddress(street, city, county, state, country, postalcode){\r\n    return new Promise((resolve, reject) => {\r\n        \r\n        let url = `https://nominatim.openstreetmap.org/search.php?street=${street}&city=${city}&county=${county}&state=${state}&country=${country}&postalcode=${postalcode}&format=geojson`\r\n        console.log(url);\r\n        fetch(url).then(res => resolve(res.json()));\r\n    });\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://weather/./src/script/addressSearch_.js?");

/***/ }),

/***/ "./src/script/clock.js":
/*!*****************************!*\
  !*** ./src/script/clock.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Clock\": () => (/* binding */ Clock)\n/* harmony export */ });\nclass Clock{\r\n    constructor(time, timeZone){\r\n        this.timeObj = time;\r\n        this.hour = timeZone.getHours();\r\n        this.minute = timeZone.getMinutes();\r\n        this.second = timeZone.getSeconds();\r\n        \r\n        this.init();\r\n    }\r\n    pad = (n) => {\r\n        if(n < 10) return `0${n}`;\r\n        return n\r\n    }\r\n    convert24Hour = (n) => {\r\n        if(n > 12) return n - 12;\r\n        return n;\r\n    }\r\n    clock = () => {\r\n        const currentTime = new Date();\r\n        this.timeObj.textContent = \r\n        `${this.pad(currentTime.getMonth()+1)}/${this.pad(currentTime.getDate())}  \r\n         ${this.pad(this.convert24Hour(currentTime.getHours()))}:${this.pad(currentTime.getMinutes())}:${this.pad(currentTime.getSeconds())}`;\r\n        setTimeout(this.clock, 1000);\r\n    }\r\n    init = () => {\r\n        this.clock();\r\n    }\r\n}\n\n//# sourceURL=webpack://weather/./src/script/clock.js?");

/***/ }),

/***/ "./src/script/coordinate.js":
/*!**********************************!*\
  !*** ./src/script/coordinate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoords\": () => (/* binding */ getCoords)\n/* harmony export */ });\nasync function getCoords(){\r\n\r\n    return new Promise((res, rej) => {\r\n        if(!navigator.geolocation){\r\n            console.log(\"no geolocation\");\r\n            rej(\"err\")\r\n        }\r\n        navigator.geolocation.getCurrentPosition((pos) => {\r\n            let lat = pos.coords.latitude.toFixed(4);\r\n            let lon = pos.coords.longitude.toFixed(4);\r\n            let time = new Date();\r\n            res({lat, lon, time})\r\n        });\r\n    });\r\n    \r\n    \r\n}\r\n\n\n//# sourceURL=webpack://weather/./src/script/coordinate.js?");

/***/ }),

/***/ "./src/script/script.js":
/*!******************************!*\
  !*** ./src/script/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EvenHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvenHandler */ \"./src/script/EvenHandler.js\");\n/* harmony import */ var _addressSearch___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addressSearch  */ \"./src/script/addressSearch .js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock */ \"./src/script/clock.js\");\n/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coordinate */ \"./src/script/coordinate.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather */ \"./src/script/weather.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst search = document.querySelector(\"#search\");\r\nconst time = document.querySelector(\".time\");\r\nconst content = document.querySelector(\".content\");\r\nconst unit = document.querySelector(\".conversion\");\r\n\r\n\r\n//getWeather(unit).then(data => console.log(data));\r\n\r\n//getAddress(\"\", \"\", \"\", \"\", \"\", \"11364\").then(data => console.log(data.features[0].geometry.coordinates));\r\n\r\n(0,_weather__WEBPACK_IMPORTED_MODULE_4__.getWeather)(unit, (0,_coordinate__WEBPACK_IMPORTED_MODULE_3__.getCoords)()).then(data => console.log(data))\r\n\r\nconst clock = new _clock__WEBPACK_IMPORTED_MODULE_2__.Clock(time, new Date());\r\n\r\n(0,_EvenHandler__WEBPACK_IMPORTED_MODULE_0__.init)({conversion: unit, content: content, search: search, unit: unit});\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/script/script.js?");

/***/ }),

/***/ "./src/script/weather.js":
/*!*******************************!*\
  !*** ./src/script/weather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ \"./src/script/coordinate.js\");\n\r\n\r\nasync function getWeather(unit, coords){\r\n    //let coords = await getCoords();\r\n    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&hourly=temperature_2m&current_weather=true${unit.dataset.unit}`;\r\n    return new Promise((resolve, reject) => {\r\n        fetch(url).then((res) => resolve(res.json()));\r\n    });\r\n}\n\n//# sourceURL=webpack://weather/./src/script/weather.js?");

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