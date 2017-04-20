/*
 * Project: redux-i18n
 * File: actions.js
 */

export function setLanguage(lang) {
  return { type: 'REDUX_I18N_SET_LANGUAGE', lang }
}

function updateTranslations(translations) {
  return { type: 'REDUX_I18N_SET_TRANSLATIONS', translations }
}

export function setTranslations(translations, language) {
  return function (dispatch, getState) {
    if (language === undefined) {
      dispatch(updateTranslations(translations))
    } else {
      const state = getState()
      let trans = null

      // Compatibility with immutable
      if (state.i18nState === undefined) {
        trans = state.getIn(['i18nState', 'translations'])
      } else {
        trans = { ...state.i18nState.translations }
      }
      trans[language] = translations
      dispatch(updateTranslations(trans))
      dispatch(setForceRefresh(true))
    }
  }
}

export function setForceRefresh(force) {
  return { type: 'REDUX_I18N_SET_FORCE_REFRESH', force }
}


/*
 * Project: redux-i18n
 * File: actions.js
 */

export function setTheme(theme) {
  return { type: 'REDUX_I18N_SET_THEME', theme }
}

function updateStyles(styles) {
  return { type: 'REDUX_I18N_SET_STYLES', styles }
}

export function setStyles(styles, theme) {
  return function (dispatch, getState) {
    if (theme === undefined) {
      dispatch(updateStyles(styles))
    } else {
      const state = getState()
      let sty = null

      // Compatibility with immutable
      if (state.i18nState === undefined) {
        sty = state.getIn(['i18nState', 'styles'])
      } else {
        sty = { ...state.i18nState.styles }
      }
      sty[theme] = styles
      dispatch(updateStyles(sty))
      dispatch(setForceRefresh(true))
    }
  }
}