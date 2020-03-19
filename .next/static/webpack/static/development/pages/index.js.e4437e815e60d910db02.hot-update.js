webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/react-image/umd/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-image/umd/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(a,b){ true?module.exports=b(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"),__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"),__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"),__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")):undefined})(this,function(a,b,c,d,e,f,g,h,i,j){'use strict';function k(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function l(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?k(Object(b),!0).forEach(function(c){h(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}a=a&&a.hasOwnProperty("default")?a["default"]:a,b=b&&b.hasOwnProperty("default")?b["default"]:b,c=c&&c.hasOwnProperty("default")?c["default"]:c,d=d&&d.hasOwnProperty("default")?d["default"]:d,e=e&&e.hasOwnProperty("default")?e["default"]:e,f=f&&f.hasOwnProperty("default")?f["default"]:f,g=g&&g.hasOwnProperty("default")?g["default"]:g,h=h&&h.hasOwnProperty("default")?h["default"]:h;var m="default"in i?i["default"]:i,n={},o={loader:j.node,unloader:j.node,decode:j.bool,crossorigin:j.string,src:j.oneOfType([j.string,j.array]),container:j.func,loaderContainer:j.func,unloaderContainer:j.func},p=function(i){function j(a){var c;b(this,j),c=d(this,e(j).call(this,a)),h(f(c),"srcToArray",function(a){return(Array.isArray(a)?a:[a]).filter(function(a){return a})}),h(f(c),"onLoad",function(){n[c.sourceList[c.state.currentIndex]]=!0,c.i&&c.setState({isLoaded:!0})}),h(f(c),"onError",function(){if(n[c.sourceList[c.state.currentIndex]]=!1,!c.i)return!1;for(var a,b=c.state.currentIndex+1;b<c.sourceList.length;b++){if(a=c.sourceList[b],!(a in n)){c.setState({currentIndex:b});break}if(!0===n[a])return c.setState({currentIndex:b,isLoading:!1,isLoaded:!0}),!0;!1===n[a]}return b===c.sourceList.length?c.setState({isLoading:!1}):void c.loadImg()}),h(f(c),"loadImg",function(){c.i=new Image,c.i.src=c.sourceList[c.state.currentIndex],c.props.crossorigin&&(c.i.crossOrigin=c.props.crossorigin),c.props.decode&&c.i.decode?c.i.decode().then(c.onLoad)["catch"](c.onError):(c.i.onload=c.onLoad,c.i.onerror=c.onError)}),h(f(c),"unloadImg",function(){c.i.onerror=null,c.i.onload=null,c.i.src="";try{delete c.i.src}catch(a){}delete c.i}),c.loaderContainer=a.loaderContainer||a.container,c.unloaderContainer=a.unloaderContainer||a.container,c.sourceList=c.srcToArray(c.props.src);for(var g=0;g<c.sourceList.length&&!!(c.sourceList[g]in n);g++)if(!0===n[c.sourceList[g]])return c.state={currentIndex:g,isLoading:!1,isLoaded:!0},d(c);return c.state=c.sourceList.length?{currentIndex:0,isLoading:!0,isLoaded:!1}:{isLoading:!1,isLoaded:!1},c}return g(j,i),c(j,[{key:"componentDidMount",value:function(){this.state.isLoading&&this.loadImg()}},{key:"componentWillUnmount",value:function(){this.i&&this.unloadImg()}},{key:"UNSAFE_componentWillReceiveProps",value:function(a){var b=this;this.loaderContainer=a.loaderContainer||a.container,this.unloaderContainer=a.unloaderContainer||a.container;var c=this.srcToArray(a.src),d=c.filter(function(a){return-1===b.sourceList.indexOf(a)}),e=this.sourceList.filter(function(a){return-1===c.indexOf(a)});if(d.length||e.length){if(this.sourceList=c,!c.length)return this.setState({isLoading:!1,isLoaded:!1});this.setState({currentIndex:0,isLoading:!0,isLoaded:!1},this.loadImg)}}},{key:"render",value:function(){var b=this.props,c=b.container,d=b.loader,e=b.unloader,f=b.src,g=b.decode,h=b.loaderContainer,i=b.unloaderContainer,j=b.mockImage,k=a(b,["container","loader","unloader","src","decode","loaderContainer","unloaderContainer","mockImage"]);if(this.state.isLoaded){var n=l({},{src:this.sourceList[this.state.currentIndex]},{},k);return c(m.createElement("img",n))}return!this.state.isLoaded&&this.state.isLoading?d?this.loaderContainer(d):null:this.state.isLoaded||this.state.isLoading?void 0:e?this.unloaderContainer(e):null}}]),j}(i.Component);return h(p,"defaultProps",{loader:!1,unloader:!1,decode:!0,src:[],container:function(a){return a}}),p.propTypes={},p});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _home_recentUpdates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/recentUpdates */ "./home/recentUpdates.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var index = function index(props) {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "marketing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: "",
    alt: "image of listening",
    style: {
      height: "180px"
    },
    className: "rounded-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Listening"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Improve your Spanish listening skills with audio recordings from native Spanish-speakers, and listen recorded extracts from CXC past papers questions."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    theme: "warning",
    href: "/listening",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Start Learning \xBB"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("img", {
    style: {
      height: "180px"
    },
    className: "rounded-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Writing"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Practice writing for composing your", " ", __jsx("a", {
    href: "/topics/letter-writing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "letter"), " and", " ", __jsx("a", {
    href: "topics/letter-writing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "compositions"), ". Write on a wide range on past-paper topics including crime, drug abuse and contemporary social issues."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    theme: "info",
    href: "/",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Start Learning \xBB")))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_home_recentUpdates__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.e4437e815e60d910db02.hot-update.js.map