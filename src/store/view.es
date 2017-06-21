import objectAssign from 'object-assign'

import {
  SET_VIEW_HOME,
  SET_VIEW_PROJECTS
} from './actionTypes'

const initialState = {
  view: "home"
}

export default function view(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW_HOME:
      return objectAssign({}, state, {
        view: 'home'
      })
    case SET_VIEW_PROJECTS:
      return objectAssign({}, state, {
        view: 'projects'
      })
    default:
      return state
  }
}
