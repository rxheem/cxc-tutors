webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");







var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxctutors/components/header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Header = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Header).call(this, props));
    _this.toggleDropdown = _this.toggleDropdown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.toggleNavbar = _this.toggleNavbar.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, [{
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.setState(_objectSpread({}, this.state, {}, {
        dropdownOpen: !this.state.dropdownOpen
      }));
    }
  }, {
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState(_objectSpread({}, this.state, {}, {
        collapseOpen: !this.state.collapseOpen
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        type: "dark",
        theme: "primary",
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavbarBrand"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "CXC Tutors"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavbarToggler"], {
        onClick: this.toggleNavbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
        open: this.state.collapseOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        active: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        active: true,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Disabled")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        open: this.state.dropdownOpen,
        toggle: this.toggleDropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        style: {
          color: "white"
        },
        nav: true,
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Subjects"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "CSEC"), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "English A"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "English B"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Spanish"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Information Technology"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Social Studies"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Caribbean History"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Something else here"), __jsx("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "CSEC"), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Communication Studies"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Computer Science"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Information Technology")))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        navbar: true,
        className: "ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        active: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        active: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Past Papers"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        active: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "CAPE Papers"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        active: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Contact")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.88c7104f1a53ebdc14a0.hot-update.js.map