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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/DropboxView.js":
/*!*******************************!*\
  !*** ./common/DropboxView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/common/DropboxView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DropboxView = props => __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
  src: "https://cdn.blog.psafe.com/en/blog/wp-content/uploads/2016/10/BLOG_EN_0610_The-Benefits-of-Dropbox-for-Your-Android.jpg",
  style: {
    width: "100%"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Need past papers? We have the past papers booklets and solutions for all CXC subjects."), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  target: "_blank",
  href: "https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("i", {
  style: {
    paddingRight: "5px"
  },
  className: "fab fa-dropbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), "Get them now")));

/* harmony default export */ __webpack_exports__["default"] = (DropboxView);

/***/ }),

/***/ "./common/EssentialBooks.js":
/*!**********************************!*\
  !*** ./common/EssentialBooks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PDFFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PDFFile */ "./common/PDFFile.js");
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/common/EssentialBooks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const EssentialBooks = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Quick Read"), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("ul", {
  style: {
    marginLeft: "-25px",
    listStyleType: "none"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Exam Preparation Tips",
  href: "https://dl.dropbox.com/s/4g3yvg26k5ef4kf/Exam%20Preparation%20%233.pdf?dl=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
})), __jsx("li", {
  style: {
    paddingTop: "10px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Study Tips",
  href: "https://dl.dropbox.com/s/ap42b9b9wqvyy56/Exam%20Preparation%20%232%20%281%29.pdf?dl=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})), __jsx("li", {
  style: {
    paddingTop: "10px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx(_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Tips for Parents and Students",
  href: "https://dl.dropbox.com/s/u11rjf2ez6wkiqq/Tips%20for%20Parents%20and%20Students.pdf?dl=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
})), __jsx("li", {
  style: {
    paddingTop: "10px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx(_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "1st Year Spanish Paper",
  href: "https://dl.dropbox.com/s/lco1djtd7qeq95n/SPAN1001%201.pdf?dl=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}))), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, "Essentials"), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}), __jsx("ul", {
  style: {
    marginLeft: "-25px",
    listStyleType: "none"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx(_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Spanish For Dummies",
  href: "https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
})), __jsx("li", {
  style: {
    paddingTop: "10px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx(_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Modern Spanish Grammar",
  href: "https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
})), __jsx("li", {
  style: {
    paddingTop: "10px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx(_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Spanish Basics",
  href: "https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}))))));

/* harmony default export */ __webpack_exports__["default"] = (EssentialBooks);

/***/ }),

/***/ "./common/GoogleDriveView.js":
/*!***********************************!*\
  !*** ./common/GoogleDriveView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/common/GoogleDriveView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GoogleDriveView = props => __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
  src: "https://images.idgesg.net/images/article/2019/04/google-drive-docs-suite-logos-100794638-large.jpg",
  style: {
    width: "100%",
    padding: "20px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "You can also see the papers on our Google Drive folder, if you are not able to access Dropbox."), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  target: "_blank",
  theme: "success",
  href: "https://drive.google.com/open?id=1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("i", {
  style: {
    paddingRight: "5px"
  },
  class: "fab fa-google-drive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), "View Folder")));

/* harmony default export */ __webpack_exports__["default"] = (GoogleDriveView);

/***/ }),

/***/ "./common/PDFFile.js":
/*!***************************!*\
  !*** ./common/PDFFile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/common/PDFFile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PDFFile = props => __jsx("a", {
  href: props.href,
  download: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("i", {
  className: "fas fa-file-pdf",
  style: {
    color: "#f00"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx("span", {
  className: "",
  style: {
    paddingLeft: "10px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.title));

/* harmony default export */ __webpack_exports__["default"] = (PDFFile);

/***/ }),

/***/ "./common/PaperContainer.js":
/*!**********************************!*\
  !*** ./common/PaperContainer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Toast */ "react-bootstrap/Toast");
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/common/PaperContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PaperContainer = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 3,
  lg: 3,
  xl: 3,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(react_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "card-img",
  style: {
    width: "100%"
  },
  src: props.imgSrc,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
})), __jsx("br", {
  className: "d-sm-none",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 9,
  lg: 9,
  xl: 9,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("h6", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, props.title), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, props.description), __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_5__["MobileView"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("a", {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default.a, {
  name: "file-pdf",
  style: {
    color: "#f00",
    paddingRight: "10px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}), "PDF Download")), __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_5__["BrowserView"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 6,
  md: 4,
  lg: 4,
  xl: 4,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("a", {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default.a, {
  name: "file-pdf",
  style: {
    color: "#f00",
    paddingRight: "10px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}), "PDF Download")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 6,
  md: 4,
  lg: 4,
  xl: 4,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("a", {
  target: "_blank",
  href: props.purchase,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "Purchase", __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default.a, {
  name: "external-link-alt",
  style: {
    color: "skyblue",
    paddingLeft: "10px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 6,
  md: 4,
  lg: 4,
  xl: 4,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx("a", {
  target: "_blank",
  href: props.syllabus,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, "Syllabus"), __jsx("a", {
  href: props.standalone,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
})))))))), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (PaperContainer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Components




class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/shards-ui@3.0.0/dist/css/shards.css",
      integrity: "sha256-BzSgU/6XJ8eMy1Qsm+xaQJFsefUqgN7vYjZQ2CRjI+4=",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("script", {
      src: "https://kit.fontawesome.com/3b83e0293b.js",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, `
              a {
          	color: #0084cf;
            }
            .breadcrumb {
            	background-color: transparent !important;
            }

            .marketing .col-lg-4 {
	margin-bottom: 1.5rem;
	text-align: center;
}
.marketing h2 {
	font-weight: 400;
}
.marketing .col-lg-4 p {
	margin-right: .75rem;
	margin-left: .75rem;
}
            `)), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), this.props.children, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/components/footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "bg-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Discalimer"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "We are an independent group and are not affiliated with the Caribbean Examination Council. The past papers availbale on our website were sourced from multiple websites. To purchase past papers and other materials directly from CXC, please visit the official", " ", __jsx("a", {
      target: "_blank",
      href: "https://www.cxc-store.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "CXC Store"), ".")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: 12,
      md: 3,
      lg: 3,
      xl: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Partner Websites"), __jsx("ul", {
      style: {
        listStyleType: "none",
        marginLeft: "-40px",
        paddingTop: "10px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("li", {
      style: {
        paddingBottom: "15px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "CXC Spanish Online")))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: 12,
      md: 3,
      lg: 3,
      xl: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Contact"), __jsx("ul", {
      style: {
        listStyleType: "none",
        marginLeft: "-40px",
        paddingTop: "10px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("li", {
      style: {
        paddingBottom: "7px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("i", {
      style: {
        paddingRight: "7px"
      },
      className: "fas fa-envelope",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx("a", {
      href: "mailto:holacxcspanish@gmail.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "holacxcspanish@gmail.com")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("i", {
      style: {
        paddingRight: "7px"
      },
      className: "fas fa-envelope",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), __jsx("a", {
      href: "mailto:raheemmcdonald@icloud.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "raheemmcdonald@icloud.com"))))))), __jsx("div", {
      className: "bg-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Discalimer"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/components/header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState(_objectSpread({}, this.state, {}, {
      dropdownOpen: !this.state.dropdownOpen
    }));
  }

  toggleNavbar() {
    this.setState(_objectSpread({}, this.state, {}, {
      collapseOpen: !this.state.collapseOpen
    }));
  }

  render() {
    return __jsx("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      type: "dark",
      theme: "primary",
      expand: "md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "CXC Tutors"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
      onClick: this.toggleNavbar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
      open: this.state.collapseOpen,
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      active: true,
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      active: true,
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Disabled")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      open: this.state.dropdownOpen,
      toggle: this.toggleDropdown,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
      style: {
        color: "white"
      },
      nav: true,
      caret: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Subjects"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("h6", {
      className: "text-info",
      style: {
        marginBottom: "-5px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "CSEC Subjects"), __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "English A"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "English B"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Mathematics"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Spanish"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Information Technology"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Social Studies"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "Caribbean History"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Something else here"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("h6", {
      className: "text-info",
      style: {
        marginBottom: "-5px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "CAPE Subjects"), __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "Communication Studies"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Computer Science"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Information Technology")))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      navbar: true,
      className: "ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      active: true,
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      active: true,
      href: "/past-papers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Past Papers"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      active: true,
      href: "/cape-papers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "CAPE Papers"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      active: true,
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Contact")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/past-papers.js":
/*!******************************!*\
  !*** ./pages/past-papers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_components_ResourcesLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources-components/ResourcesLayout */ "./resources-components/ResourcesLayout.js");
/* harmony import */ var _common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/PaperContainer */ "./common/PaperContainer.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/pages/past-papers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Layout


const liStyle = {
  paddingBottom: "15px"
};

class PastPapers extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Free CSEC Past Papers | CXC Spanish Online"), __jsx("meta", {
      title: "description",
      content: "Download CXC past papers for free, for both CSEC and CAPE. Pass your Spansih exam with our free online study guide.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
      active: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "CSEC Past Papers")), __jsx(_resources_components_ResourcesLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "English A",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482616_3.jpg",
      href: "https://dl.dropbox.com/s/hcffklht2co7yke/CSEC%C2%AC%20English%20A%20Past%20Papers.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "English B",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482623_4.jpg",
      href: "https://dl.dropbox.com/s/a751mtqz7il6fc2/CSEC%20English%20B%20Past%20Papers2005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Mathematics",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482784_5.jpg",
      href: "https://dl.dropbox.com/s/ua9y9p9qzoj0uom/CSEC%20Mathematics%20Past%20Papers%202002-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Office Administration",
      year: "",
      description: "This document includes papers 1, 2 and 032 and multiple choice. Papers are from May 2005 - May 2016. January resits also included.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482371_3.jpg",
      href: "https://dl.dropbox.com/s/bfekfsddujtz114/CSEC%C2%AE%20Office%20Administration%20Past%20Papers_nodrm.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Information Technology",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482586_3.jpg",
      href: "https://dl.dropbox.com/s/lah9uv8qmfnt5d5/CSEC%20Information%20Technology%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Additional Mathematics",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482357_25.jpg",
      href: "https://dl.dropbox.com/s/1yjzpsrvstln7ef/CSEC%20Additional%20Mathematics%20Past%20Papers%202012-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "French",
      year: "",
      description: "This document includes both paper 1, 2 and 3. January resits also included. Papers range from May 2005 - May/ June 2019. Audio not included. Audio available on the offical CXC website.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481930_3.jpg",
      href: "https://dl.dropbox.com/s/2mfr0aiatvd6ok2/CSEC%20French%20Past%20Papers2005-2016.pdf?dl=0",
      purchase: "https://cxc-store.com/csec-french-past-papers-ebook.html",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Spanish",
      year: "",
      description: "This document includes both papers 1, 2 and 3. January resits also included. Papers range from May 2005 - May/ June 2016. Audio not included. Audio available on the offical CXC website.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482630_4.jpg",
      href: "https://dl.dropbox.com/s/w9dc0hvcrjk2qlz/CSEC%C2%AE%20Spanish%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "E.D.P.M",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482593_23.jpg",
      href: "https://dl.dropbox.com/s/roab9y8tla4omwn/CSEC%C2%AE%20Electronic%20Document%20Preparation%20and%20Management%20Past%20Papers.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Chemistry",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482661_25.jpg",
      href: "https://dl.dropbox.com/s/8rd7g5gah9afrz5/CSEC%20Chemistry%20Past%20Papers%20ebook%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Physics",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482234_5.jpg",
      href: "https://dl.dropbox.com/s/pf0q8yt54px0cf5/CSEC%20Physics%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Human and Social Biology",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482340_3.jpg",
      href: "https://dl.dropbox.com/s/x8mb5ttahb96cdm/CSEC%20Human%20and%20Social%20Biology%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Geography",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482678_3.jpg",
      href: "https://dl.dropbox.com/s/79j1lfqa4cde874/CSEC%20Geography%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Integrated Science",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482142_3.jpg",
      href: "https://dl.dropbox.com/s/51iabpc0d65984i/CSEC%20Integrated%20Science%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Music",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481855_4.jpg",
      href: "https://dl.dropbox.com/s/8qrtne9kxfc43cl/CSEC%20Music%20Past%20Papers2005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Home Economics",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482067_4.jpg",
      href: "https://dl.dropbox.com/s/56a3rod7v5all4q/CSEC%20Home%20Economics%20Clothing%20and%20Textiles%20Food%20and%20Nutrition%20Ma%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Principles of Accounts",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482494_3.jpg",
      href: "https://dl.dropbox.com/s/pjxzrtjro4lpuyg/CSEC%20Principles%20of%20Accounts%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Principles of Business",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482876_3.jpg",
      href: "https://dl.dropbox.com/s/atlvl91is281wv5/CSEC%20Principles%20of%20Business%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Theatre Arts",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482685_4.jpg",
      href: "https://dl.dropbox.com/s/2fbjrn3ydbcg78g/CSEC%20Theatre%20Arts%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Visual Arts",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482302_4.jpg",
      href: "https://dl.dropbox.com/s/r5gnwzj7lzuci68/CSEC%20Visual%20Arts%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Social Studies",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482104_3.jpg",
      href: "https://dl.dropbox.com/s/aioc9p8enukhoz2/CSEC%20Social%20Studies%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Biology",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482456_25.jpg",
      href: "https://dl.dropbox.com/s/dx3pfbr9450uxw5/CSEC%C2%AC%20Biology%20Past%20Papers.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Technical Drawing",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481824_3.jpg",
      href: "https://dl.dropbox.com/s/qprverq0x541yhf/CSEC%20Technical%20Drawing%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }), __jsx(_common_PaperContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Caribbean History",
      year: "",
      description: "This document includes both paper 1 and paper 2. January resits also included. Papers range from May 2005 - May/ June 2019.",
      imgSrc: "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482319_23.jpg",
      href: "https://dl.dropbox.com/s/weokr1z9mn4ckms/CSEC%20Caribbean%20History%20Past%20Papers%202005-2016.pdf?dl=0",
      purchase: "",
      standalone: "",
      syllabus: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PastPapers);

/***/ }),

/***/ "./resources-components/ResourcesLayout.js":
/*!*************************************************!*\
  !*** ./resources-components/ResourcesLayout.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_DropboxView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/DropboxView */ "./common/DropboxView.js");
/* harmony import */ var _common_GoogleDriveView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/GoogleDriveView */ "./common/GoogleDriveView.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_PDFFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/PDFFile */ "./common/PDFFile.js");
/* harmony import */ var _common_EssentialBooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/EssentialBooks */ "./common/EssentialBooks.js");
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/resources-components/ResourcesLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const opts = {
  height: "300px",
  width: "100%",
  playerVars: {
    autoplay: 0
  }
}; // Dropbox view and Google drive view





 // Style for the onft icons

const liStyles = {
  display: "inline!important",
  paddingLeft: "50px"
};
const oLiStyles = {
  display: "inline"
};
const ulStyles = {
  listStyleType: "none",
  paddingTop: "15px"
};

const ResourcesLayout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 8,
  lg: 8,
  xl: 8,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, props.children, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_4__["BrowserView"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("span", {
  className: "border border-light",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("ul", {
  style: ulStyles,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("li", {
  style: oLiStyles,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("i", {
  style: {
    color: "#8a3ab9"
  },
  className: "fab fa-instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}), __jsx("a", {
  className: "text-muted",
  style: {
    paddingLeft: "10px"
  },
  href: "https://www.instagram.com/cxcspanish/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "cxcspanish")), __jsx("li", {
  style: liStyles,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("i", {
  style: {
    color: " #3b5998"
  },
  className: "fab fa-facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}), __jsx("a", {
  className: "text-muted",
  style: {
    paddingLeft: "10px"
  },
  href: "https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, "CXC Spanish Gude")), __jsx("li", {
  style: liStyles,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, __jsx("i", {
  style: {
    color: "#00acee"
  },
  className: "fab fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}), __jsx("a", {
  className: "text-muted",
  style: {
    paddingLeft: "10px"
  },
  href: "https://www.twitter.com/cxcspanish",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, "cxcspanish"))))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, __jsx("br", {
  className: "d-sm-none",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}), __jsx(_common_EssentialBooks__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}), __jsx(_common_DropboxView__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (ResourcesLayout);

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/past-papers.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raheemmcdonald/Desktop/cxctutors/pages/past-papers.js */"./pages/past-papers.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Toast":
/*!****************************************!*\
  !*** external "react-bootstrap/Toast" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Toast");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-fontawesome":
/*!************************************!*\
  !*** external "react-fontawesome" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-fontawesome");

/***/ }),

/***/ "react-image":
/*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),

/***/ "shards-react":
/*!*******************************!*\
  !*** external "shards-react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shards-react");

/***/ })

/******/ });
//# sourceMappingURL=past-papers.js.map