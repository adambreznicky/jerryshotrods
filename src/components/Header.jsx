import React, { Component } from 'react'
import { Breadcrumbs, BreadcrumbItem, Inline, Row, Column } from 'react-foundation'
import Logo from '../static/favicon.png'
import MenuIcon from '../static/menu.png'

export default class Header extends Component {
  propTypes: {
    view: PropTypes.object.isRequired,
    browser: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: "none"
    }
  }

  toggle() {
    if (this.state.isMenuOpen == "block") {
      this.setState({ isMenuOpen: "none" })
    }
    else {
      this.setState({ isMenuOpen: "block" })
    }
  }

  close() {
    this.setState({ isMenuOpen: "none" });
  }

  render() {
    let content = (
      <div>
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
                  <BreadcrumbItem><a onClick={this.props.setViewProjects}>Project Gallery</a></BreadcrumbItem>
                  <BreadcrumbItem><a onClick={this.props.setViewPhotos}>Photo Gallery</a></BreadcrumbItem>
                  <BreadcrumbItem><a onClick={this.props.setViewAboutUs}>About Us</a></BreadcrumbItem>
                  <BreadcrumbItem><a onClick={this.props.setViewContact}>Contact</a></BreadcrumbItem>
                </Breadcrumbs>
              </nav>
            </div>
          </Column>
        </Row>
      </div>
    )

    if (this.props.browser.mediaType == "extraSmall") {

      content = (
        <div>
          <Row className="display">
            <Column small={2}>
              <div className="smallMenu" onClick={this.toggle.bind(this)}><img src={MenuIcon} alt="Menu" id="smallMenu"/></div>
              <div style={{display:this.state.isMenuOpen}} className="smallMenuDropdown">
                <a onClick={() => {this.props.setViewHome(); this.close();}}>Home</a><br />
                <a onClick={() => {this.props.setViewServices(); this.close();}}>Services</a><br />
                <a onClick={() => {this.props.setViewProjects(); this.close();}}>Project Gallery</a><br />
                <a onClick={() => {this.props.setViewPhotos(); this.close();}}>Photo Gallery</a><br />
                <a onClick={() => {this.props.setViewAboutUs(); this.close();}}>About Us</a><br />
                <a onClick={() => {this.props.setViewContact(); this.close();}}>Contact</a>
              </div>
            </Column>
            <Column small={8}>
              <div className="smallTitle">
                <h2 id="smallTitle">Jerry's Hot Rods</h2>
              </div>
            </Column>
            <Column small={2}>
              <div className="smallLogo">
                <img src={Logo} alt="Jerry's Hot Rods Logo" id="smallLogo"/>
              </div>
            </Column>
          </Row>
        </div>
      )
    }

    return (
      <div className="header">
        {content}
      </div>
    )
  }
}
