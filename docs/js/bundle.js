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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createElement;
var $ = document;

function createElement(tag, innerText) {
  var elem = $.createElement(tag);

  for (var _len = arguments.length, classNames = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNames[_key - 2] = arguments[_key];
  }

  if (classNames.length > 0) {
    elem.classList.add(classNames);
  }
  elem.innerHTML = innerText;
  return elem;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _app = __webpack_require__(3);

var _app2 = _interopRequireDefault(_app);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(10);

var _index4 = _interopRequireDefault(_index3);

var _configureStore = __webpack_require__(13);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)(_index4.default);

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.root').appendChild((0, _app2.default)(store, _index2.default));
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createElement = __webpack_require__(0);

var _createElement2 = _interopRequireDefault(_createElement);

var _output = __webpack_require__(4);

var _output2 = _interopRequireDefault(_output);

var _form = __webpack_require__(5);

var _form2 = _interopRequireDefault(_form);

var _log = __webpack_require__(6);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(store, actions) {
  var app = (0, _createElement2.default)('div', '');
  app.appendChild((0, _form2.default)(store, actions));
  app.appendChild((0, _output2.default)(store, actions));
  app.appendChild((0, _log2.default)(store, actions));
  return app;
}

exports.default = app;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store, actions) {
  var output = (0, _createElement2.default)('p', 'Здесь появится ответ сервера', 'view-stub__label');

  var unSubscribeServ = store.sendToServer.subscribe(function () {
    output.innerHTML = '\u0421\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u0438\u043D\u044F\u043B \u0434\u0430\u043D\u043D\u044B\u0435:  <b>' + store.sendToServer.getState() + '</b>';
    console.log('Обновлены данные компонента');
    actions.log.add(store, 'Обновлены данные компонента');
  });

  return output;
};

var _createElement = __webpack_require__(0);

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = form;

var _createElement = __webpack_require__(0);

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function form(store, actions) {
  var form = (0, _createElement2.default)('div', '', 'view-stub__input-block');
  var input = (0, _createElement2.default)('input', '', 'view-stub__input');
  var button = (0, _createElement2.default)('button', 'Отправить на сервер', 'view-stub__apply');

  button.addEventListener('click', function () {
    console.log('Нажата кнопка');
    actions.log.add(store, 'Нажата кнопка');
    console.log('Вызов диспетчера');
    actions.log.add(store, 'Вызов диспетчера');

    var data = input.value;
    actions.sendToServer.send(store, data);

    input.value = '';
    input.focus();
  });

  form.appendChild(input);
  form.appendChild(button);

  return form;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store, actions) {
  var logContainer = (0, _createElement2.default)('div', '');
  var log = (0, _createElement2.default)('div', '', 'log');
  var clearBtn = (0, _createElement2.default)('button', 'Очистить', 'log-list__clear');

  clearBtn.addEventListener('click', function () {
    actions.log.clear(store);
  });

  logContainer.appendChild(log);
  logContainer.appendChild(clearBtn);

  var unSubscribe = store.log.subscribe(function () {
    var logs = store.log.getState();
    var logsList = logs.map(function (log) {
      return '<li class="log-list__item">' + log + '</li>';
    }).join('');
    log.innerHTML = '<ul class="log-list">' + logsList + '</ul>';
  });

  return logContainer;
};

var _createElement = __webpack_require__(0);

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sendToServerActions = __webpack_require__(8);

var sendToServerActions = _interopRequireWildcard(_sendToServerActions);

var _logActions = __webpack_require__(9);

var logActions = _interopRequireWildcard(_logActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function combineActions() {
  return {
    sendToServer: sendToServerActions,
    log: logActions
  };
}

exports.default = combineActions();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = send;
function send(store, data) {
  // async
  setTimeout(function () {
    store.sendToServer.dispatch({
      type: 'SENDED_TO_SERVER',
      payload: data
    });
  }, 1000);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.clear = clear;
function add(store, data) {
  store.log.dispatch({
    type: 'ADD_LOG',
    payload: data
  });
}

function clear(store) {
  store.log.dispatch({ type: 'CLEAR' });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sendToServer = __webpack_require__(11);

var _sendToServer2 = _interopRequireDefault(_sendToServer);

var _log = __webpack_require__(12);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function combineReducers() {
  return {
    sendToServer: _sendToServer2.default,
    log: _log2.default
  };
}

exports.default = combineReducers();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendToServerReducer;
var initialState = '';

function sendToServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'SENDED_TO_SERVER':
      return action.payload;
    default:
      return state;
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logReducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [];

function logReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_LOG':
      return [].concat(_toConsumableArray(state), [action.payload]);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _createStore = __webpack_require__(14);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(rootReducer) {
  var store = {};
  Object.keys(rootReducer).forEach(function (reducer) {
    store[reducer] = (0, _createStore2.default)(rootReducer[reducer]);
  });
  return store;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;
function createStore(reducer) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var state = initialState;
  var callbacks = [];

  var getState = function getState() {
    return state;
  };

  var dispatch = function dispatch(action) {
    state = reducer(state, action);
    callbacks.forEach(function (callback) {
      return callback();
    });
  };

  var subscribe = function subscribe(callback) {
    callbacks.push(callback);
    return function () {
      return callbacks.filter(function (cb) {
        return cb !== callback;
      });
    };
  };

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  };
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2Y2Y2JhMTU3Mzg1NDAyOTg4NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9vdXRwdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbnMvc2VuZFRvU2VydmVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYWN0aW9ucy9sb2dBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVkdWNlcnMvc2VuZFRvU2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWR1Y2Vycy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdG9yZS9jcmVhdGVTdG9yZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiJCIsImRvY3VtZW50IiwidGFnIiwiaW5uZXJUZXh0IiwiZWxlbSIsImNsYXNzTmFtZXMiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdG9yZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhcHAiLCJhY3Rpb25zIiwib3V0cHV0IiwidW5TdWJzY3JpYmVTZXJ2Iiwic2VuZFRvU2VydmVyIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImlucHV0IiwiYnV0dG9uIiwiZGF0YSIsInZhbHVlIiwic2VuZCIsImZvY3VzIiwibG9nQ29udGFpbmVyIiwiY2xlYXJCdG4iLCJjbGVhciIsInVuU3Vic2NyaWJlIiwibG9ncyIsImxvZ3NMaXN0IiwibWFwIiwiam9pbiIsInNlbmRUb1NlcnZlckFjdGlvbnMiLCJsb2dBY3Rpb25zIiwiY29tYmluZUFjdGlvbnMiLCJzZXRUaW1lb3V0IiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsImNvbWJpbmVSZWR1Y2VycyIsInNlbmRUb1NlcnZlclJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsImxvZ1JlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJyZWR1Y2VyIiwiY3JlYXRlU3RvcmUiLCJjYWxsYmFja3MiLCJjYWxsYmFjayIsInB1c2giLCJmaWx0ZXIiLCJjYiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O2tCQzNEd0JBLGE7QUFGeEIsSUFBTUMsSUFBSUMsUUFBVjs7QUFFZSxTQUFTRixhQUFULENBQXVCRyxHQUF2QixF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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZjZjYmExNTczODU0MDI5ODg1MyIsImNvbnN0ICQgPSBkb2N1bWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBpbm5lclRleHQsIC4uLmNsYXNzTmFtZXMpIHtcclxuICBjb25zdCBlbGVtID0gJC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgaWYgKGNsYXNzTmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMpO1xyXG4gIH1cclxuICBlbGVtLmlubmVySFRNTCA9IGlubmVyVGV4dDtcclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMvY3JlYXRlRWxlbWVudC5qcyIsImltcG9ydCAnLi4vc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvaW5kZXgnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUocm9vdFJlZHVjZXIpO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKS5hcHBlbmRDaGlsZChhcHAoc3RvcmUsIGFjdGlvbnMpKTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tYWluLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vdXRpbHMvY3JlYXRlRWxlbWVudCc7XHJcbmltcG9ydCBvdXRwdXQgZnJvbSAnLi9jb21wb25lbnRzL291dHB1dCc7XHJcbmltcG9ydCBmb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcclxuaW1wb3J0IGxvZyBmcm9tICcuL2NvbXBvbmVudHMvbG9nJztcclxuXHJcbmZ1bmN0aW9uIGFwcChzdG9yZSwgYWN0aW9ucykge1xyXG4gIGNvbnN0IGFwcCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnKTtcclxuICBhcHAuYXBwZW5kQ2hpbGQoZm9ybShzdG9yZSwgYWN0aW9ucykpO1xyXG4gIGFwcC5hcHBlbmRDaGlsZChvdXRwdXQoc3RvcmUsIGFjdGlvbnMpKTtcclxuICBhcHAuYXBwZW5kQ2hpbGQobG9nKHN0b3JlLCBhY3Rpb25zKSk7XHJcbiAgcmV0dXJuIGFwcDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlRWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RvcmUsIGFjdGlvbnMpIHtcclxuICBjb25zdCBvdXRwdXQgPSBjcmVhdGVFbGVtZW50KCdwJywgJ9CX0LTQtdGB0Ywg0L/QvtGP0LLQuNGC0YHRjyDQvtGC0LLQtdGCINGB0LXRgNCy0LXRgNCwJywgJ3ZpZXctc3R1Yl9fbGFiZWwnKTtcclxuXHJcbiAgY29uc3QgdW5TdWJzY3JpYmVTZXJ2ID0gc3RvcmUuc2VuZFRvU2VydmVyLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICBvdXRwdXQuaW5uZXJIVE1MID0gYNCh0LXRgNCy0LXRgCDQv9GA0LjQvdGP0Lsg0LTQsNC90L3Ri9C1OiAgPGI+JHtzdG9yZS5zZW5kVG9TZXJ2ZXIuZ2V0U3RhdGUoKX08L2I+YDtcclxuICAgIGNvbnNvbGUubG9nKCfQntCx0L3QvtCy0LvQtdC90Ysg0LTQsNC90L3Ri9C1INC60L7QvNC/0L7QvdC10L3RgtCwJyk7XHJcbiAgICBhY3Rpb25zLmxvZy5hZGQoc3RvcmUsICfQntCx0L3QvtCy0LvQtdC90Ysg0LTQsNC90L3Ri9C1INC60L7QvNC/0L7QvdC10L3RgtCwJyk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvb3V0cHV0LmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlRWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtKHN0b3JlLCBhY3Rpb25zKSB7XHJcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAndmlldy1zdHViX19pbnB1dC1ibG9jaycpO1xyXG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnJywgJ3ZpZXctc3R1Yl9faW5wdXQnKTtcclxuICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAn0J7RgtC/0YDQsNCy0LjRgtGMINC90LAg0YHQtdGA0LLQtdGAJywgJ3ZpZXctc3R1Yl9fYXBwbHknKTtcclxuXHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ9Cd0LDQttCw0YLQsCDQutC90L7Qv9C60LAnKTtcclxuICAgIGFjdGlvbnMubG9nLmFkZChzdG9yZSwgJ9Cd0LDQttCw0YLQsCDQutC90L7Qv9C60LAnKTtcclxuICAgIGNvbnNvbGUubG9nKCfQktGL0LfQvtCyINC00LjRgdC/0LXRgtGH0LXRgNCwJyk7XHJcbiAgICBhY3Rpb25zLmxvZy5hZGQoc3RvcmUsICfQktGL0LfQvtCyINC00LjRgdC/0LXRgtGH0LXRgNCwJyk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGlucHV0LnZhbHVlO1xyXG4gICAgYWN0aW9ucy5zZW5kVG9TZXJ2ZXIuc2VuZChzdG9yZSwgZGF0YSk7XHJcblxyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL2Zvcm0uanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi91dGlscy9jcmVhdGVFbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdG9yZSwgYWN0aW9ucykge1xyXG4gIGNvbnN0IGxvZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnKTtcclxuICBjb25zdCBsb2cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJ2xvZycpO1xyXG4gIGNvbnN0IGNsZWFyQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ9Ce0YfQuNGB0YLQuNGC0YwnLCAnbG9nLWxpc3RfX2NsZWFyJyk7XHJcblxyXG4gIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYWN0aW9ucy5sb2cuY2xlYXIoc3RvcmUpO1xyXG4gIH0pO1xyXG5cclxuICBsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nKTtcclxuICBsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xlYXJCdG4pO1xyXG5cclxuICBjb25zdCB1blN1YnNjcmliZSA9IHN0b3JlLmxvZy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9ncyA9IHN0b3JlLmxvZy5nZXRTdGF0ZSgpO1xyXG4gICAgY29uc3QgbG9nc0xpc3QgPSBsb2dzLm1hcCgobG9nKSA9PiB7XHJcbiAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwibG9nLWxpc3RfX2l0ZW1cIj4ke2xvZ308L2xpPmA7XHJcbiAgICB9KS5qb2luKCcnKTtcclxuICAgIGxvZy5pbm5lckhUTUwgPSBgPHVsIGNsYXNzPVwibG9nLWxpc3RcIj4ke2xvZ3NMaXN0fTwvdWw+YDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGxvZ0NvbnRhaW5lcjtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9sb2cuanMiLCJpbXBvcnQgKiBhcyBzZW5kVG9TZXJ2ZXJBY3Rpb25zIGZyb20gJy4vc2VuZFRvU2VydmVyQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGxvZ0FjdGlvbnMgZnJvbSAnLi9sb2dBY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGNvbWJpbmVBY3Rpb25zKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZW5kVG9TZXJ2ZXI6IHNlbmRUb1NlcnZlckFjdGlvbnMsXHJcbiAgICBsb2c6IGxvZ0FjdGlvbnMsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZUFjdGlvbnMoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FjdGlvbnMvaW5kZXguanMiLCJleHBvcnQgZnVuY3Rpb24gc2VuZChzdG9yZSwgZGF0YSkge1xyXG4gIC8vIGFzeW5jXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBzdG9yZS5zZW5kVG9TZXJ2ZXIuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnU0VOREVEX1RPX1NFUlZFUicsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICB9KTtcclxuICB9LCAxMDAwKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYWN0aW9ucy9zZW5kVG9TZXJ2ZXJBY3Rpb25zLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZChzdG9yZSwgZGF0YSkge1xyXG4gIHN0b3JlLmxvZy5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiAnQUREX0xPRycsXHJcbiAgICBwYXlsb2FkOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoc3RvcmUpIHtcclxuICBzdG9yZS5sb2cuZGlzcGF0Y2goeyB0eXBlOiAnQ0xFQVInIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hY3Rpb25zL2xvZ0FjdGlvbnMuanMiLCJpbXBvcnQgc2VuZFRvU2VydmVyIGZyb20gJy4vc2VuZFRvU2VydmVyJztcclxuaW1wb3J0IGxvZyBmcm9tICcuL2xvZyc7XHJcblxyXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlbmRUb1NlcnZlcixcclxuICAgIGxvZyxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JlZHVjZXJzL2luZGV4LmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0gJyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZW5kVG9TZXJ2ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdTRU5ERURfVE9fU0VSVkVSJzpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcmVkdWNlcnMvc2VuZFRvU2VydmVyLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdBRERfTE9HJzpcclxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdO1xyXG4gICAgY2FzZSAnQ0xFQVInOlxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZWR1Y2Vycy9sb2cuanMiLCJpbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnLi9jcmVhdGVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShyb290UmVkdWNlcikge1xyXG4gIGNvbnN0IHN0b3JlID0ge307XHJcbiAgT2JqZWN0LmtleXMocm9vdFJlZHVjZXIpLmZvckVhY2goKHJlZHVjZXIpID0+IHtcclxuICAgIHN0b3JlW3JlZHVjZXJdID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXJbcmVkdWNlcl0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlID0ge30pIHtcclxuICBsZXQgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgY29uc3QgY2FsbGJhY2tzID0gW107XHJcblxyXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4gc3RhdGU7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xyXG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3Vic2NyaWJlID0gKGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2FsbGJhY2tzLmZpbHRlcihjYiA9PiBjYiAhPT0gY2FsbGJhY2spO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRTdGF0ZSxcclxuICAgIGRpc3BhdGNoLFxyXG4gICAgc3Vic2NyaWJlLFxyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3N0b3JlL2NyZWF0ZVN0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==