import { RECEIVE_PHOTOS, REQUEST_PHOTOS } from "../actions/types";

const initialState = {
  photos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return { ...state, isFetching: true };
    case RECEIVE_PHOTOS:
      return {
        ...state,
        isFetching: false,
        photos: action.photos,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
