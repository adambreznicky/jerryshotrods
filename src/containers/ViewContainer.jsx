import { connect } from 'react-redux'

import * as actions from '../actions/viewActions'
import View from '../components/View'

const mapStateToProps = (state) => {
  return {
    view: state.view,
    browser: state.browser,
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setViewContact: () => {
      dispatch(actions.setViewContact())
    }
  }
}

const ViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(View)

export default ViewContainer
