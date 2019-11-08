import { RECEIVE_POSTS, REQUEST_POSTS } from "../actions/types";

const initialState = {
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isFetching: true };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
