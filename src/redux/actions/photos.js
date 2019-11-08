import {
  RECEIVE_ALBUM_PHOTOS,
  RECEIVE_PHOTOS,
  REQUEST_ALBUM_PHOTOS,
  REQUEST_PHOTOS
} from "./types";
import api from "../../data/api";

function requestPhotos() {
  return {
    type: REQUEST_PHOTOS
  };
}

function receivePhotos(response) {
  return {
    type: RECEIVE_PHOTOS,
    photos: response.data,
    receivedAt: Date.now()
  };
}

function fetchPhotos() {
  return dispatch => {
    dispatch(requestPhotos());
    return api.photos.list().then(response => {
      dispatch(receivePhotos(response));
    });
  };
}

function shouldFetchPhotos(state) {
  const photos = state.photos.photos;
  return photos.length === 0;
}

export function fetchPhotosIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPhotos(getState())) {
      return dispatch(fetchPhotos());
    } else {
      return Promise.resolve();
    }
  };
}

function requestAlbumPhotos(id) {
  return {
    type: REQUEST_ALBUM_PHOTOS,
    userId: id
  };
}

function receiveAlbumPhotos(response) {
  return {
    type: RECEIVE_ALBUM_PHOTOS,
    photos: response.data,
    receivedAt: Date.now()
  };
}

function fetchAlbumPhotos(id) {
  return dispatch => {
    dispatch(requestAlbumPhotos(id));
    return api.photos.ofAlbum(id).then(response => {
      dispatch(receiveAlbumPhotos(response));
    });
  };
}

function shouldFetchAlbumPhotos(state) {
  const albumPhotos = state.album.photos;
  return albumPhotos.length === 0;
}

export function fetchAlbumPhotosIfNeeded(userId) {
  return (dispatch, getState) => {
    if (shouldFetchAlbumPhotos(getState())) {
      return dispatch(fetchAlbumPhotos(userId));
    } else {
      return Promise.resolve();
    }
  };
}
