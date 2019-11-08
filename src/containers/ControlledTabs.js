import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Comments from "./Comments";
import Photos from "./Photos";
import Todos from "./Todos";
import { fetchPostsIfNeeded } from "../redux/actions/posts";
import { fetchCommentsIfNeeded } from "../redux/actions/comments";
import { fetchUsersIfNeeded } from "../redux/actions/users";
import { fetchAlbumsIfNeeded } from "../redux/actions/albums";
import { fetchPhotosIfNeeded } from "../redux/actions/photos";
import { fetchTodosIfNeeded } from "../redux/actions/todos";
import { setTab } from "../redux/actions/tabs";
import { selectPage } from "../redux/actions/pagination";
import { getSelectedTab } from "../redux/selectors";
import connect from "react-redux/es/connect/connect";
import TabPosts from "./TabPosts";
import TabUsers from "./TabUsers";
import TabAlbums from "./TabAlbums";

function ControlledTabs({
  fetchPostsIfNeeded,
  fetchCommentsIfNeeded,
  fetchUsersIfNeeded,
  fetchAlbumsIfNeeded,
  fetchPhotosIfNeeded,
  fetchTodosIfNeeded,
  tab,
  setTab,
  selectPage
}) {
  const fetchIfNeededByTab = {
    posts: fetchPostsIfNeeded,
    comments: fetchCommentsIfNeeded,
    users: fetchUsersIfNeeded,
    albums: fetchAlbumsIfNeeded,
    photos: fetchPhotosIfNeeded,
    todos: fetchTodosIfNeeded
  };
  fetchIfNeededByTab[tab]();
  selectPage(1);
  return (
    <Tabs id="tabs" activeKey={tab} onSelect={k => setTab(k)}>
      <Tab eventKey="posts" title="Posts">
        <TabPosts />
      </Tab>
      <Tab eventKey="comments" title="Comments">
        <Comments />
      </Tab>
      <Tab eventKey="users" title="Users">
        <TabUsers />
      </Tab>
      <Tab eventKey="albums" title="Albums">
        <TabAlbums />
      </Tab>
      <Tab eventKey="photos" title="Photos">
        <Photos />
      </Tab>
      <Tab eventKey="todos" title="Todos">
        <Todos />
      </Tab>
    </Tabs>
  );
}
const mapStateToProps = state => {
  return { tab: getSelectedTab(state) };
};

export default connect(
  mapStateToProps,
  {
    fetchPostsIfNeeded,
    fetchCommentsIfNeeded,
    fetchUsersIfNeeded,
    fetchAlbumsIfNeeded,
    fetchPhotosIfNeeded,
    fetchTodosIfNeeded,
    setTab,
    selectPage
  }
)(ControlledTabs);
