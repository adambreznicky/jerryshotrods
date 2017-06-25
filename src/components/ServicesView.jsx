import React, { Component } from 'react'
import { Row, Column } from 'react-foundation'
import ServicesCarousel from './ServicesCarousel'

export default class ServicesView extends Component {
  propTypes: {
    browser: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="servicesView">
        <Row className="display">
          <Column small={10} centerOnLarge centerOnSmall>
            <h2>No job too big or too small!</h2>
            <h5>Chopping Roofs / Weld in Independent Suspensions / Installing Late Model Fuel Injection Systems / Full Rotisserie Restorations / Custom Body Modifications</h5>
            <h3>What do you need?</h3>
            <p>
              Here at Jerry's Hot Rods, we pride ourselves on the quality of work we consistently produce.
              Every project is unqiue to the starting condition of the vehicle and the final product the client desires it to be.
              Whether the project requires detailed body work, custom fabrication and modernization, mechanical tuning, or original restoration we will always perform the job with attention, quality, and honesty.
              Below are some examples of work from past projects.
            </p>
          </Column>
        </Row>
        <Row className="display">
          <Column small={10} centerOnLarge centerOnSmall>
            <ServicesCarousel />
          </Column>
        </Row>
      </div>
    )
  }
}
