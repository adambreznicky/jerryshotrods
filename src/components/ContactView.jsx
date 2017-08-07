import React, { Component } from 'react'
import { Callout, Colors, Row, Column, Icon } from 'react-foundation'
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
                Lets get <i>your</i> car in the pictures!
              </b>
            </p>
          </Column>
          <Column large={6}>
            <form action="https://formspree.io/smudgeservices@gmail.com" method="POST">
              <label>* First Name:<input type="text" name="firstname" required /></label>
              <label>* Last Name:<input type="text" name="lastname" required /></label>
              <label>Company:<input type="text" name="company" /></label>
              <label>Phone:<input type="text" name="phone" /></label>
              <label>* Email:<input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required /></label>
              <label>* Message:<textarea type="text" name="message" rows="15" required /></label>
              <button className="submitButton" type="submit" value="Submit">
                <Icon name="fi-mail"/>
                <span> Submit</span>
              </button>
              <button className="submitButton" type="reset">
                <Icon name="fi-refresh"/>
                <span> Reset Form</span>
              </button>
            </form>
          </Column>
        </Row>
      </div>
    )
  }
}
