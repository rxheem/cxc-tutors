webpackHotUpdate("static/development/pages/past-papers.js",{

/***/ "./common/GoogleDriveView.js":
/*!***********************************!*\
  !*** ./common/GoogleDriveView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/common/GoogleDriveView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var GoogleDriveView = function GoogleDriveView(props) {
  return __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
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
    __self: this
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "You can also see the papers on our Google Drive folder, if you are not able to access Dropbox."), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    target: "_blank",
    theme: "success",
    href: "https://drive.google.com/open?id=1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("i", {
    style: {
      paddingRight: "5px"
    },
    "class": "fab fa-google-drive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), "View Folder")));
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleDriveView);

/***/ }),

/***/ "./resources-components/ResourcesLayout.js":
/*!*************************************************!*\
  !*** ./resources-components/ResourcesLayout.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/es/YouTube.js");
/* harmony import */ var _common_DropboxView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/DropboxView */ "./common/DropboxView.js");
/* harmony import */ var _common_GoogleDriveView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/GoogleDriveView */ "./common/GoogleDriveView.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_PDFFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/PDFFile */ "./common/PDFFile.js");
/* harmony import */ var _common_EssentialBooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/EssentialBooks */ "./common/EssentialBooks.js");
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/resources-components/ResourcesLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var opts = {
  height: "300px",
  width: "100%",
  playerVars: {
    autoplay: 0
  }
}; // Dropbox view and Google drive view





 // Style for the onft icons

var liStyles = {
  display: "inline!important",
  paddingLeft: "50px"
};
var oLiStyles = {
  display: "inline"
};
var ulStyles = {
  listStyleType: "none",
  paddingTop: "15px"
};

var ResourcesLayout = function ResourcesLayout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, props.children, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_4__["BrowserView"], {
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
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("span", {
    className: "border border-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("ul", {
    style: ulStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("li", {
    style: oLiStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("i", {
    style: {
      color: "#8a3ab9"
    },
    className: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
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
    __self: this
  }, "cxcspanish")), __jsx("li", {
    style: liStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("i", {
    style: {
      color: " #3b5998"
    },
    className: "fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
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
    __self: this
  }, "CXC Spanish Gude")), __jsx("li", {
    style: liStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("i", {
    style: {
      color: "#00acee"
    },
    className: "fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
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
    __self: this
  }, "cxcspanish"))))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("br", {
    className: "d-sm-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(_common_EssentialBooks__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(_common_DropboxView__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResourcesLayout);

/***/ })

})
//# sourceMappingURL=past-papers.js.dd56ae96686c93360803.hot-update.js.map