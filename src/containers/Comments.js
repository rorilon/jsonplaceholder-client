import { connect } from "react-redux";
import React from "react";
import Comment from "../components/Comment";
import commentModel from "../models/comment";
import Table from "react-bootstrap/Table";
import {
  getComments,
  getPagination,
  getSelectedTab,
  isFetchingComments
} from "../redux/selectors";
import PaginationComponent from "../components/Pagination";
import { selectPage } from "../redux/actions/pagination";
import { dataForPage } from "../data/pagination";
import Loading from "../components/Loading";

const Comments = ({
  isFetching,
  comments,
  pagination,
  paginationMode,
  selectPage
}) => (
  <>
    {isFetching ? (
      <Loading />
    ) : (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>userName</th>
              <th>e-mail</th>
              <th colSpan="2">comment</th>
            </tr>
          </thead>
          <tbody>
            {comments &&
              dataForPage(comments, pagination.page, pagination.perPage).map(
                comment => <Comment comment={new commentModel(comment)} />
              )}
          </tbody>
        </Table>
        {comments && (
          <PaginationComponent
            paginationMode={paginationMode}
            content={comments}
            pagination={pagination}
            selectPage={selectPage}
          />
        )}
      </div>
    )}
  </>
);

const mapStateToProps = state => {
  const comments = getComments(state);
  const isFetching = isFetchingComments(state);
  const paginationMode = getSelectedTab(state) === "posts" ? "comments" : null;
  const pagination = getPagination(state, paginationMode);
  return { comments, pagination, paginationMode, isFetching };
};

export default connect(
  mapStateToProps,
  { selectPage }
)(Comments);
