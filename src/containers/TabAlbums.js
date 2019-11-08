import { getAlbumById } from "../data/helpFunctions";
import React from "react";
import { getAlbumId, getAlbums, getSelectedTab } from "../redux/selectors";
import { clearAlbumId } from "../redux/actions/albums";
import connect from "react-redux/es/connect/connect";
import AlbumDetailedView from "./AlbumDetailedView";
import albumModel from "../models/album";
import Albums from "./Albums";

const TabAlbums = ({ albums, albumId, clearAlbumId, selectedTab }) => (
  <div>
    {albumId && selectedTab === "albums" ? (
      <AlbumDetailedView
        handleClosing={() => clearAlbumId()}
        album={new albumModel(getAlbumById(albums, albumId))}
      />
    ) : (
      <Albums />
    )}
  </div>
);
const mapStateToProps = state => {
  const albums = getAlbums(state);
  const albumId = getAlbumId(state);
  const selectedTab = getSelectedTab(state);
  return { albums, albumId, selectedTab };
};

export default connect(
  mapStateToProps,
  { clearAlbumId }
)(TabAlbums);
