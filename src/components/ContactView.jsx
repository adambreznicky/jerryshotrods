import React, { Component } from 'react'
import { Callout, Colors, Row, Column } from 'react-foundation'
import shop from '../static/contact/shop.jpg'

export default class ContactView extends Component {
  propTypes: {
    browser: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="contactView">
        <Row className="display">
          <Column large={6}>
            <h5>Contact Us</h5>
            <ul>
              <li>Tell us about your project.</li>
              <li>Let us know what you think of our site.</li>
              <li>Tell us you want Jerry's Hot Rods to put your ride over the top.</li>
            </ul>
            <h6>We want to hear from you!</h6>
            <img src={shop} />
            <p>
              Located in Hampstead, Maryland / Performing work for car lovers nationwide
              <br />
              <b>
                Lets get your car in the pictures!
              </b>
            </p>
          </Column>
          <Column large={6}>
            <form action="/action_page.php">
              First Name:<br/>
              <input type="text" name="firstname" required />
              <br/>
              Last Name:<br/>
              <input type="text" name="lastname" required />
              Company:<br/>
              <input type="text" name="company" />
              Phone:<br/>
              <input type="text" name="phone" required />
              Email:<br/>
              <input type="text" name="email" />
              Message:<br/>
              <input type="text" name="message" required />
              <br/><br/>
              <input type="submit" value="Submit" />
            </form>
          </Column>
        </Row>
      </div>
    )
  }
}
