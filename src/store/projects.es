import objectAssign from 'object-assign'
import csv from '../static/projects/projects.csv'

const initialState = {
  finishedProjects: csv
}

export default function projects(state = initialState, action) {
  switch (action.type) {
    // case SET_VIEW_HOME:
    //   return objectAssign({}, state, {
    //     view: 'home'
    //   })
    // case SET_VIEW_SERVICES:
    //   return objectAssign({}, state, {
    //     view: 'services'
    //   })
    // case SET_VIEW_PROJECTS:
    //   return objectAssign({}, state, {
    //     view: 'projects'
    //   })
    // case SET_VIEW_ABOUT_US:
    //   return objectAssign({}, state, {
    //     view: 'about us'
    //   })
    // case SET_VIEW_CONTACT:
    //   return objectAssign({}, state, {
    //     view: 'contact'
    //   })
    default:
      return state
  }
}
