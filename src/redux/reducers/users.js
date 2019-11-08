import { RECEIVE_USERS, REQUEST_USERS } from "../actions/types";

const initialState = {
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return { ...state, isFetching: true };
    case RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
        users: action.users,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
