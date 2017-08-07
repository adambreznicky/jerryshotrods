import React, { Component } from 'react'
import { Callout, Colors, Row, Column } from 'react-foundation'
import Camaro from '../static/home/camaro_front.jpg'
import Camaro2 from '../static/home/camaro_topdown.jpg'

export default class HomeView extends Component {
  propTypes: {
    browser: PropTypes.object.isRequired,
    contactForm: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="homeView">
        <Row className="display">
          <Column small={10} centerOnLarge centerOnSmall>
            <h4>Muscle Cars / Street Rods / Classics / Customs / Performance Modifications</h4>
            <p>
              Jerry's Hot Rods provides modifications & restorations that can bring your ride to the next level.
              <br />
              Or any level you want it to be!
            </p>
          </Column>
        </Row>
        <Row className="display">
          <Column large={6}>
            <img src={Camaro} alt="Jerry's 68 Camaro" id="camaro"/>
            <p>
              <b>LS1 Powered 68 Camaro RS Convertible</b>
              <br />
              TCI round tube sub frame, Ride Tech 4 link rear, Air Ride Suspension,
              4 Wheel Disk Brakes, Mini Tubbed with 17&quot; Wheels
            </p>
          </Column>
          <Column large={6}>
            <p>
              <b>68 Camaro with custom 1959  Impala interior</b>
              <br />
              Square back front bench seat with NOS cloth
              Complete 1959 Impala Dash with Column Shift
              Vintage Air and Classic Insturments Gauges
              1959 Impala rear seat radio speaker
            </p>
            <img src={Camaro2} alt="68 Camaro Interior" id="camaro2"/>
            <Callout color={Colors.PRIMARY}>
              <h5>Contact Us Today!</h5>
              <p className="text">
                Send us an <a href="mailto:jerry@jerryshotrods.com">email</a> or use
              our <a onClick={this.props.contactForm}>Contact</a> page to
                  tell us what you need.<br />
                <a onClick={this.props.contactForm}>Contact us</a> anytime!
                  We look forward to helping you with your project.
              </p>
            </Callout>
          </Column>
        </Row>

      </div>
    )
  }
}
