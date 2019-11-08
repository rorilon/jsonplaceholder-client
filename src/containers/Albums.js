import { connect } from "react-redux";
import React from "react";
import Table from "react-bootstrap/Table";
import {
  getAlbums,
  getPagination,
  getSelectedTab,
  isFetchingAlbums
} from "../redux/selectors";
import Album from "../components/Album";
import albumModel from "../models/album";
import { dataForPage } from "../data/pagination";
import { setAlbumId } from "../redux/actions/albums";
import { selectPage } from "../redux/actions/pagination";
import { fetchAlbumPhotosIfNeeded } from "../redux/actions/photos";
import PaginationComponent from "../components/Pagination";
import Loading from "../components/Loading";

const Albums = ({
  isFetching,
  albums,
  pagination,
  paginationMode,
  selectPage,
  fetchAlbumPhotosIfNeeded,
  setAlbumId
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
              <th>userId</th>
              <th colSpan="2">title</th>
            </tr>
          </thead>
          <tbody>
            {albums &&
              dataForPage(albums, pagination.page, pagination.perPage).map(
                album => (
                  <Album
                    handleClick={() => {
                      setAlbumId(album.id);
                      fetchAlbumPhotosIfNeeded(album.id);
                    }}
                    album={new albumModel(album)}
                  />
                )
              )}
          </tbody>
        </Table>
        {albums && (
          <PaginationComponent
            paginationMode={paginationMode}
            content={albums}
            pagination={pagination}
            selectPage={selectPage}
          />
        )}
      </div>
    )}
  </>
);

const mapStateToProps = state => {
  const albums = getAlbums(state);
  const isFetching = isFetchingAlbums(state);
  const paginationMode = getSelectedTab(state) === "users" ? "albums" : null;
  const pagination = getPagination(state, paginationMode);
  return { albums, pagination, paginationMode, isFetching };
};

export default connect(
  mapStateToProps,
  {
    selectPage,
    fetchAlbumPhotosIfNeeded,
    setAlbumId
  }
)(Albums);
