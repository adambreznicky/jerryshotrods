import { connect } from 'react-redux'

import * as actions from '../actions/viewActions'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    view: state.view,
    browser: state.browser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setViewHome: () => {
      dispatch(actions.setViewHome())
    },
    setViewProjects: () => {
      dispatch(actions.setViewProjects())
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
