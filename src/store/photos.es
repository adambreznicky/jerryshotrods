import objectAssign from 'object-assign'
import { store } from './index'
import { setPhotosets } from '../actions/photoActions'
import secrets from "../secrets/secrets"
import Flickr from "node-flickr"

const keys = {"api_key": secrets.flickrkey}
const flickr = new Flickr(keys)

import {
  SET_PHOTOSETS
} from './actionTypes'

const initialState = {}

flickr.get("photosets.getList", {"user_id":secrets.nsid}, function(err, result){
    if (err) return console.error(err)
    const photosets = result.photosets.photoset
    store.dispatch(setPhotosets(photosets))
});

export default function view(state = initialState, action) {
  switch (action.type) {
    case SET_PHOTOSETS:
      return objectAssign({}, state, {
        photosets: action.ps
      })
    // case SET_VIEW_SERVICES:
    //   return objectAssign({}, state, {
    //     view: 'services'
    //   })
    // case SET_VIEW_PROJECTS:
    //   return objectAssign({}, state, {
    //     view: 'projects'
    //   })
    // case SET_VIEW_ABOUT_US:
    //   return objectAssign({}, state, {
    //     view: 'about us'
    //   })
    // case SET_VIEW_CONTACT:
    //   return objectAssign({}, state, {
    //     view: 'contact'
    //   })
    default:
      return state
  }
}
