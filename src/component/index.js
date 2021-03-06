/*
 * Project: redux-i18n
 * File: component/index.js
 */

import { connect } from 'react-redux'
import I18n from './component'

export default connect(state => ({
  lang: state.i18nState.lang,
  theme: state.i18nState.theme,
  translations_reducer: state.i18nState.translations,
  styles_reducer: state.i18nState.styles,
  forceRefresh: state.i18nState.forceRefresh
}))(I18n)
