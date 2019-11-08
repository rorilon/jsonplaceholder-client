import { VIEW_ALBUM } from "../actions/types";
import { CLEAR_ALBUM_ID } from "../actions/types";
import { REQUEST_ALBUM_PHOTOS } from "../actions/types";
import { RECEIVE_ALBUM_PHOTOS } from "../actions/types";

const initialState = {
  albumId: null,
  photos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIEW_ALBUM:
      const { id } = action.payload;
      return { ...state, albumId: id };
    case CLEAR_ALBUM_ID:
      return { ...state, albumId: null };
    case REQUEST_ALBUM_PHOTOS:
      return { ...state, isFetchingPhotos: true };
    case RECEIVE_ALBUM_PHOTOS:
      return { ...state, isFetchingPhotos: false, photos: action.photos };
    default:
      return state;
  }
}
