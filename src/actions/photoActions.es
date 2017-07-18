import * as types from '../store/actionTypes'

export const setPhotosets = (ps) => {
  return {
    type: types.SET_PHOTOSETS,
    ps
  }
}
