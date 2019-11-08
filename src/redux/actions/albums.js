import {
  CLEAR_ALBUM_ID,
  RECEIVE_ALBUMS,
  RECEIVE_USER_ALBUMS,
  REQUEST_ALBUMS,
  REQUEST_USER_ALBUMS,
  VIEW_ALBUM
} from "./types";
import api from "../../data/api";

function requestAlbums() {
  return {
    type: REQUEST_ALBUMS
  };
}

function receiveAlbums(response) {
  return {
    type: RECEIVE_ALBUMS,
    albums: response.data,
    receivedAt: Date.now()
  };
}

function fetchAlbums() {
  return dispatch => {
    dispatch(requestAlbums());
    return api.albums.list().then(response => {
      dispatch(receiveAlbums(response));
    });
  };
}

function shouldFetchAlbums(state) {
  const albums = state.albums.albums;
  return albums.length === 0;
}

export function fetchAlbumsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchAlbums(getState())) {
      return dispatch(fetchAlbums());
    } else {
      return Promise.resolve();
    }
  };
}

function requestUserAlbums(id) {
  return {
    type: REQUEST_USER_ALBUMS,
    userId: id
  };
}

function receiveUserAlbums(response) {
  return {
    type: RECEIVE_USER_ALBUMS,
    albums: response.data,
    receivedAt: Date.now()
  };
}

function fetchUserAlbums(id) {
  return dispatch => {
    dispatch(requestUserAlbums(id));
    return api.albums.ofUser(id).then(response => {
      dispatch(receiveUserAlbums(response));
    });
  };
}

function shouldFetchUserAlbums(state) {
  const userAlbums = state.user.albums;
  if (userAlbums.length === 0) {
    return true;
  } else {
    return false;
  }
}

export function fetchUserAlbumIfNeeded(userId) {
  return (dispatch, getState) => {
    if (shouldFetchUserAlbums(getState())) {
      return dispatch(fetchUserAlbums(userId));
    } else {
      return Promise.resolve();
    }
  };
}

export function setAlbumId(id) {
  return {
    type: VIEW_ALBUM,
    payload: { id }
  };
}

export function clearAlbumId() {
  return {
    type: CLEAR_ALBUM_ID
  };
}
