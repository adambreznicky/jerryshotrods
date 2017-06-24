import React, { Component } from 'react'
import { Breadcrumbs, BreadcrumbItem, Inline } from 'react-foundation'
import HomeView from './HomeView'

export default class View extends Component {
  propTypes: {
    view: PropTypes.object.isRequired,
    browser: PropTypes.object.isRequired,
    setViewContact: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.switchView(this.props.view)
  }

  switchView () {
    const { view } = this.props
    switch (view.view) {
      // case 'ahps-flood':
      //   return (
      //     <FloodGaugePopup {...data}
      //     updatePopup={() => {this.leafletPopup.update()}}
      //     leafletMap={this.props.leafletMap}/>
      //   )
      // case 'reservoir-conditions':
      //   return (
      //     <LakeConditionsPopup {...data}
      //     updatePopup={() => {this.leafletPopup.update()}}
      //     leafletMap={this.props.leafletMap}/>
      //   )
      // case 'flood-alerts':
      //   return (
      //     <FloodAlertsPopup {...data}
      //     updatePopup={() => {this.updatePopupSize()}}
      //     leafletMap={this.props.leafletMap}/>
      //   )
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
