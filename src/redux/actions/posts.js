import {
  CLEAR_POST_ID,
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  REQUEST_POSTS,
  REQUEST_USER_POSTS
} from "./types";
import api from "../../data/api";

function requestPosts() {
  return {
    type: REQUEST_POSTS
  };
}

function receivePosts(response) {
  return {
    type: RECEIVE_POSTS,
    posts: response.data,
    receivedAt: Date.now()
  };
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return api.posts.list().then(response => {
      dispatch(receivePosts(response));
    });
  };
}

function shouldFetchPosts(state) {
  const posts = state.posts.posts;
  return posts.length === 0;
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    } else {
      return Promise.resolve();
    }
  };
}

export function clearPostId() {
  return {
    type: CLEAR_POST_ID
  };
}

function requestUserPosts(id) {
  return {
    type: REQUEST_USER_POSTS,
    userId: id
  };
}

function receiveUserPosts(response) {
  return {
    type: RECEIVE_USER_POSTS,
    posts: response.data,
    receivedAt: Date.now()
  };
}

function fetchUserPosts(id) {
  return dispatch => {
    dispatch(requestUserPosts(id));
    return api.posts.ofUser(id).then(response => {
      dispatch(receiveUserPosts(response));
    });
  };
}

function shouldFetchUserPosts(state) {
  const userPosts = state.user.posts;
  return userPosts.length === 0;
}

export function fetchUserPostsIfNeeded(userId) {
  return (dispatch, getState) => {
    if (shouldFetchUserPosts(getState())) {
      return dispatch(fetchUserPosts(userId));
    } else {
      return Promise.resolve();
    }
  };
}
