/*
 * Project: redux-i18n
 * File: reducer/index.js
 */

const reduxI18nState = {
  lang: 'en',
  theme: 'base',
  translations: {},
  styles: {},
  forceRefresh: false
}

export function i18nState(state = reduxI18nState, action) {
  switch (action.type) {
    case 'REDUX_I18N_SET_LANGUAGE':
      return { ...state, lang: action.lang }
    case 'REDUX_I18N_SET_TRANSLATIONS':
      return { ...state, translations: action.translations }
    case 'REDUX_I18N_SET_THEME':
      return { ...state, theme: action.theme }
    case 'REDUX_I18N_SET_STYLES':
      return { ...state, styles: action.styles }
    case 'REDUX_I18N_SET_FORCE_REFRESH':
      return { ...state, forceRefresh: action.force }
    default:
      return state
  }
}
