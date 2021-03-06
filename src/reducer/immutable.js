/*
 * Project: redux-i18n
 * File: reducer/immutable.js
 */

import { Map } from 'immutable';

const reduxI18nState = new Map({
  lang: 'en',
  theme: 'base',
  translations: {},
  styles: {},
  forceRefresh: false
})

export function i18nState(state = reduxI18nState, action) {
  switch (action.type) {
    case 'REDUX_I18N_SET_LANGUAGE':
      return state.set('lang', action.lang)
    case 'REDUX_I18N_SET_TRANSLATIONS':
      return state.set('translations', action.translations)
    case 'REDUX_I18N_SET_THEME':
      return { ...state, theme: action.theme }
    case 'REDUX_I18N_SET_STYLES':
      return { ...state, styles: action.styles }
    case 'REDUX_I18N_SET_FORCE_REFRESH':
      return state.set('forceRefresh', action.force)
    default:
      return state
  }
}
