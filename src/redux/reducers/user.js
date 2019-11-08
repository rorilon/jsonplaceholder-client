import {
  CLEAR_USER_ID,
  VIEW_USER,
  REQUEST_USER_ALBUMS,
  RECEIVE_USER_ALBUMS,
  REQUEST_USER_POSTS,
  RECEIVE_USER_POSTS,
  REQUEST_USER_TODOS,
  RECEIVE_USER_TODOS
} from "../actions/types";

const initialState = {
  userId: null,
  albums: [],
  posts: [],
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIEW_USER:
      const { id } = action.payload;
      return { ...state, userId: id };
    case CLEAR_USER_ID:
      return { ...state, userId: null, albums: [], posts: [], todos: [] };
    case REQUEST_USER_ALBUMS:
      return { ...state, isFetchingAlbums: true };
    case RECEIVE_USER_ALBUMS:
      return { ...state, isFetchingAlbums: false, albums: action.albums };
    case REQUEST_USER_POSTS:
      return { ...state, isFetchingPosts: true };
    case RECEIVE_USER_POSTS:
      return { ...state, isFetchingPosts: false, posts: action.posts };
    case REQUEST_USER_TODOS:
      return { ...state, isFetchingTodos: true };
    case RECEIVE_USER_TODOS:
      return { ...state, isFetchingTodos: false, todos: action.todos };
    default:
      return state;
  }
}
