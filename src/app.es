import secrets from "./secrets/secrets.es"
// import Flickr from "flickr-sdk"
import Flickr from "node-flickr"

const keys = {"api_key": secrets.flickrkey}
const flickr = new Flickr(keys)


function getPhotos (nsid) {
  flickr.get("people.getPhotos", {"user_id":nsid}, function(err, result){
      if (err) return console.error(err)
      console.log(result)
  });
}


function getFlickr () {
  console.log(flickr)
  flickr.get("photosets.getList", {"user_id":secrets.nsid}, function(err, result){
      if (err) return console.error(err)
      console.log(result)
      // getPhotos(nsid)
  });
}

window.getFlickr = getFlickr
