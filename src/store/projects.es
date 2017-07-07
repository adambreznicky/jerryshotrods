import objectAssign from 'object-assign'
import csv from '../static/projects/projects.csv'

const initialState = {
  finishedProjects: csv
}

export default function projects(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
