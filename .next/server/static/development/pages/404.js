module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\BaoBao\\Next\\bzh-blog\\pages\\404.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const errorPage = () => __jsx("div", {
  className: "jsx-3595589675" + " " + 'error-page',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }
}, __jsx("h1", {
  className: "jsx-3595589675",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }
}, "404 - Page Not Found."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3595589675",
  __self: undefined
}, "*.jsx-3595589675{margin:0;padding:0;}.error-page.jsx-3595589675{position:absolute;width:100%;height:100%;}h1.jsx-3595589675{position:absolute;top:40%;left:40%;-webkit-transform:translate(-50% -50%);-ms-transform:translate(-50% -50%);transform:translate(-50% -50%);color:#4055b1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxCYW9CYW9cXE5leHRcXGJ6aC1ibG9nXFxwYWdlc1xcNDA0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtRLEFBR29CLEFBSVMsQUFLQSxTQVJSLFNBSUMsQUFLSCxDQVJWLE9BU1csR0FMRyxNQU1tQixNQUxqQyxtR0FNZ0IsY0FDaEIiLCJmaWxlIjoiQzpcXEJhb0Jhb1xcTmV4dFxcYnpoLWJsb2dcXHBhZ2VzXFw0MDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlcnJvclBhZ2UgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9eydlcnJvci1wYWdlJ30+XHJcbiAgICA8aDE+NDA0IC0gUGFnZSBOb3QgRm91bmQuPC9oMT5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtcclxuICAgICAgICBgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXJyb3ItcGFnZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlIC01MCUpO1xyXG4gICAgICAgICAgY29sb3I6ICM0MDU1YjE7XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICAgIH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXYgPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBlcnJvclBhZ2UiXX0= */\n/*@ sourceURL=C:\\\\BaoBao\\\\Next\\\\bzh-blog\\\\pages\\\\404.js */"));

/* harmony default export */ __webpack_exports__["default"] = (errorPage);

/***/ }),

/***/ 4:
/*!****************************!*\
  !*** multi ./pages/404.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\BaoBao\Next\bzh-blog\pages\404.js */"./pages/404.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=404.js.map