import { connect } from "react-redux";
import React from "react";
import Table from "react-bootstrap/Table";
import {
  isFetchingTodos,
  getTodos,
  getSelectedTab,
  getPagination
} from "../redux/selectors";
import Todo from "../components/Todo";
import todoModel from "../models/todo";
import { dataForPage } from "../data/pagination";
import { selectPage } from "../redux/actions/pagination";
import PaginationComponent from "../components/Pagination";
import Loading from "../components/Loading";

const Todos = ({
  isFetching,
  todos,
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
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {todos &&
              dataForPage(todos, pagination.page, pagination.perPage).map(
                todo => <Todo todo={new todoModel(todo)} />
              )}
          </tbody>
        </Table>
        {todos && (
          <PaginationComponent
            paginationMode={paginationMode}
            content={todos}
            pagination={pagination}
            selectPage={selectPage}
          />
        )}
      </div>
    )}
  </>
);

const mapStateToProps = state => {
  const todos = getTodos(state);

  const isFetching = isFetchingTodos(state);
  const paginationMode = getSelectedTab(state) === "users" ? "todos" : null;
  const pagination = getPagination(state, paginationMode);
  return { todos, pagination, isFetching, paginationMode };
};

export default connect(
  mapStateToProps,
  { selectPage }
)(Todos);
