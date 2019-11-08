import { REQUEST_TODOS, RECEIVE_TODOS } from "../actions/types";

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TODOS:
      return { ...state, isFetching: true };
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        todos: action.todos,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
