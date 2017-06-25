import React, { Component } from 'react'
import Slider from 'react-slick'

import chop1 from '../static/services/chop1.jpg'
import chop2 from '../static/services/chop2.jpg'
import storage1 from '../static/services/storage1.jpg'
import storage2 from '../static/services/storage2.jpg'
import shop1 from '../static/services/shop1.jpg'
import trunkfloor1 from '../static/services/trunkfloor1.jpg'
import trunkfloor2 from '../static/services/trunkfloor2.jpg'
import trunkfloor3 from '../static/services/trunkfloor3.jpg'
import cleaning1 from '../static/services/cleaning1.jpg'
import roof1 from '../static/services/roof1.jpg'
import roof2 from '../static/services/roof2.jpg'
import floor1 from '../static/services/floor1.jpg'
import floor2 from '../static/services/floor2.jpg'
import floor3 from '../static/services/floor3.jpg'
import rust1 from '../static/services/rust1.jpg'
import rust2 from '../static/services/rust2.jpg'
import stripe1 from '../static/services/stripe1.jpg'
import suspension1 from '../static/services/suspension1.jpg'
import subframe1 from '../static/services/subframe1.jpg'

export default class ServicesCarousel extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    }
    return (
      <Slider {...settings}>
        <div><img src={chop1} /><div className="caption">1930 Model A 5&quot; Roof Chop</div></div>
        <div><img src={chop2} /><div className="caption">1930 Model A 5&quot; Roof Chop</div></div>
        <div><img src={storage1} /><div className="caption">Rear Storage Building</div></div>
        <div><img src={storage2} /><div className="caption">Rear Storage Building</div></div>
        <div><img src={shop1} /><div className="caption">Main Shop</div></div>
        <div><img src={trunkfloor1} /><div className="caption">Camaro floor replacement</div></div>
        <div><img src={trunkfloor2} /><div className="caption">Camaro Trunk Floor Removed for Replacment</div></div>
        <div><img src={trunkfloor3} /><div className="caption"> Camaro Trunk Floor Installed</div></div>
        <div><img src={cleaning1} /><div className="caption">Cleaning after Media Blasting</div></div>
        <div><img src={roof1} /><div className="caption">69 Camaro Roof and Quarter Panel Replacment</div></div>
        <div><img src={roof2} /><div className="caption">69 Camaro Roof and Quarter panels Installed</div></div>
        <div><img src={floor1} /><div className="caption">Camaro Front Floor Installed</div></div>
        <div><img src={floor2} /><div className="caption">Camaro Front Floor Installed</div></div>
        <div><img src={floor3} /><div className="caption">Camaro Floor Painted the correct shade of Black</div></div>
        <div><img src={rust1} /><div className="caption">Rust Repairs</div></div>
        <div><img src={rust2} /><div className="caption">Roof Rust Repairs</div></div>
        <div><img src={stripe1} /><div className="caption">Jerry MacNeish of ﻿<a href="http://www.z28camaro.com/">Camaro Hi-Performance﻿</a> stopped in to check the placement of the rear Z28 Stripe before the Paint is applied on Dales's 1969 Z28</div></div>
        <div><img src={suspension1} /><div className="caption">Fatmans Front Suspension on 36 Dodge Frame</div></div>
        <div><img src={subframe1} /><div className="caption"> 1969 Z/28 subframe detailed</div></div>
      </Slider>
    )
  }
}
