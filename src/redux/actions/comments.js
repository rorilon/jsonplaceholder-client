import {
  RECEIVE_COMMENTS,
  RECEIVE_POST_COMMENTS,
  REQUEST_COMMENTS,
  REQUEST_POST_COMMENTS,
  VIEW_POST
} from "./types";
import api from "../../data/api";

function requestComments() {
  return {
    type: REQUEST_COMMENTS
  };
}

function receiveComments(response) {
  return {
    type: RECEIVE_COMMENTS,
    comments: response.data,
    receivedAt: Date.now()
  };
}

function fetchComments() {
  return dispatch => {
    dispatch(requestComments());
    return api.comments.list().then(response => {
      dispatch(receiveComments(response));
    });
  };
}

function shouldFetchComments(state) {
  const comments = state.comments.comments;
  return comments.length === 0;
}

export function fetchCommentsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchComments(getState())) {
      return dispatch(fetchComments());
    } else {
      return Promise.resolve();
    }
  };
}
function requestPostComments(id) {
  return {
    type: REQUEST_POST_COMMENTS,
    postId: id
  };
}

function receivePostComments(response) {
  return {
    type: RECEIVE_POST_COMMENTS,
    comments: response.data,
    receivedAt: Date.now()
  };
}

function fetchPostComments(id) {
  return dispatch => {
    dispatch(requestPostComments(id));
    return api.comments.ofPost(id).then(response => {
      dispatch(receivePostComments(response));
    });
  };
}

function shouldFetchPostComments(state) {
  const comments = state.post.comments;
  return comments.length === 0;
}

export function fetchPostCommentsIfNeeded(postId) {
  return (dispatch, getState) => {
    if (shouldFetchPostComments(getState(), postId)) {
      return dispatch(fetchPostComments(postId));
    } else {
      return Promise.resolve();
    }
  };
}
export function getPostComments(id) {
  return {
    type: VIEW_POST,
    payload: { id }
  };
}
