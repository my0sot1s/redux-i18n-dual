/*
 * Project: redux-i18n
 * File: component/immutable.js
 */

import { connect } from 'react-redux'
import I18n from './component'

export default connect(state => ({
  lang: state.getIn(['i18nState', 'lang']),
  theme: state.getIn(['i18nState', 'theme']),
  translations_reducer: state.getIn(['i18nState', 'translations']),
  styles_reducer: state.getIn(['i18nState', 'styles']),
  forceRefresh: state.getIn(['i18nState', 'forceRefresh'])
}))(I18n)
