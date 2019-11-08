import { connect } from "react-redux";
import React from "react";
import Table from "react-bootstrap/Table";
import {
  getPaginationOverview,
  getUsers,
  isFetchingUsers
} from "../redux/selectors";
import User from "../components/User";
import userModel from "../models/user";
import { setUserId } from "../redux/actions/users";
import { selectPage } from "../redux/actions/pagination";
import { fetchUserAlbumIfNeeded } from "../redux/actions/albums";
import { fetchUserPostsIfNeeded } from "../redux/actions/posts";
import { fetchUserTodosIfNeeded } from "../redux/actions/todos";
import PaginationComponent from "../components/Pagination";
import { dataForPage } from "../data/pagination";
import Loading from "../components/Loading";

const Users = ({
  isFetching,
  users,
  setUserId,
  selectPage,
  pagination,
  fetchUserAlbumIfNeeded,
  fetchUserPostsIfNeeded,
  fetchUserTodosIfNeeded
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
              <th>Name</th>
              <th>Username</th>
              <th>e-mail</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              dataForPage(users, pagination.page, pagination.perPage).map(
                user => (
                  <User
                    handleClick={() => {
                      setUserId(user.id);
                      fetchUserAlbumIfNeeded(user.id);
                      fetchUserPostsIfNeeded(user.id);
                      fetchUserTodosIfNeeded(user.id);
                    }}
                    user={new userModel(user)}
                  />
                )
              )}
          </tbody>
          {users && (
            <PaginationComponent
              content={users}
              pagination={pagination}
              selectPage={selectPage}
            />
          )}
        </Table>
      </div>
    )}
  </>
);

const mapStateToProps = state => {
  const users = getUsers(state);
  const pagination = getPaginationOverview(state);
  const isFetching = isFetchingUsers(state);
  return { users, pagination, isFetching };
};

export default connect(
  mapStateToProps,
  {
    setUserId,
    selectPage,
    fetchUserAlbumIfNeeded,
    fetchUserPostsIfNeeded,
    fetchUserTodosIfNeeded
  }
)(Users);
