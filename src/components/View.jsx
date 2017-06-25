import React, { Component } from 'react'
import { Breadcrumbs, BreadcrumbItem, Inline } from 'react-foundation'
import HomeView from './HomeView'
import ServicesView from './ServicesView'
import ProjectsView from './ProjectsView'
import AboutUsView from './AboutUsView'

export default class View extends Component {
  propTypes: {
    view: PropTypes.object.isRequired,
    browser: PropTypes.object.isRequired,
    setViewContact: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  switchView () {
    const { view } = this.props
    switch (view.view) {
      case 'services':
        return (
          <ServicesView browser={this.props.browser}/>
        )
      case 'projects':
        return (
          <ProjectsView browser={this.props.browser}/>
        )
      case 'about us':
        return (
          <AboutUsView browser={this.props.browser}/>
        )
      default:
        return (
          <HomeView browser={this.props.browser} contactForm={this.props.setViewContact}/>
        )
    }
  }

  render() {
    let content = this.switchView()

    return (
      <div className="viewContent">
        {content}
      </div>
    )
  }
}
