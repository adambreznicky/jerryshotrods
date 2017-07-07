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
    setViewServices: () => {
      dispatch(actions.setViewServices())
    },
    setViewProjects: () => {
      dispatch(actions.setViewProjects())
    },
    setViewPhotos: () => {
      dispatch(actions.setViewPhotos())
    },
    setViewAboutUs: () => {
      dispatch(actions.setViewAboutUs())
    },
    setViewContact: () => {
      dispatch(actions.setViewContact())
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
