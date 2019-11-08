import {
  RECEIVE_TODOS,
  RECEIVE_USER_TODOS,
  REQUEST_TODOS,
  REQUEST_USER_TODOS
} from "./types";
import api from "../../data/api";

function requestTodos() {
  return {
    type: REQUEST_TODOS
  };
}

function receiveTodos(response) {
  return {
    type: RECEIVE_TODOS,
    todos: response.data,
    receivedAt: Date.now()
  };
}

function fetchTodos() {
  return dispatch => {
    dispatch(requestTodos());
    return api.todos.list().then(response => {
      dispatch(receiveTodos(response));
    });
  };
}

function shouldFetchTodos(state) {
  const todos = state.todos.todos;
  return todos.length === 0;
}

export function fetchTodosIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchTodos(getState())) {
      return dispatch(fetchTodos());
    } else {
      return Promise.resolve();
    }
  };
}

function requestUserTodos(id) {
  return {
    type: REQUEST_USER_TODOS,
    userId: id
  };
}

function receiveUserTodos(response) {
  return {
    type: RECEIVE_USER_TODOS,
    todos: response.data,
    receivedAt: Date.now()
  };
}

function fetchUserTodos(id) {
  return dispatch => {
    dispatch(requestUserTodos(id));
    return api.todos.ofUser(id).then(response => {
      dispatch(receiveUserTodos(response));
    });
  };
}

function shouldFetchUserTodos(state) {
  const userTodos = state.user.todos;
  return userTodos.length === 0;
}

export function fetchUserTodosIfNeeded(userId) {
  return (dispatch, getState) => {
    if (shouldFetchUserTodos(getState())) {
      return dispatch(fetchUserTodos(userId));
    } else {
      return Promise.resolve();
    }
  };
}
