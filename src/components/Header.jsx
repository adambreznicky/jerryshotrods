import React, { Component } from 'react'
import { Breadcrumbs, BreadcrumbItem, Inline, Row, Column } from 'react-foundation'
import Logo from '../static/favicon.png'

export default class Header extends Component {
  propTypes: {
    view: PropTypes.object.isRequired,
    browser: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        <Row className="display">
          <Column small={10} centerOnLarge centerOnSmall>
            <div className="title">
              <img src={Logo} alt="Jerry's Hot Rods Logo" id="titleLogo"/>
              <h2 id="title">Jerry's Hot Rods</h2>
            </div>
          </Column>
        </Row>
        <Row className="display">
          <Column small={10} centerOnLarge centerOnSmall>
            <div className="breadcrumbs">
              <nav aria-label="You are here:" role="navigation" id="header-nav">
                <Breadcrumbs>
                  <BreadcrumbItem><a onClick={this.props.setViewHome}>Home</a></BreadcrumbItem>
                  <BreadcrumbItem><a onClick={this.props.setViewServices}>Services</a></BreadcrumbItem>
                  <BreadcrumbItem><a onClick={this.props.setViewProjects}>Projects</a></BreadcrumbItem>
                  <BreadcrumbItem><a onClick={this.props.setViewAboutUs}>About Us</a></BreadcrumbItem>
                  <BreadcrumbItem><a onClick={this.props.setViewContact}>Contact</a></BreadcrumbItem>
                </Breadcrumbs>
              </nav>
            </div>
          </Column>
        </Row>
      </div>
    )
  }
}
