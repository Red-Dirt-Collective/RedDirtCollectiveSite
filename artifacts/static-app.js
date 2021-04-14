(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(45);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(47);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(21);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(48);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(15);

var _helpers = __webpack_require__(49);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(44)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/policy.c9c1b5b0.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(15);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(46)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/money.ba6f206f.svg";

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(react_static__WEBPACK_IMPORTED_MODULE_1__["addPrefetchExcludes"])(['dynamic']);

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Root"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/policies"
  }, "Policies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/onboard"
  }, "Join!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/members"
  }, "Members")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Router */ "b"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    path: "*"
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("d3-dag");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(9);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bank.072c65a4.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEyNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTk0LjkyNSw4Ni4xMDNjMC0xLjI2LTAuMDAyLTIuODA4LTEuMTQ2LTMuOGMxLjE0NS0wLjk5MSwxLjE0Ni0yLjUzOSwxLjE0Ni0zLjc5OWMwLTIuMTk5LTAuMTE2LTMuMzk5LTAuNzg1LTQuMDUxICBjLTAuMDAzLTAuMDQ3LDAuMDEtMC4wOTIsMC0wLjEzOUw3OS43NTUsMi4zMDRjLTAuMDA3LTAuMDM0LTAuMDI4LTAuMDYtMC4wMzgtMC4wOTJjLTAuMDIxLTAuMDY2LTAuMDQ1LTAuMTI3LTAuMDc4LTAuMTg3ICBjLTAuMDMxLTAuMDU2LTAuMDY0LTAuMTA2LTAuMTA0LTAuMTU0Qzc5LjQ5MywxLjgyMiw3OS40NSwxLjc3OSw3OS40LDEuNzM4Yy0wLjA1LTAuMDQxLTAuMS0wLjA3NS0wLjE1Ni0wLjEwNSAgYy0wLjA1Ny0wLjAzMS0wLjExMy0wLjA1NC0wLjE3NS0wLjA3M2MtMC4wNjMtMC4wMi0wLjEyNi0wLjAzMi0wLjE5My0wLjAzOUM3OC44NDEsMS41MTcsNzguODExLDEuNSw3OC43NzQsMS41SDIxLjIzICBjLTAuMDM1LDAtMC4wNjMsMC4wMTYtMC4wOTcsMC4wMmMtMC4wNywwLjAwNy0wLjEzNCwwLjAyLTAuMiwwLjA0MWMtMC4wNjEsMC4wMTktMC4xMTYsMC4wNDItMC4xNywwLjA3MSAgYy0wLjA1NywwLjAzMS0wLjEwOCwwLjA2NS0wLjE1OCwwLjEwN2MtMC4wNSwwLjA0MS0wLjA5NCwwLjA4My0wLjEzNSwwLjEzM2MtMC4wNCwwLjA0OC0wLjA3MywwLjA5OC0wLjEwNCwwLjE1NCAgYy0wLjAzMywwLjA2LTAuMDU4LDAuMTItMC4wNzgsMC4xODdjLTAuMDEsMC4wMzItMC4wMzIsMC4wNTgtMC4wMzksMC4wOTJMNS44NjMsNzQuMzEzYy0wLjAxLDAuMDQ4LDAuMDAzLDAuMDkyLDAsMC4xMzkgIGMtMC42NzEsMC42NTEtMC43ODcsMS44NTItMC43ODcsNC4wNTNjMCwxLjI2LDAuMDAxLDIuODA4LDEuMTQ3LDMuNzk5Yy0xLjE0NiwwLjk5Mi0xLjE0NywyLjU0LTEuMTQ3LDMuOHMwLjAwMSwyLjgwOCwxLjE0NiwzLjc5OSAgYy0xLjE0NiwwLjk5MS0xLjE0NywyLjU0LTEuMTQ3LDMuOGMwLDIuMDI1LDAsNC43OTksNC43NjIsNC43OTloODAuMzJjNC43NjQsMCw0Ljc2NC0yLjc3Myw0Ljc2NC00Ljc5OSAgYzAtMS4yNTktMC4wMDItMi44MDYtMS4xNDYtMy43OThDOTQuOTI0LDg4LjkxMiw5NC45MjUsODcuMzYzLDk0LjkyNSw4Ni4xMDN6IE0zNS43MDQsODguOTAxdi01LjU5OWgyOC41OTV2NS41OTlIMzUuNzA0eiAgIE02NC4yOTksOTAuOTAxVjk2LjVIMzUuNzA0di01LjU5OUg2NC4yOTl6IE0zNS43MDQsODEuMzAzdi01LjU5OWgyOC41OTV2NS41OTlIMzUuNzA0eiBNOC4wMjQsNzMuNzA0TDIyLjA1LDMuNWgxNy4yNzkgIEwzMy43OCw3My43MDRIOS44MzlIOC4wMjR6IE05MS45NzksNzMuNzA0aC0xLjgxNUg2Ni4yMjRMNjAuNjc0LDMuNWgxNy4yODFMOTEuOTc5LDczLjcwNHogTTY0LjIxNyw3My43MDRoLTI4LjQzTDQxLjMzNSwzLjUgIGgxNy4zMzJMNjQuMjE3LDczLjcwNHogTTY2LjI5OSw3NS43MDRoMjMuODY0YzEuMTI3LDAsMi40MDQsMCwyLjU4MSwwLjE3OWMwLjE4MSwwLjE4MywwLjE4MSwxLjQ3OSwwLjE4MSwyLjYyMSAgYzAsMi4wOTQsMCwyLjc5OS0yLjc2MiwyLjc5OUg2Ni4yOTlWNzUuNzA0eiBNNy4wNzYsNzguNTA0YzAtMS4xNDMsMC0yLjQzOCwwLjE4MS0yLjYyMWMwLjE3Ny0wLjE3OSwxLjQ1NS0wLjE3OSwyLjU4Mi0wLjE3OSAgaDIzLjg2NXY1LjU5OUg5LjgzOUM3LjA3Niw4MS4zMDMsNy4wNzYsODAuNTk4LDcuMDc2LDc4LjUwNHogTTMzLjcwNCw4My4zMDN2NS41OTlIOS44MzljLTIuNzYzLDAtMi43NjMtMC43MDUtMi43NjMtMi43OTkgIGMwLTIuMDk1LDAtMi44LDIuNzYzLTIuOEgzMy43MDR6IE03LjA3NSw5My43MDFjMC0yLjA5NSwwLTIuOCwyLjc2Mi0yLjhoMC4wMDJoMjMuODY1Vjk2LjVIOS44MzcgIEM3LjA3NSw5Ni41LDcuMDc1LDk1Ljc5NSw3LjA3NSw5My43MDF6IE05MC4xNTcsOTYuNUg2Ni4yOTl2LTUuNTk5aDIzLjg1OGMyLjc2NCwwLDIuNzY0LDAuNzA1LDIuNzY0LDIuOCAgQzkyLjkyMSw5NS43OTUsOTIuOTIxLDk2LjUsOTAuMTU3LDk2LjV6IE02Ni4yOTksODguOTAxdi01LjU5OWgyMy44NjRjMi43NjIsMCwyLjc2MiwwLjcwNSwyLjc2MiwyLjhjMCwyLjA5NCwwLDIuNzk5LTIuNzYyLDIuNzk5ICBoLTAuMDA2SDY2LjI5OXoiLz48dGV4dCB4PSIwIiB5PSIxMTUiIGZpbGw9IiMwMDAwMDAiIGZvbnQtc2l6ZT0iNXB4IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1mYW1pbHk9IidIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwtVW5pY29kZSwgQXJpYWwsIFNhbnMtc2VyaWYiPkNyZWF0ZWQgYnkgTm91cmEgTWJhcmtpPC90ZXh0Pjx0ZXh0IHg9IjAiIHk9IjEyMCIgZmlsbD0iIzAwMDAwMCIgZm9udC1zaXplPSI1cHgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbC1Vbmljb2RlLCBBcmlhbCwgU2Fucy1zZXJpZiI+ZnJvbSB0aGUgTm91biBQcm9qZWN0PC90ZXh0Pjwvc3ZnPg=="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("/Users/calebcreed/RedDirtCollectiveSite/node_modules/react-static/lib/browser");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DustBowl_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _DustBowl_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DustBowl_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _goggles_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _goggles_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_goggles_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hands_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
/* harmony import */ var _hands_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hands_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coffee_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62);
/* harmony import */ var _coffee_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_coffee_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _duststorm_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
/* harmony import */ var _duststorm_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_duststorm_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _phone_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var _phone_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_phone_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _policy_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var _policy_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_policy_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _money_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _money_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_money_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63);
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(color_name__WEBPACK_IMPORTED_MODULE_11__);


function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display:flex;\n  align-items:center;\n  justify-content:flex-start;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width:80px;\n  padding-right:8px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background: #f5f4e1;\n  width: 400px;\n  text-align:justify;\n  font-size:18px;\n  padding:8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  padding: 20px;\n  display:flex;\n  justify-content:space-around;\n  flex-direction:row;\n  flex-wrap:wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  padding: 1rem;\n  background-image:url(\"", "\");\n  background-size:cover;\n  background-attachment: fixed;\n  height:100vh;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin:10vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var TextScreen = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject());
var ImageScreen = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject2(), function (props) {
  return props.img;
});
var InfoPanel = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject3());
var TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject4());
var PanelTitle = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.h3(_templateObject5());
var PanelIcon = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.img(_templateObject6());
var PanelTitleBlock = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject7());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageScreen, {
    img: _DustBowl_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    "class": "title"
  }, "RED DIRT COLLECTIVE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      "margin-top": "200px",
      "color": "#f5f4e1",
      "font-size": "20px"
    }
  }, " Helping each other through our crisis."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    "class": "more"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextScreen, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelTitleBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelIcon, {
    src: _phone_svg__WEBPACK_IMPORTED_MODULE_8___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelTitle, null, "Cooperatives")), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa nibh, rutrum at tincidunt id, dictum vitae lorem. Mauris est ipsum, malesuada a ornare eget, tincidunt sit amet eros. Proin suscipit ullamcorper turpis, vitae auctor odio pulvinar ut. Integer vitae ipsum viverra ligula mollis vestibulum id vel ex. Praesent quis quam a felis commodo rutrum. Praesent iaculis vehicula malesuada. Maecenas viverra fringilla aliquet. Fusce mattis ante sit amet magna lacinia, a vulputate nisl rutrum. Aenean tellus dui, mollis non convallis ut,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelTitleBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelIcon, {
    src: _policy_svg__WEBPACK_IMPORTED_MODULE_9___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelTitle, null, "Policy Papers/Analysis")), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa nibh, rutrum at tincidunt id, dictum vitae lorem. Mauris est ipsum, malesuada a ornare eget, tincidunt sit amet eros. Proin suscipit ullamcorper turpis, vitae auctor odio pulvinar ut. Integer vitae ipsum viverra ligula mollis vestibulum id vel ex. Praesent quis quam a felis commodo rutrum. Praesent iaculis vehicula malesuada. Maecenas viverra fringilla aliquet. Fusce mattis ante sit amet magna lacinia, a vulputate nisl rutrum. Aenean tellus dui, mollis non convallis ut,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelTitleBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelIcon, {
    src: _money_svg__WEBPACK_IMPORTED_MODULE_10___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelTitle, null, "Mutual Aid")), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa nibh, rutrum at tincidunt id, dictum vitae lorem. Mauris est ipsum, malesuada a ornare eget, tincidunt sit amet eros. Proin suscipit ullamcorper turpis, vitae auctor odio pulvinar ut. Integer vitae ipsum viverra ligula mollis vestibulum id vel ex. Praesent quis quam a felis commodo rutrum. Praesent iaculis vehicula malesuada. Maecenas viverra fringilla aliquet. Fusce mattis ante sit amet magna lacinia, a vulputate nisl rutrum. Aenean tellus dui, mollis non convallis ut,"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageScreen, {
    img: _duststorm_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
  }));
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Members; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_shape__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _policy_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _policy_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_policy_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bank_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _bank_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bank_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _money_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _money_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_money_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _chainsaw_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36);
/* harmony import */ var _chainsaw_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_chainsaw_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _circularSaw_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37);
/* harmony import */ var _circularSaw_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_circularSaw_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _concrete_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38);
/* harmony import */ var _concrete_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_concrete_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _framing_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var _framing_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_framing_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65);
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var d3_dag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13);
/* harmony import */ var d3_dag__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(d3_dag__WEBPACK_IMPORTED_MODULE_14__);



function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\nbackground-color: #4CAF50; \nwidth:95%;\nborder: none;\ncolor: white;\npadding: 15px 32px;\ntext-align: center;\ntext-decoration: none;\nfont-size: 16px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\nfont-size:16px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\nfont-size:20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\njustify-content:center;\nalign-items: flex-start;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\ndisplay:flex;\nflex-direction:row;\nwidth;100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\ndisplay:flex;\nflex-direction:column;\nwidth:25vw;\nheight:100vh;\nborder: 2px black solid;\npadding:4px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\nheight: 100vh;\nwidth:75vw;\noverflow:scroll;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\ndisplay:flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\ndisplay:flex;\nflex-direction:column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\ndisplay:flex;\nflex-direction:row;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














console.log(d3_dag__WEBPACK_IMPORTED_MODULE_14__["dagStratify"]);
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var CourseInfo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var MemberInfo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var LearnTree = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4());
var InfoColumn = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5());
var InfoColumnHeader = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6());
var InfoColumnBody = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject7());
var InfoColumnIcon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject8());
var CourseTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject9());
var CourseDescription = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject10());
var IWantToTakeThis = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject11());
function Members() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      selectedNode = _React$useState2[0],
      selectNode = _React$useState2[1];

  var mediumAquamarine = "#56e39f";
  var redSalsa = "#F03A47";
  var khakiWeb = "#C7AC92";
  var blackCoffee = "#352D39";
  var mediumSlateBlue = "#7F7EFF";
  var learnTreeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  function getContrastYIQ(hexcolor) {
    console.log({
      hexcolor: hexcolor
    });
    var r = parseInt(hexcolor.substr(1, 2), 16);
    var g = parseInt(hexcolor.substr(3, 2), 16);
    var b = parseInt(hexcolor.substr(5, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }

  var data = [{
    "id": "0",
    "parentIds": [],
    "icon": _policy_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    "data": "Initiation",
    "color": mediumAquamarine
  }, {
    "id": "1",
    "parentIds": ["0"],
    "icon": _framing_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    "data": "Basic Woodworking Safety",
    "color": mediumAquamarine
  }, {
    "id": "2",
    "parentIds": ["1"],
    "data": "Chainsaw",
    "icon": _chainsaw_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    "color": redSalsa
  }, {
    "id": "3",
    "parentIds": ["1"],
    "icon": _circularSaw_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    "data": "Saws",
    "color": redSalsa
  }, {
    "id": "5",
    "parentIds": ["3"],
    "icon": _framing_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    "data": "Framing",
    "color": redSalsa
  }, {
    "id": "6",
    "parentIds": ["0"],
    "icon": _policy_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    "data": "Project Management",
    "color": mediumAquamarine
  }, {
    "id": "7",
    "parentIds": ["0"],
    "icon": _policy_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    "data": "Gardening",
    "color": mediumAquamarine
  }, {
    "id": "9",
    "parentIds": ["0"],
    "icon": _concrete_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    "data": "Pouring Concrete",
    "color": mediumSlateBlue
  }, {
    "id": "10",
    "parentIds": ["9", "5"],
    "icon": _bank_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    "data": "Home Construction",
    "color": mediumSlateBlue
  }, {
    "id": "11",
    "parentIds": ["10", "6"],
    "icon": _bank_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    "data": "Foreman",
    "color": mediumSlateBlue
  }, {
    "id": "12",
    "parentIds": ["0"],
    "icon": _money_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    "data": "Fundraising",
    "color": "white"
  }];
  console.log({
    data: data
  });
  var x = Object(d3_dag__WEBPACK_IMPORTED_MODULE_14__["dagStratify"])()(data);
  console.log({
    x: x
  });
  var eve = Object(d3_dag__WEBPACK_IMPORTED_MODULE_14__["sugiyama"])().size([1000, 1000])(x);
  console.log({
    eve: eve
  }); // let data = {
  //     "name": "Initiation",
  //     "color": redSalsa,
  //     "children": [
  //       {
  //         "name": "Gardening",
  //         "color": mediumAquamarine,
  //         "children": [ {
  //             "name": "Food Safety",
  //             "color": "white",
  //             "children": [
  //               {
  //                 "name": "Cooking",
  //                 "color": blackCoffee
  //               },
  //               {
  //                 "name": "Cooking",
  //                 "color": blackCoffee
  //               },
  //               {
  //                 "name": "Cooking",
  //                 "color": blackCoffee
  //               },
  //               {
  //                 "name": "Cooking",
  //                 "color": blackCoffee
  //               },
  //               {
  //                 "name": "Cooking",
  //                 "color": blackCoffee
  //               },
  //               {
  //                 "name": "Cooking",
  //                 "color": blackCoffee
  //               }
  //             ]
  //           },]
  //       },
  //       {
  //         "name": "Woodworking Safety",
  //         "color":"orange",
  //         "children": [
  //           {
  //             "name": "Wall Framing",
  //             "color": khakiWeb
  //           },
  //           {
  //             "name": "Cabinetry",
  //             "color":khakiWeb
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Scientific Mamagement",
  //         "color": mediumSlateBlue,
  //       },
  //       {
  //         "name": "Food Safety",
  //         "color": "white",
  //         "children": [
  //           {
  //             "name": "Cooking",
  //             "color": blackCoffee
  //           },
  //           {
  //             "name": "Initiation",
  //             "color": redSalsa,
  //             "children": [
  //               {
  //                 "name": "Gardening",
  //                 "color": mediumAquamarine
  //               },
  //               {
  //                 "name": "Woodworking Safety",
  //                 "color":"orange",
  //                 "children": [
  //                   {
  //                     "name": "Wall Framing",
  //                     "color": khakiWeb
  //                   },
  //                   {
  //                     "name": "Cabinetry",
  //                     "color":khakiWeb
  //                   }
  //                 ]
  //               },
  //               {
  //                 "name": "Scientific Management",
  //                 "color": mediumSlateBlue,
  //               },
  //               {
  //                 "name": "Food Safety",
  //                 "color": "white",
  //                 "children": [
  //                   {
  //                     "name": "Cooking",
  //                     "color": blackCoffee
  //                   },
  //                   {
  //                     "name": "Cooking",
  //                     "color": blackCoffee
  //                   },
  //                   {
  //                     "name": "Cooking",
  //                     "color": blackCoffee
  //                   },
  //                   {
  //                     "name": "Cooking",
  //                     "color": blackCoffee
  //                   },
  //                   {
  //                     "name": "Cooking",
  //                     "color": blackCoffee
  //                   },
  //                   {
  //                     "name": "Cooking",
  //                     "color": blackCoffee
  //                   }
  //                 ]
  //               },
  //               {
  //                 "name": "Organizing",
  //                 "color": redSalsa
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Organizing",
  //         "color": redSalsa
  //       }
  //     ]
  //   }

  var width = 1300;
  var height = 1000; // let root = hierarchy(data);
  // let treeify = tree(root).size([height* 2, width * 2 ]);
  // let eve = treeify(root);
  //   let x0 = Infinity;
  // let x1 = -x0;
  // let y0 = Infinity;
  // let y1 = -y0;
  // eve.each(d => {
  //   if (d.x > x1) x1 = d.x;
  //   if (d.x < x0) x0 = d.x;
  //   if (d.y > y1) y1 = d.y;
  //   if (d.y < y0) y0 = d.y;
  // });
  // console.log({x0,x1,y0,y1, height, width})

  function toLink(node) {
    var linkify = Object(d3_shape__WEBPACK_IMPORTED_MODULE_5__["linkHorizontal"])().x(function (d) {
      return d.y;
    }).y(function (d) {
      return d.x;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
      fill: "none",
      stroke: "#555",
      strokeOpacity: ".6",
      strokeWidth: "3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
      d: linkify(node)
    }));
  }

  function toNode(node) {
    console.log({
      node: node
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
      onClick: function onClick() {
        return selectNode(node.data);
      },
      style: {
        cursor: "pointer"
      },
      stroke: "black",
      strokeOpacity: "1",
      strokeWidth: "0",
      fill: "none",
      transform: "translate(".concat(node.y, ",").concat(node.x, ")")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
      fill: node.data.color,
      r: "40"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("text", {
      fill: "black",
      fontFamily: "sans-serif",
      strokeWidth: "0",
      strokeOpacity: ".4",
      fontSize: 20,
      x: 0,
      y: 60,
      textAnchor: "middle"
    }, node.data.data), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
      fill: getContrastYIQ(node.data.color)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("image", {
      x: -60,
      y: -70,
      style: {
        transform: "scale(.5)"
      },
      href: node.data.icon
    }))));
  } // function toText(node){
  //     console.log(node)
  //     return 
  // }


  var links = eve.dag.links().map(toLink);
  var nodes = eve.dag.descendants().map(toNode);
  var learnTree = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LearnTree, {
    ref: learnTreeRef,
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "0 0 ".concat(width, " ").concat(height)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", null, links, nodes))); //let texts = eve.descendants().map(toText);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormWrapper, {
    style: {
      padding: "1rem"
    }
  }, learnTree, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InfoColumn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MemberInfo, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CourseInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CourseTitle, null, selectedNode && selectedNode.data), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CourseDescription, null, selectedNode && selectedNode.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IWantToTakeThis, null, " I'm interested"))));
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Onboard; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nwidth:300px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nposition: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: transparent;\n  border: 2px solid black;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nposition: absolute;\nopacity: 0;\ncursor: pointer;\nheight: 0;\nwidth: 0;\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\ndisplay: block;\nposition: relative;\npadding-left: 35px;\nmargin-bottom: 12px;\ncursor: pointer;\nfont-size: 22px;\nuser-select: none;\nwidth:200px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\ndisplay:flex;\nflex-direction:row;\njustify-content:flex-start;\npadding:32px;\nwidth:100%;\nflex-wrap:wrap;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nmargin: 0px 8px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nfont-size:18px;\nposition:relative;\nleft:10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nwidth:auto;\npadding: 12px 20px;\nmargin: 8px 0;\nbox-sizing: border-box;\nborder: 2px solid black;\nborder-radius: 4px;\nbackground:transparent;\n&:focus {\n    outline: none;\n    border: 2px solid #d50004;\n    background:transparent;\n}\n\nfont-size:24px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\ndisplay:flex;\nflex-wrap: wrap;\npadding:32px 0px;\nwidth:90%;\nflex-direction:row;\nmargin-top 32px;\njustify-content:center;\n\nborder: 1px black solid;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\ndisplay:flex;\ncolor:black;\nfont-size:28px;\npadding:32px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\ndisplay:flex;\nflex-direction:column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var Explainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var FormSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input(_templateObject4());
var InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5());
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject6());
var CheckBoxGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject7());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label(_templateObject8());
var Checkbox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input(_templateObject9());
var Checkmark = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject10());
var SkillCheck = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject11());
var skills = ['Writing', 'Woodworking', 'Graphic Designer', 'Cooking/Baking', 'Electric Work', 'Welding', 'Computer Repair', 'Software', 'Accounting', 'BookKeeping', "Research", "Networking", "Fundraising", "Gardening", "Own Land", "Own Storage Space"];
var skillCheckboxes = skills.map(function (skill) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SkillCheck, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, skill, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Checkbox, {
    type: "checkbox"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Checkmark, null)));
});
function Onboard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormWrapper, {
    style: {
      padding: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Explainer, null, "Welcome! Let us know a little bit about you, and what you see yourself doing in RDC."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputLabel, null, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    type: "text",
    name: "firstname",
    placeholder: "First Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputLabel, null, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    type: "text",
    name: "last",
    placeholder: "Last Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputLabel, null, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    type: "text",
    name: "phone",
    placeholder: "Phone #"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputLabel, null, "Email Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextInput, {
    type: "text",
    name: "email",
    placeholder: "Email"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormSection, {
    style: {
      flexDirection: "column"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Explainer, null, "Skills we need."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckBoxGrid, null, skillCheckboxes)));
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);

 //


function Blog() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Policies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#bottom",
    id: "top"
  }, "Scroll to bottom!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Policies:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
      to: "/policies/post/".concat(post.id, "/")
    }, post.title));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#top",
    id: "bottom"
  }, "Scroll to top!"));
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);

 //


function Post() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/policies/"
  }, '<', " Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body));
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(7);

var _router = __webpack_require__(10);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/DustBowl.a7a3491c.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/duststorm.3f67c86b.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/phone.fb7258b2.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("d3-shape");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1OTUuMjggODQxLjg5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OTUuMjggODQxLjg5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAxMDEwMTt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyNy4xNSw0MjcuMTNjMC01Ljg5LTQuNzctMTAuNjctMTAuNjYtMTAuNjdzLTEwLjY3LDQuNzgtMTAuNjcsMTAuNjdzNC43OCwxMC42NywxMC42NywxMC42NwoJCVMyMjcuMTUsNDMzLjAyLDIyNy4xNSw0MjcuMTN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMyLjAzLDUwMi4xMmMyLjA4LDIuMDgsNC44MSwzLjEyLDcuNTUsMy4xMmMyLjcyLDAsNS40NS0xLjA1LDcuNTMtMy4xMmw0NS4yNy00NS4yNQoJCWM0LjE2LTQuMTcsNC4xNi0xMC45NCwwLTE1LjA5Yy00LjE3LTQuMTYtMTAuOTItNC4xNi0xNS4wOSwwbC00NS4yNSw0NS4yNUMyMjcuODYsNDkxLjIsMjI3Ljg2LDQ5Ny45NSwyMzIuMDMsNTAyLjEyeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0Ni42Nyw0NTcuMzFjMTYuNjItMTYuNjIsMTYuNjItNDMuNywwLTYwLjM0Yy04LjA2LTguMDUtMTguNzgtMTIuNDktMzAuMTctMTIuNDkKCQljLTExLjQxLDAtMjIuMTIsNC40NC0zMC4xNywxMi40OWMtMTYuNjQsMTYuNjQtMTYuNjQsNDMuNzIsMCw2MC4zNGM4LjA1LDguMDYsMTguNzcsMTIuNSwzMC4xNywxMi41CgkJQzIyNy44OSw0NjkuODEsMjM4LjYxLDQ2NS4zNywyNDYuNjcsNDU3LjMxeiBNMjAxLjQsNDEyLjA2YzQuMDMtNC4wMyw5LjM5LTYuMjUsMTUuMDktNi4yNWM1LjY5LDAsMTEuMDUsMi4yMiwxNS4wOCw2LjI1CgkJYzguMzEsOC4zMSw4LjMxLDIxLjg0LDAsMzAuMTVjLTQuMDMsNC4wMy05LjM5LDYuMjUtMTUuMDgsNi4yNWMtNS43LDAtMTEuMDYtMi4yMi0xNS4wOS02LjI1CgkJQzE5My4wOSw0MzMuOSwxOTMuMDksNDIwLjM3LDIwMS40LDQxMi4wNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MzAuNywxOTYuNDNoLTAuODljLTEuNTktOS41NS01LjMzLTE4LjU0LTEwLjk1LTI2LjQxbDAuNjQtMC42M2M0LjE2LTQuMTYsNC4xNi0xMC45MiwwLTE1LjA4CgkJYy00LjE3LTQuMTYtMTAuOTItNC4xNi0xNS4wOSwwbC0wLjYyLDAuNjNjLTcuODgtNS42Mi0xNi44Ny05LjM1LTI2LjQyLTEwLjk1di0wLjg5YzAtNS44OS00Ljc3LTEwLjY2LTEwLjY2LTEwLjY2CgkJcy0xMC42Nyw0Ljc3LTEwLjY3LDEwLjY2djAuODljLTkuNTUsMS41OS0xOC41NSw1LjMyLTI2LjQyLDEwLjk0bC0wLjYyLTAuNjJjLTQuMTUtNC4xNi0xMC45Mi00LjE2LTE1LjA4LDAKCQljLTQuMTcsNC4xNi00LjE3LDEwLjkyLDAsMTUuMDlsLTE1LjA5LDE1LjA4Yy00LjE2LTQuMTYtMTAuOTItNC4xNi0xNS4wOCwwYy00LjE3LDQuMTYtNC4xNywxMC45MiwwLDE1LjA5bC0xNS4wOSwxNS4wOWwwLDAKCQljLTQuMTYtNC4xNi0xMC45Mi00LjE2LTE1LjA4LDBjLTQuMTcsNC4xNi00LjE3LDEwLjkyLDAsMTUuMDlsLTE1LjA5LDE1LjA5bDAsMGMtNC4xNi00LjE2LTEwLjkyLTQuMTYtMTUuMDgsMAoJCWMtNC4xNyw0LjE2LTQuMTcsMTAuOTIsMCwxNS4wOWwtMTUuMDksMTUuMDlsMCwwYy00LjE2LTQuMTYtMTAuOTEtNC4xNi0xNS4wOCwwcy00LjE3LDEwLjkyLDAsMTUuMDlsLTE5LjUyLDE5LjUyCgkJYy02LjEyLTIuNC0xMi43Mi0zLjY3LTE5LjUtMy42N2MtMTMuNTYsMC0yNi4zNCw1LjA0LTM2LjIzLDE0LjIyYy0xNC41My03LjU4LTI3LjctMTEuNzMtMzkuNDEtMTIuMzcKCQljLTE0LjkyLTAuODMtMjcuNTMsMy44LTM3LjUsMTMuNzdjLTEyLjg4LDEyLjg3LTE4Ljc3LDI2LjgzLTE3LjUsNDEuNDljMS4yOCwxNC45NywxMCwyNi45NCwxNy4wOCwzNC4zNWwtNCw0CgkJYy0yMC44LDIwLjgtMjAuOCw1NC42NCwwLDc1LjQybDE1LjIyLDE1LjIyYy0xMi4wNiwxMy41My0zMy42Nyw0Mi42OS0zMi42OSw3Ny4yNWMwLjczLDI1Ljc3LDEzLjY5LDQ5LjAzLDM4LjUsNjkuMTJsNy40Nyw2LjAzCgkJbDEyMC42Ny0xMjAuNjdsMCwwbDY2LjQ1LTY2LjQ1YzE1LjQ0LTE1LjQ0LDE5LjQxLTM4LjA2LDExLjkyLTU3LjE5bDE5LjUzLTE5LjUzYzIuMDksMi4wOSw0LjgxLDMuMTIsNy41NSwzLjEyCgkJczUuNDctMS4wNCw3LjU1LTMuMTJjNC4xNi00LjE2LDQuMTYtMTAuOTIsMC0xNS4wOWwwLDBsMTUuMDgtMTUuMDlsMCwwYzIuMDksMi4wOSw0LjgxLDMuMTIsNy41NSwzLjEyczUuNDUtMS4wNCw3LjU1LTMuMTIKCQljNC4xNi00LjE2LDQuMTYtMTAuOTIsMC0xNS4wOWwwLDBsMTUuMDgtMTUuMDljMi4wOSwyLjA5LDQuODEsMy4xMiw3LjU1LDMuMTJzNS40NS0xLjA0LDcuNTUtMy4xMmM0LjE2LTQuMTYsNC4xNi0xMC45MiwwLTE1LjA5CgkJbDAsMGwxNS4wOC0xNS4wOGwwLDBjMi4wOSwyLjA5LDQuODEsMy4xMiw3LjU1LDMuMTJzNS40NS0xLjA0LDcuNTUtMy4xMmM0LjE1LTQuMTYsNC4xNS0xMC45MiwwLTE1LjA5bDE1LjA4LTE1LjA5bDAsMAoJCWMyLjA5LDIuMDksNC44MSwzLjEyLDcuNTUsMy4xMnM1LjQ1LTEuMDQsNy41NS0zLjEyYzQuMTYtNC4xNiw0LjE2LTEwLjkyLDAtMTUuMDlsLTAuNjItMC42MmM1LjYyLTcuODgsOS4zNC0xNi44NywxMC45NC0yNi40MQoJCWgwLjg5YzUuODksMCwxMC42Ni00Ljc4LDEwLjY2LTEwLjY3QzU0MS4zNSwyMDEuMjEsNTM2LjU5LDE5Ni40Myw1MzAuNywxOTYuNDN6IE0yNTQuMiwzMjcuMjVjOC41NSwwLDE2LjU4LDMuMzMsMjIuNjIsOS4zNwoJCWw2MC4zNiw2MC4zNGM5LjUsOS41LDExLjc1LDIzLjU1LDYuNzgsMzUuMjJjLTEwLjQyLTEyLjI1LTI4Ljk0LTMzLjEzLTUxLjA1LTU0LjQ0Yy0xOS45NS0xOS4yMi0zOC40Mi0zNC41MS01NS4zMy00NS44NQoJCUMyNDIuNTQsMzI4Ljg3LDI0OC4yNSwzMjcuMjUsMjU0LjIsMzI3LjI1eiBNMTQ0LjgsMzYxLjEyYy0wLjY2LTguMDYsMy4xNy0xNi4zMSwxMS4zNi0yNC41YzUuNTYtNS41NiwxMi41LTguMDMsMjEuMjMtNy41NQoJCWM2LjExLDAuMzQsMTQuMiwyLjE3LDI0LjY0LDYuOTRsLTQ2LjMxLDQ2LjNDMTUxLjA1LDM3Ny4zOSwxNDUuNTEsMzY5Ljg0LDE0NC44LDM2MS4xMnogTTE1MS43Myw0MTYuNDZsMTEuNTgtMTEuNTYKCQljMC4yNy0wLjI1LDAuNTMtMC41MSwwLjc3LTAuNzhsNTcuMzgtNTcuMzhjMTUuMTksOS43MSwzMy44MSwyNC4zOCw1Ni41LDQ2LjIxYzIzLjMxLDIyLjQ1LDQyLjkxLDQ0LjkxLDUyLjM2LDU2LjEzTDIyOC43Miw1NTAuNjgKCQljLTAuNjctMi4zMS0xLjUyLTQuNjYtMi41NS03LjAyYy01LjI1LTEyLjA1LTEzLjQ4LTIwLjk1LTEzLjgzLTIxLjMzbC0wLjE0LTAuMTJsLTYwLjQ3LTYwLjQ4CgkJQzEzOS4yNSw0NDkuMjQsMTM5LjI1LDQyOC45NSwxNTEuNzMsNDE2LjQ2eiBNMTYzLjkxLDYxNS40OWMtMTUuMDUtMTQuMzEtMjIuOTEtMzAtMjMuNDEtNDYuNzJjLTAuMjUtOC4zNCwxLjMxLTE2LjQxLDMuODYtMjMuOTEKCQljMi4wNiwxLjk3LDQuNzIsMi45NSw3LjM4LDIuOTVjMi43MywwLDUuNDUtMS4wNSw3LjU1LTMuMTJjNC4xNi00LjE3LDQuMTYtMTAuOTIsMC0xNS4wOGwtNS4xMi01LjEyCgkJYzQuNDItNy4xMiw5LjEyLTEzLjA2LDEyLjg0LTE3LjM0bDI5LjgxLDI5LjgzYzAuNzcsMC44Niw2LjMsNy4xOSw5LjgsMTUuMmM1LjYxLDEyLjg4LDEuNSwxOS4xMS0yLjA4LDIyLjY5bDAsMEwxNjMuOTEsNjE1LjQ5egoJCSBNNDM2LjUzLDI5Ny42QzQzNi41MywyOTcuNiw0MzYuNTMsMjk3LjYsNDM2LjUzLDI5Ny42Yy0wLjAyLDAuMDEtMC4wMiwwLjAxLTAuMDIsMC4wMWwtODQuMjUsODQuMjdsLTIyLjYyLTIyLjYybDk5LjM0LTk5LjM0CgkJYzAtMC4wMSwwLTAuMDEsMC0wLjAxbDcuNTUtNy41NWwwLjAyLTAuMDJsMzcuNjktMzcuN2M0LjE3LTQuMTcsNC4xNy0xMC45MiwwLTE1LjA5Yy00LjE2LTQuMTctMTAuOTEtNC4xNy0xNS4wOCwwTDMxNC41NCwzNDQuMTcKCQlsLTIyLjYyLTIyLjYybDIzLjkyLTIzLjkydi0wLjAxbDAsMGwzMC4xNy0zMC4xNmMwLDAsMCwwLDAtMC4wMWwwLDBsMzAuMTctMzAuMTZsMCwwYzAtMC4wMSwwLTAuMDEsMC0wLjAxbDYwLjM0LTYwLjM0CgkJYzguMDUtOC4wNSwxOC43Ny0xMi40OSwzMC4xNi0xMi40OWMxMS40MSwwLDIyLjExLDQuNDQsMzAuMTcsMTIuNWM4LjA2LDguMDUsMTIuNSwxOC43NywxMi41LDMwLjE2cy00LjQ0LDIyLjExLTEyLjUsMzAuMTcKCQlMNDM2LjUzLDI5Ny42eiIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTI4IDE2MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI4IDEyOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHJlY3QgeD0iOTgiIHk9Ijc1LjgiIHdpZHRoPSIxMCIgaGVpZ2h0PSI0Ii8+PHJlY3QgeD0iOTgiIHk9IjY5LjgiIHdpZHRoPSIxMCIgaGVpZ2h0PSI0Ii8+PHBhdGggZD0iTTc2LjEsODcuOEgxMTZWNjFjMC01LjktMi4zLTExLjQtNi40LTE1LjZMOTAuOCwyNi43Yy0zLjgtMy44LTkuOC00LjYtMTQuNC0xLjlsLTEwLjYsNy43Yy01LjktMy4xLTEyLjYtNC45LTE5LjctNC45ICAgYy0yMy4yLDAtNDIsMTguOC00Miw0MnYybDYuOSwwYzAuNCw3LjEsMi45LDEzLjYsNi45LDE4LjlMNCw5MC44bDAuMSw0bDE3LjItMC4zYzYuNCw2LjQsMTUuMSwxMC4zLDI0LjgsMTAuMyAgIGM5LjUsMCwxOC4yLTMuOCwyNC41LTEwSDEyNHYtNEg3NC4xQzc0LjgsODkuOCw3NS41LDg4LjgsNzYuMSw4Ny44eiBNNzguNCwyOC4yYzMuMS0xLjcsNy0xLjIsOS41LDEuM2wxOC43LDE4LjcgICBjMy40LDMuNCw1LjMsNy45LDUuMywxMi43djIyLjdINzguMmMxLjctMy44LDIuNy03LjgsMi45LTEyLjFIODh2LTJjMC0xNC41LTcuNC0yNy4zLTE4LjYtMzQuOEw3OC40LDI4LjJ6IE00NiwzMS42ICAgYzIwLjMsMCwzNi45LDE2LDM3LjksMzZsLTE0LjMsMGMtMS0xMi4xLTExLjItMjEuNy0yMy42LTIxLjdzLTIyLjYsOS42LTIzLjYsMjEuN0g4LjFDOS4xLDQ3LjYsMjUuNywzMS42LDQ2LDMxLjZ6IE00NiwxMDAuOCAgIGMtMTYuNSwwLTMwLTEyLjktMzEuMS0yOS4xbDUuMSwwYzAuMSwwLjgsMC4xLDEuNiwwLjMsMi41bDMuOS0wLjdjLTAuMS0wLjYtMC4yLTEuMi0wLjItMS44bDIuMiwwdi0yYzAtMTAuOSw4LjgtMTkuNywxOS43LTE5LjcgICBjMTAuOSwwLDE5LjcsOC44LDE5LjcsMTkuN3YyaDExLjRDNzYsODcuOSw2Mi41LDEwMC44LDQ2LDEwMC44eiIvPjxwYXRoIGQ9Ik05Ni4zLDU3LjljMSwxLDIuNCwxLjYsMy45LDEuNmMxLjUsMCwyLjktMC42LDMuOS0xLjZjMS0xLDEuNi0yLjQsMS42LTMuOWMwLTEuNS0wLjYtMi45LTEuNi0zLjlMODYuMywzMi4yICAgYy0xLTEtMi40LTEuNi0zLjktMS42Yy0xLjUsMC0yLjksMC42LTMuOSwxLjZjLTEsMS0xLjYsMi40LTEuNiwzLjljMCwxLjUsMC42LDIuOSwxLjYsMy45TDk2LjMsNTcuOXogTTgxLjMsMzUuMSAgIGMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNGMwLjQsMCwwLjgsMC4yLDEuMSwwLjRsMTcuOCwxNy44YzAuNiwwLjYsMC42LDEuNiwwLDIuMmMtMC42LDAuNi0xLjYsMC42LTIuMiwwTDgxLjMsMzcuMiAgIGMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjFDODAuOSwzNS43LDgxLDM1LjQsODEuMywzNS4xeiIvPjxwYXRoIGQ9Ik00Niw2NC4yYy0zLDAtNS40LDIuNC01LjQsNS40czIuNCw1LjQsNS40LDUuNHM1LjQtMi40LDUuNC01LjRTNDksNjQuMiw0Niw2NC4yeiBNNDYsNzEuMWMtMC44LDAtMS40LTAuNi0xLjQtMS40ICAgczAuNi0xLjQsMS40LTEuNHMxLjQsMC42LDEuNCwxLjRTNDYuOCw3MS4xLDQ2LDcxLjF6Ii8+PHBhdGggZD0iTTI4LjEsODIuNmwtMy4yLDIuM2M0LjksNi44LDEyLjgsMTAuOCwyMS4xLDEwLjh2LTRDMzguOSw5MS44LDMyLjMsODguMywyOC4xLDgyLjZ6Ii8+PC9nPjx0ZXh0IHg9IjAiIHk9IjE0MyIgZmlsbD0iIzAwMDAwMCIgZm9udC1zaXplPSI1cHgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbC1Vbmljb2RlLCBBcmlhbCwgU2Fucy1zZXJpZiI+Q3JlYXRlZCBieSBLb2tvdGE8L3RleHQ+PHRleHQgeD0iMCIgeT0iMTQ4IiBmaWxsPSIjMDAwMDAwIiBmb250LXNpemU9IjVweCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtZmFtaWx5PSInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLVVuaWNvZGUsIEFyaWFsLCBTYW5zLXNlcmlmIj5mcm9tIHRoZSBOb3VuIFByb2plY3Q8L3RleHQ+PC9zdmc+"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTMuNzA1LDE0LjI3OWMtMS4xMDIsMC0xLjk5OCwwLjg5Ni0xLjk5OCwxLjk5OHMwLjg5NiwxLjk5OCwxLjk5OCwxLjk5OHMxLjk5OS0wLjg5NiwxLjk5OS0xLjk5OCAgIFM0LjgwNiwxNC4yNzksMy43MDUsMTQuMjc5eiBNMy43MDUsMTcuNDc2Yy0wLjY2LDAtMS4xOTctMC41MzgtMS4xOTctMS4xOThjMC0wLjY2MSwwLjUzNy0xLjE5OCwxLjE5Ny0xLjE5OCAgIGMwLjY2MSwwLDEuMTk4LDAuNTM4LDEuMTk4LDEuMTk4QzQuOTAzLDE2LjkzOCw0LjM2NiwxNy40NzYsMy43MDUsMTcuNDc2eiIvPjxwYXRoIGQ9Ik0xLjI1NSw5LjAzM2MwLjA0OCwwLjAyLDAuMTAxLDAuMDMxLDAuMTU2LDAuMDMxaDAuMjE0bDUuMjMyLDQuMTYyYzAuMDM2LDAuMDI0LDAuNzE2LDAuNDc1LDEuNzQyLDAuNDc1ICAgYzAuMjk2LDAsMC42Mi0wLjAzOCwwLjk2Ny0wLjEzM2MxLjM2MS0wLjM3NSw0LjYxOC0xLjEwNCw0LjU5NC0xLjEwNGMwLjQyMS0wLjAyMywxLjIzNi0wLjM4NiwxLjMwMy0xLjU5MSAgIGMwLjA0LTAuNzQsMC4wNjctMS40MjEsMC4wODItMS44MjNjMC41NzUtMC4wMzYsMS4wMzYtMC41MDQsMS4wMzYtMS4wODljMC0wLjYwOC0wLjQ5NS0xLjEwMi0xLjEwMy0xLjEwMmgtMC4yMTYgICBjLTAuNDI4LTAuNTk1LTEuMDMtMC44OTYtMS44My0wLjg1NGMtMC4xMjQsMC4wMDctMC4xODUtMC4wMzgtMC4yNDgtMC4xMzVDMTIuODYsNS4zOCwxMi40MTEsNS4wNjMsMTEuODQsNC45MTggICBjLTAuMzA2LTAuMDc4LTAuNjE3LTAuMTA0LTAuOTMtMC4wNzdjLTAuMTQ0LDAuMDEyLTAuMjQxLTAuMDIyLTAuMzQ0LTAuMTMxQzEwLjEzNCw0LjI1MSw5LjYsNC4wMjcsOC45NjQsNC4wNTEgICBjLTAuNDY4LDAuMDE3LTAuOSwwLjE1OS0xLjMwOCwwLjM3OUM3LjU0OSw0LjQ4Nyw3LjQ2NCw0LjQ5Nyw3LjM0OSw0LjQ0MUM3LjE4Miw0LjM2LDcuMDA1LDQuMjkyLDYuODI1LDQuMjQ1ICAgYy0wLjY5Mi0wLjE4LTEuMzE4LTAuMDg0LTEuODQ2LDAuNDQ0QzQuODE3LDQuODUsNC43NzEsNS4xNSw0LjU1OCw1LjE5OEM0LjM1LDUuMjQ0LDQuMTA1LDUuMTczLDMuODc3LDUuMTg3ICAgQzMuMjczLDUuMjI1LDIuNzUyLDUuNDM0LDIuNDA2LDUuOTZDMi4zMzYsNi4wNjYsMi4yNjMsNi4xLDIuMTM5LDYuMTA4QzEuNTgyLDYuMTQsMS4yNDcsNi40MzQsMS4xNTYsNi45MTIgICBDMC42NzQsNy4wMjksMC4zMDcsNy40NDUsMC4zMDcsNy45NjJDMC4zMDcsOC41MTUsMC43MjMsOC45NTQsMS4yNTUsOS4wMzN6IE0xNC42NjMsMTAuODNjLTAuMDQxLDAuNzQ4LTAuNDcxLDAuODI4LTAuNjEzLDAuODQ1ICAgYy0wLjEzNSwwLjAzLTMuMzE0LDAuNzQxLTQuNjk3LDEuMTIyYy0xLjE3NiwwLjMyOC0yLjAxNS0wLjIxLTIuMDIyLTAuMjE0TDIuOTA5LDkuMDY0aDIuMjRoMS4xODZoNy45NjhoMC40NCAgIEMxNC43MjgsOS40NjcsMTQuNzAxLDEwLjEyMiwxNC42NjMsMTAuODN6IE0yLjA3Miw2LjgzM0MyLjIxLDYuNzk5LDIuMzQ5LDYuODExLDIuNDg3LDYuODIxQzIuNjQxLDYuODMxLDIuNzc0LDYuNzgsMi44MzIsNi42MzkgICBjMC4zMDktMC43NDQsMC45MjYtMC43OTIsMS41OTgtMC43MjFjMC4xNTIsMC4wMTYsMC4zMDIsMC4wNSwwLjQ1MywwLjA2M2MwLjE4LDAuMDE2LDAuMjg3LTAuMDc4LDAuMzMxLTAuMjQ5ICAgYzAuMTczLTAuNjY3LDAuNjg0LTAuOTgsMS4zNTMtMC44MjVDNi44LDQuOTYsNy4wMjEsNS4wNDYsNy4yMjIsNS4xNzFDNy40MjUsNS4yOTksNy42MDgsNS4yOCw3LjgwNCw1LjE1OSAgIGMwLjI3My0wLjE2OSwwLjU2My0wLjMwMSwwLjg4LTAuMzY0YzAuNTgzLTAuMTE3LDEuMDgzLDAuMDMyLDEuNDQ5LDAuNTA0YzAuMTcyLDAuMjIyLDAuMzY0LDAuMjk1LDAuNjI4LDAuMjY0ICAgYzAuMjk4LTAuMDM1LDAuNTk2LTAuMDMyLDAuODksMC4wNDNjMC40OCwwLjEyMiwwLjgzNCwwLjQwNywxLjA0NiwwLjg1MmMwLjEwNywwLjIyNCwwLjI2LDAuMzAzLDAuNDk4LDAuMjc1ICAgYzAuMjM0LTAuMDI4LDAuNDY5LTAuMDUyLDAuNzA2LTAuMDA1YzAuMTMyLDAuMDI2LDAuMjQ5LDAuMDc1LDAuMzYsMC4xMzRIMi4wMjVDMi4wNDUsNi44NTMsMi4wNDksNi44MzgsMi4wNzIsNi44MzN6IE0xLjQxMSw3LjY2ICAgaDE0LjA2NmMwLjE2NCwwLDAuMzAyLDAuMTM5LDAuMzAyLDAuMzAycy0wLjEzOCwwLjMwMi0wLjMwMiwwLjMwMmgtMC4zMmgtMC44NTRINi4zMzRINS4xNDlIMS40MTEgICBjLTAuMTY3LDAtMC4zMDMtMC4xMzYtMC4zMDMtMC4zMDJTMS4yNDQsNy42NiwxLjQxMSw3LjY2eiIvPjxwYXRoIGQ9Ik0yMi42OTYsNC41MTNjLTAuMDAxLDAtMC4wMDIsMC0wLjAwMiwwbC0yLjMwMiwwLjE4M2MtMC40MzQsMC4wMjUtMC43OTYsMC4yOS0wLjk1MywwLjY1NiAgIGMtMC42OTQsMC4xNDItMS43MjYsMC43MTMtMi4wNTUsMi4yMDZjLTAuMDc3LDAuMzUyLTAuMTQ2LDAuNzUxLTAuMjE3LDEuMTcyYy0wLjI5MSwxLjcyLTAuNjUzLDMuODYtMi4wNDEsNC4yNiAgIGMtMS42OTgsMC40ODgtNi42MzcsMS42ODctNy45ODgsMi4wMTRjLTAuNTIxLTEuMzk3LTEuODU3LTIuNDAxLTMuNDM0LTIuNDAxYy0yLjAyNSwwLTMuNjc0LDEuNjQ4LTMuNjc0LDMuNjc0ICAgczEuNjQ4LDMuNjc0LDMuNjc0LDMuNjc0YzIuMDI2LDAsMy42NzUtMS42NDgsMy42NzUtMy42NzRjMC0wLjE3LTAuMDI4LTAuMzMzLTAuMDUtMC40OTZjMC42MzgtMC4xNTQsMi4wNjMtMC41LDMuNTc5LTAuODc2ICAgbDMuMDc0LDMuMDQ3YzAuMDc1LDAuMDc1LDAuMTc4LDAuMTE2LDAuMjgxLDAuMTE2YzAuMDM4LDAsMC4wNzctMC4wMDUsMC4xMTUtMC4wMTdjMC4xNDEtMC4wNDIsMC4yNDYtMC4xNTgsMC4yNzYtMC4zMDEgICBsMC44NS00LjA2MmMxLjcyNy0wLjYzMiwyLjEzMy0yLjk0NCwyLjQ1Mi00LjgyNWMwLjA2OS0wLjQwNywwLjEzNC0wLjc5MywwLjIwOS0xLjEzNGMwLjIzNi0xLjA3MiwwLjg4OS0xLjQyOCwxLjI4Ni0xLjU1ICAgYzAuMTYyLDAuMzU0LDAuNTEzLDAuNjEyLDAuOTMzLDAuNjM2bDIuMzEsMC4xODNjMC4wMSwwLDAuMDIxLDAuMDAxLDAuMDMxLDAuMDAxYzAuNjg2LDAsMS4yNDQtMC41NTgsMS4yNDQtMS4yNDQgICBDMjMuOTY5LDUuMDcsMjMuNDEzLDQuNTEzLDIyLjY5Niw0LjUxM3ogTTMuNzA1LDE5LjE1MWMtMS41ODQsMC0yLjg3My0xLjI5LTIuODczLTIuODc0YzAtMS41ODUsMS4yODktMi44NzUsMi44NzMtMi44NzUgICBjMS41ODUsMCwyLjg3NCwxLjI5LDIuODc0LDIuODc1QzYuNTc5LDE3Ljg2Miw1LjI5LDE5LjE1MSwzLjcwNSwxOS4xNTF6IE0xNC4wMjIsMTYuODY2bC0yLjIwNi0yLjE4NyAgIGMxLjA0NC0wLjI2MSwyLjA1My0wLjUxOSwyLjgxNS0wLjcyM0wxNC4wMjIsMTYuODY2eiBNMjIuNzM5LDYuMTk5bC0yLjMtMC4xODJjLTAuMTU3LTAuMDA5LTAuMjg0LTAuMTI2LTAuMjg0LTAuMjYxICAgczAuMTI3LTAuMjUyLDAuMjkyLTAuMjYybDIuMjc4LTAuMTgyYzAuMjQ1LDAsMC40NDMsMC4xOTksMC40NDMsMC40NDRDMjMuMTY4LDUuOTk2LDIyLjk3Nyw2LjE5MiwyMi43MzksNi4xOTl6Ii8+PC9nPjx0ZXh0IHg9IjAiIHk9IjM5IiBmaWxsPSIjMDAwMDAwIiBmb250LXNpemU9IjVweCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtZmFtaWx5PSInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLVVuaWNvZGUsIEFyaWFsLCBTYW5zLXNlcmlmIj5DcmVhdGVkIGJ5IEF0aWYgQXJzaGFkPC90ZXh0Pjx0ZXh0IHg9IjAiIHk9IjQ0IiBmaWxsPSIjMDAwMDAwIiBmb250LXNpemU9IjVweCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtZmFtaWx5PSInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLVVuaWNvZGUsIEFyaWFsLCBTYW5zLXNlcmlmIj5mcm9tIHRoZSBOb3VuIFByb2plY3Q8L3RleHQ+PC9zdmc+"

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40);
__webpack_require__(42);
module.exports = __webpack_require__(50);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(41)["default"];

var _require = __webpack_require__(19),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(19),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(43),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);
















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/index.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/members.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/members */).then(__webpack_require__.bind(null, 25))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/members.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/members";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/members.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/onboard.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/onboard */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/onboard.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/onboard";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/onboard.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/policies.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/policies */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/policies.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/policies";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/policies.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Post */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Post";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/about.js': t_1,
  '__react_static_root__/src/pages/index.js': t_2,
  '__react_static_root__/src/pages/members.js': t_3,
  '__react_static_root__/src/pages/onboard.js': t_4,
  '__react_static_root__/src/pages/policies.js': t_5,
  '__react_static_root__/src/containers/Post': t_6
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(15);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 9,
	"./": 9,
	"./index": 9,
	"./index.js": 9
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(21);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(51);

var _interopRequireDefault = __webpack_require__(52);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(53));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(54));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(55);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(56)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("/Users/calebcreed/RedDirtCollectiveSite/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(57)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Imports
exports.push([module.i, "@import url(https://use.typekit.net/tei3yvm.css);", ""]);

// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\n/* \nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n} */\nbody{\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  font-family: bigcity-grotesque-pro, sans-serif;\n  font-style: normal;\n  background:#f5f4e1;\n  color: #d50004;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #f5f4e1;\n  border-bottom: 2px solid #d50004;\n  position:fixed;\n}\n\nnav a {\n  color: #d50004;\n  padding: 1rem;\n  display: inline-block;\n}\n\nh1 {\n  font-size: 10vw;\n  margin: 0px;\n}\n\n.title {\n  letter-spacing: -.03em;\n  line-height:8vw;\n  margin-top: 36px;\n}\n\n\n.content {padding-top:54px;}\n\n\n.info-scroll {\n  width:100%;\n  overflow:scroll;\n}\n\n.info-block {\n  background: #f5f4e1;\n  border-bottom: 2px solid #d50004;\n  width:33%;\n  height:500px;\n  display:flex;\n  justify-content: center;\n  align-items:center;\n}\n\n.more {\n  height:6px;\n  width:6px;\n  border: solid #f5f4e1;\n  border-width: 0 6px 6px 0;\n  display: inline-block;\n  padding: 6px;\n  -webkit-transform: translateY(-100%) rotate(45deg);\n  position:absolute;\n    top:96vh;\n    transform:translateY(-100%) rotate(45deg);\n}\n\n\n.screenful {\n  height:100vh;\n}\n\nsection {\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  height:100vh;\n  margin-top:100vh;\n}\n", ""]);



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/goggles.07fb5465.jpg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hands.551563e8.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/coffee.fa86a9b8.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("color-name");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("d3-hierarchy");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("react-zoom-pan-pinch");

/***/ })
/******/ ]);
});