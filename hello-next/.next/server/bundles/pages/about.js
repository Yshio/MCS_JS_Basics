module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);



var linkStyle = {
  marginRight: 25
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3035640901"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    id: "link1",
    href: "/"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    id: "a1",
    style: linkStyle,
    className: "jsx-3035640901"
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    id: "link2",
    href: "/about"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-3035640901"
  }, "\u0425\u043E\u0431\u0431\u0438")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3035640901",
    css: ["#a1.jsx-3035640901{margin-left:1.5%;}"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);




var Upblock = function Upblock() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    className: "jsx-3426889697" + " " + "back"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3426889697"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    className: "jsx-3426889697"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/58e36ba7461e115b385c8577.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5a58cba88517b160eadb8a61.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5739a31fe44bb154b92534bf.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/59632c625511015d2b65602c.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5709753a5270d153fcf1ebe2.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/574c04a9375f315500f2350b.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/58e36ba7461e115b385c8577.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5a58cba88517b160eadb8a61.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5739a31fe44bb154b92534bf.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/59632c625511015d2b65602c.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://cdn160.picsart.com/upscale-246389451017212.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5709753a5270d153fcf1ebe2.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://cdn160.picsart.com/upscale-246389451017212.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/59632c625511015d2b65602c.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5739a31fe44bb154b92534bf.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5a58cba88517b160eadb8a61.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/58e36ba7461e115b385c8577.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/574c04a9375f315500f2350b.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5709753a5270d153fcf1ebe2.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/59632c625511015d2b65602c.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5739a31fe44bb154b92534bf.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/5a58cba88517b160eadb8a61.png",
    className: "jsx-3426889697" + " " + "upblock"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://avatanplus.com/files/resources/mid/58e36ba7461e115b385c8577.png",
    className: "jsx-3426889697" + " " + "upblock"
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3426889697",
    css: [".back.jsx-3426889697{background:#000000;width:inherit;}", ".upblock.jsx-3426889697{height:4.31%;width:4.31%;margin-right:0.035%;pointer-events:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Upblock);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(3);



var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["default"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Upblock__ = __webpack_require__(4);




var Format = function Format(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-116447337"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Upblock__["default"], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-116447337" + " " + "backg"
  }, props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "116447337",
    css: [".backg.jsx-116447337{width:100%;height:1000px;}"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Format); //background: url(https://avatanplus.com/files/resources/original/589706ea375a015a0df302f3.jpg);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comps_MyLayout_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comps_Format_js__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__comps_Format_js__["default"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__comps_MyLayout_js__["default"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "\u0421\u043A\u043E\u0440\u043E...")));
});

/***/ })
/******/ ]);