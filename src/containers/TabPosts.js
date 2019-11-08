import PostDetailedView from "./PostDetailedView";
import postModel from "../models/post";
import { getPostById } from "../data/helpFunctions";
import Posts from "./Posts";
import React from "react";
import { getPostId, getPosts, getSelectedTab } from "../redux/selectors";
import { clearPostId } from "../redux/actions/posts";
import connect from "react-redux/es/connect/connect";

const TabPosts = ({ posts, postId, clearPostId, selectedTab }) => (
  <div>
    {postId && selectedTab === "posts" ? (
      <PostDetailedView
        handleClosing={() => clearPostId()}
        post={new postModel(getPostById(posts, postId))}
      />
    ) : (
      <Posts />
    )}
  </div>
);
const mapStateToProps = state => {
  const posts = getPosts(state);
  const postId = getPostId(state);
  const selectedTab = getSelectedTab(state);
  return { posts, postId, selectedTab };
};

export default connect(
  mapStateToProps,
  { clearPostId }
)(TabPosts);
