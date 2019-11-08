import { RECEIVE_COMMENTS, REQUEST_COMMENTS } from "../actions/types";

const initialState = {
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return { ...state, isFetching: true };
    case RECEIVE_COMMENTS:
      return {
        ...state,
        isFetching: false,
        comments: action.comments,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
