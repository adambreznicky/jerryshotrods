import { combineReducers } from 'redux'
import { responsiveStateReducer } from 'redux-responsive'

import view from './view'
import projects from './projects'

export const rootReducer = combineReducers({
  view: view,
  browser: responsiveStateReducer,
  projects: projects
})
