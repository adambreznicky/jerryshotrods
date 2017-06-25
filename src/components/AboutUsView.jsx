import React, { Component } from 'react'
import { Row, Column } from 'react-foundation'
import frame1 from '../static/about/frame1.jpg'
import sedan1 from '../static/about/sedan1.jpg'

export default class AboutUsView extends Component {
  propTypes: {
    browser: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="aboutUsView">
        <Row className="display">
          <Column large={6}>
            <img src={frame1} />
            <h4>Jerry's Story</h4>
            <p>
              Working at the same auto dealership for 28 years with a ASE Master Technician Certificate.
              Always driving a Muscle Car or a Street Rod of which I built or restored.
              Several of them had been featured in various auto magazines.
              I began to have other people notice the quality of the work.
              They began to ask me to proform work on their cars.
              Working full time and doing side work soon became a little too much to handle.
              I stopped working at the dealers and started on my own in 2004.
            </p>
          </Column>
          <Column large={6}>
            <h4>Our Business</h4>
            <p>
              We do work on all makes and models<br />
              Mopar / Chevy / Ford / American Motors / Cars / Trucks<br />
            You name it - we can do it!
            </p>
            <img src={sedan1} />
            <h4>Come on in...</h4>
            <p>
              Let us get your ride where you want it to be.
              Then go out & share the excitement!
            </p>
          </Column>
        </Row>
      </div>
    )
  }
}
