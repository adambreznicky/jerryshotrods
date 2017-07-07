import React, { Component } from 'react'
import { Callout, Colors, Row, Column } from 'react-foundation'

export default class PhotosView extends Component {
  propTypes: {
    browser: PropTypes.object.isRequired,
    photos: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <div className="photosView">
        photos
        {this.props.photos.photos}
      </div>
    )
  }
}
