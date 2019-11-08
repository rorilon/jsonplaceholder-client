import { connect } from "react-redux";
import React from "react";
import Form from "react-bootstrap/Form";
import { getUsers } from "../redux/selectors";
import Button from "react-bootstrap/Button";
import UserDetailed from "../components/UserDetailed";
import Albums from "./Albums";
import Posts from "./Posts";
import Todos from "./Todos";

const UserDetailedView = ({ user, handleClosing }) => (
  <Form striped bordered hover>
    <UserDetailed user={user} />
    <div>Albums</div>
    <Albums />
    <div>Posts</div>
    <Posts />
    <div>Todos</div>
    <Todos />
    <Button variant="primary" type="submit" onClick={handleClosing}>
      Close
    </Button>
  </Form>
);

const mapStateToProps = state => {
  const users = getUsers(state);
  return { users };
};

export default connect(mapStateToProps)(UserDetailedView);
