import React, { Component } from 'react'
import { Row, Column } from 'react-foundation'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Row className="display">
          <Column large={6}>
            <div className="copyright">
              <p>
                Copyright 2017 Jerry's Hot Rods. All rights reserved.<br />
              Partnered with <a href="http://lucas-restorations.com/">Lucas Restorations</a>
              &nbsp;and&nbsp;﻿<a href="http://www.z28camaro.com/">Camaro Hi-Performance﻿</a>
              </p>
            </div>
          </Column>
          <Column large={6}>
            <div className="contactInfo">
              <address>
                Hampstead, MD 21074<br />
                <a href="tel:4102188806">410.218.8806</a>&nbsp;
                <a href="mailto:jerry@jerryshotrods.com">jerry@jerryshotrods.com</a>
              </address>
            </div>
          </Column>
        </Row>
      </div>
    )
  }
}
