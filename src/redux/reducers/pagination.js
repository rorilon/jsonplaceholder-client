import { SELECT_PAGE, SELECT_PER_PAGE } from "../actions/types";

const defaultPerPage = 10;
const initialState = {
  overview: { page: 1, perPage: defaultPerPage },
  posts: {
    page: 1,
    perPage: defaultPerPage
  },
  todos: {
    page: 1,
    perPage: defaultPerPage
  },
  comments: {
    page: 1,
    perPage: defaultPerPage
  },
  albums: {
    page: 1,
    perPage: defaultPerPage
  },
  photos: {
    page: 1,
    perPage: defaultPerPage
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_PAGE:
      let mode = action.mode;
      if (mode === "comments")
        return { ...state, comments: { ...state.comments, page: action.page } };
      else if (mode === "todos")
        return { ...state, todos: { ...state.todos, page: action.page } };
      else if (mode === "posts")
        return { ...state, posts: { ...state.posts, page: action.page } };
      else if (mode === "albums")
        return { ...state, albums: { ...state.albums, page: action.page } };
      else if (mode === "photos")
        return { ...state, photos: { ...state.photos, page: action.page } };
      else
        return { ...state, overview: { ...state.overview, page: action.page } };
    case SELECT_PER_PAGE:
      let modePerPage = action.mode;
      if (modePerPage === "comments")
        return {
          ...state,
          comments: { ...state.comments, perPage: action.perPage }
        };
      else if (modePerPage === "todos")
        return { ...state, todos: { ...state.todos, perPage: action.perPage } };
      else if (modePerPage === "posts")
        return { ...state, posts: { ...state.posts, perPage: action.perPage } };
      else if (modePerPage === "albums")
        return {
          ...state,
          albums: { ...state.albums, perPage: action.perPage }
        };
      else if (modePerPage === "photos")
        return {
          ...state,
          photos: { ...state.photos, perPage: action.perPage }
        };
      else
        return {
          ...state,
          overview: { ...state.overview, perPage: action.perPage }
        };
    default:
      return state;
  }
}
