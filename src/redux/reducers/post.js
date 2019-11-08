import {
  CLEAR_POST_ID,
  VIEW_POST,
  REQUEST_POST_COMMENTS,
  RECEIVE_POST_COMMENTS
} from "../actions/types";

const initialState = {
  postId: null,
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIEW_POST:
      const { id } = action.payload;
      return { ...state, postId: id };
    case CLEAR_POST_ID:
      return { ...state, postId: null, comments: [] };
    case REQUEST_POST_COMMENTS:
      return { ...state, isFetchingComments: true };
    case RECEIVE_POST_COMMENTS:
      return { ...state, isFetchingComments: false, comments: action.comments };
    default:
      return state;
  }
}
