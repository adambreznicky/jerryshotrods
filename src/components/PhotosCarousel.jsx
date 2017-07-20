import React, { Component } from 'react'
import Slider from 'react-slick'

export default class PhotosCarousel extends Component {
  propTypes: {
    clicked: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    start: PropType.integer.isRequired
  }

  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      adaptiveHeight: true,
      initialSlide: this.props.start
    }

    const pics = this.props.photos.map(function(p, i) {
      const url = "http://farm"+p.farm+".staticflickr.com/"+p.server+"/"+p.id+"_"+p.secret+"_b.jpg"
      return <div key={p.id}><img src={url}/></div>
    })
    //<div><img src="" /><div className="caption">1930 Model A 5&quot; Roof Chop</div></div>
    return (
      <Slider {...settings}>
        {pics}
      </Slider>
    )
  }
}
