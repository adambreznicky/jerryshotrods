import React, { Component } from 'react'
import Slider from 'react-slick'

export default class PhotosCarousel extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    }
    return (
      <Slider {...settings}>
        <div><img src="" /><div className="caption">1930 Model A 5&quot; Roof Chop</div></div>
      </Slider>
    )
  }
}
