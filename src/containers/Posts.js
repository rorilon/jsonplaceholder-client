import { connect } from "react-redux";
import React from "react";
import Post from "../components/Post";
import postModel from "../models/post";
import Table from "react-bootstrap/Table";
import {
  getPagination,
  getPosts,
  getSelectedTab,
  isFetchingPosts
} from "../redux/selectors";
import {
  fetchPostCommentsIfNeeded,
  getPostComments
} from "../redux/actions/comments";
import { selectPage } from "../redux/actions/pagination";
import { dataForPage } from "../data/pagination";
import PaginationComponent from "../components/Pagination";
import Loading from "../components/Loading";

const Posts = ({
  isFetching,
  posts,
  selectPage,
  pagination,
  paginationMode,
  getPostComments,
  fetchPostCommentsIfNeeded
}) => (
  <>
    {isFetching ? (
      <Loading />
    ) : (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              dataForPage(posts, pagination.page, pagination.perPage).map(
                post => (
                  <Post
                    post={new postModel(post)}
                    handleClick={() => {
                      getPostComments(post.id);
                      fetchPostCommentsIfNeeded(post.id);
                    }}
                  />
                )
              )}
          </tbody>
        </Table>
        {posts && (
          <PaginationComponent
            paginationMode={paginationMode}
            content={posts}
            pagination={pagination}
            selectPage={selectPage}
          />
        )}
      </div>
    )}
  </>
);

const mapStateToProps = state => {
  const posts = getPosts(state);
  const isFetching = isFetchingPosts(state);
  const paginationMode = getSelectedTab(state) === "users" ? "posts" : null;
  const pagination = getPagination(state, paginationMode);
  return { posts, pagination, paginationMode, isFetching };
};

export default connect(
  mapStateToProps,
  {
    getPostComments,
    fetchPostCommentsIfNeeded,
    selectPage
  }
)(Posts);
