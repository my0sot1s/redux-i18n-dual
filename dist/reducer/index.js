'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.i18nState = i18nState;
/*
 * Project: redux-i18n
 * File: reducer/index.js
 */

var reduxI18nState = {
  lang: 'en',
  theme: 'base',
  translations: {},
  styles: {},
  forceRefresh: false
};

function i18nState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reduxI18nState;
  var action = arguments[1];

  switch (action.type) {
    case 'REDUX_I18N_SET_LANGUAGE':
      return _extends({}, state, { lang: action.lang });
    case 'REDUX_I18N_SET_TRANSLATIONS':
      return _extends({}, state, { translations: action.translations });
    case 'REDUX_I18N_SET_THEME':
      return _extends({}, state, { theme: action.theme });
    case 'REDUX_I18N_SET_STYLES':
      return _extends({}, state, { styles: action.styles });
    case 'REDUX_I18N_SET_FORCE_REFRESH':
      return _extends({}, state, { forceRefresh: action.force });
    default:
      return state;
  }
}