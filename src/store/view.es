import objectAssign from 'object-assign'

import {
  SET_VIEW_HOME,
  SET_VIEW_SERVICES,
  SET_VIEW_PROJECTS,
  SET_VIEW_PHOTOS,
  SET_VIEW_ABOUT_US,
  SET_VIEW_CONTACT
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
    case SET_VIEW_SERVICES:
      return objectAssign({}, state, {
        view: 'services'
      })
    case SET_VIEW_PROJECTS:
      return objectAssign({}, state, {
        view: 'projects'
      })
    case SET_VIEW_PHOTOS:
      return objectAssign({}, state, {
        view: 'photos'
      })
    case SET_VIEW_ABOUT_US:
      return objectAssign({}, state, {
        view: 'about us'
      })
    case SET_VIEW_CONTACT:
      return objectAssign({}, state, {
        view: 'contact'
      })
    default:
      return state
  }
}
