console.log("something");
var request = require("request");
var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: "API key that you get from Flickr",
      secret: "API key secret that you get from Flickr"
    };

Flickr.tokenOnly(flickrOptions, function(error, flickr) {
  // we can now use "flickr" as our API object,
  // but we can only call public methods and access public data
});
console.log("flickr");
