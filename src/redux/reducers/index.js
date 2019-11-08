import { combineReducers } from "redux";
import todos from "./todos";
import pagination from "./pagination";
import posts from "./posts";
import users from "./users";
import comments from "./comments";
import post from "./post";
import user from "./user";
import albums from "./albums";
import photos from "./photos";
import album from "./album";
import tabs from "./tabs";

export default combineReducers({
  todos,
  pagination,
  posts,
  users,
  comments,
  post,
  user,
  albums,
  photos,
  album,
  tabs
});
