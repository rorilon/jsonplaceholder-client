import {
  CLEAR_USER_ID,
  RECEIVE_USERS,
  REQUEST_USERS,
  VIEW_USER
} from "./types";
import api from "../../data/api";

function requestUsers() {
  return {
    type: REQUEST_USERS
  };
}

function receiveUsers(response) {
  return {
    type: RECEIVE_USERS,
    users: response.data,
    receivedAt: Date.now()
  };
}

function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());
    return api.users.list().then(response => {
      dispatch(receiveUsers(response));
    });
  };
}

function shouldFetchUsers(state) {
  const users = state.users.users;
  return users.length === 0;
}

export function fetchUsersIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchUsers(getState())) {
      return dispatch(fetchUsers());
    } else {
      return Promise.resolve();
    }
  };
}
export function setUserId(id) {
  return {
    type: VIEW_USER,
    payload: { id }
  };
}
export function clearUserId() {
  return {
    type: CLEAR_USER_ID
  };
}
