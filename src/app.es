import secrets from "./secrets/secrets"
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
  flickr.get("photosets.getList", {"user_id":secrets.nsid}, function(err, result){
      if (err) return console.error(err)
      console.log(result)
      const photosets = result.photosets.photoset
      $.each(photosets, function (index, value) {
        console.log(value)
      })
      //http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
      // getPhotos(nsid)
  });
}

export default {
  getFlickr()
}
