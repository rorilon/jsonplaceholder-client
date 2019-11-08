import { RECEIVE_ALBUMS, REQUEST_ALBUMS } from "../actions/types";

const initialState = {
  albums: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALBUMS:
      return { ...state, isFetching: true };
    case RECEIVE_ALBUMS:
      return {
        ...state,
        isFetching: false,
        albums: action.albums,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
