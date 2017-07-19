import React, { Component } from 'react'
import { Row, Column, Icon } from 'react-foundation'
import secrets from "../secrets/secrets"
import Flickr from "node-flickr"

const keys = {"api_key": secrets.flickrkey}
const flickr = new Flickr(keys)

export default class PhotosView extends Component {
  propTypes: {
    browser: PropTypes.object.isRequired,
    photos: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      title: "",
      total: "",
      pics: ""
    }
  }

  compare(a,b) {
    if (a.date_update < b.date_update)
      return -1;
    if (a.date_update > b.date_update)
      return 1;
    return 0;
  }

  getPics(psid) {
    flickr.get("photosets.getPhotos", {"photoset_id":psid,"user_id":secrets.nsid}, function(err, result){
        if (err) return console.error(err)
        console.log(result)
        this.setState({
          title: result.photoset.title,
          total: result.photoset.total,
          pics: result.photoset.photo
        })

    }.bind(this));
  }

  resetPhotosets() {
    this.setState({
      title: "",
      total: "",
      pics: ""
    })
  }

  render() {
    let photosets
    let guide
    if (this.state.pics === "") {
      guide = <p>Choose a project to view the build photos...</p>
      const ordered = this.props.photos.photosets.sort(this.compare)
      photosets = ordered.map(function(p, i) {
        // http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
        const url = "http://farm"+p.farm+".staticflickr.com/"+p.server+"/"+p.primary+"_"+p.secret+".jpg"
        return <div key={p.id}>
          <Row className="display">
            <Column large={12}>
              <div className="photoset" onClick={() => this.getPics(p.id)}>
                <img src={url} alt={p.title._content} />
                <h5>{p.title._content}</h5>
              </div>
            </Column>
          </Row>
        </div>
      }.bind(this))
    }
    else {
      //order by updated date?
      //sorting button?
      //on click each photo open in carousel/model

      const pics = this.state.pics.map(function(p, i) {
        const url = "http://farm"+p.farm+".staticflickr.com/"+p.server+"/"+p.id+"_"+p.secret+".jpg"
        return <div className="imgContainer" key={p.id} ><img src={url} /></div>
      })
      guide = ""
      photosets = <div>
        <div className="back" onClick={() => this.resetPhotosets()}><Icon name="fi-arrow-left"/><span> Back</span></div>
        <div className="title">
          <h5>{this.state.title}</h5>
          <h6>{this.state.total} Photos</h6>
        </div>
        {pics}
      </div>
    }

    return (
      <div className="photosView">
        {guide}
        {photosets}
      </div>
    )
  }
}
