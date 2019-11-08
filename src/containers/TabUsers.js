import { getUserById } from "../data/helpFunctions";
import React from "react";
import { getSelectedTab, getUserId, getUsers } from "../redux/selectors";
import { clearUserId } from "../redux/actions/users";
import connect from "react-redux/es/connect/connect";
import User from "./UserDetailedView";
import userModel from "../models/user";
import Users from "./Users";

const TabUsers = ({ users, userId, clearUserId, selectedTab }) => (
  <div>
    {userId && selectedTab === "users" ? (
      <User
        handleClosing={() => clearUserId()}
        user={new userModel(getUserById(users, userId))}
      />
    ) : (
      <Users />
    )}
  </div>
);
const mapStateToProps = state => {
  const users = getUsers(state);
  const userId = getUserId(state);
  const selectedTab = getSelectedTab(state);
  return { users, userId, selectedTab };
};

export default connect(
  mapStateToProps,
  { clearUserId }
)(TabUsers);
