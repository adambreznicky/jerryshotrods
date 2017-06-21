import { combineReducers } from 'redux'
import { responsiveStateReducer } from 'redux-responsive'

import view from './view'

export const rootReducer = combineReducers({
  view: view,
  browser: responsiveStateReducer
})
