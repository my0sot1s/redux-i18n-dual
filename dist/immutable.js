'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTheme = exports.setTranslations = exports.setStyles = exports.setLanguage = exports.i18nState = exports.default = undefined;

var _immutable = require('./reducer/immutable');

Object.defineProperty(exports, 'i18nState', {
  enumerable: true,
  get: function get() {
    return _immutable.i18nState;
  }
});

var _actions = require('./actions');

Object.defineProperty(exports, 'setLanguage', {
  enumerable: true,
  get: function get() {
    return _actions.setLanguage;
  }
});
Object.defineProperty(exports, 'setStyles', {
  enumerable: true,
  get: function get() {
    return _actions.setStyles;
  }
});
Object.defineProperty(exports, 'setTranslations', {
  enumerable: true,
  get: function get() {
    return _actions.setTranslations;
  }
});
Object.defineProperty(exports, 'setTheme', {
  enumerable: true,
  get: function get() {
    return _actions.setTheme;
  }
});

var _immutable2 = require('./component/immutable');

var _immutable3 = _interopRequireDefault(_immutable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _immutable3.default; /*
                                        * Project: redux-i18n
                                        * File: immutable.js
                                        */