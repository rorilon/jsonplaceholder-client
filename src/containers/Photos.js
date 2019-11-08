import { connect } from "react-redux";
import React from "react";
import Table from "react-bootstrap/Table";
import {
  isFetchingPhotos,
  getPhotos,
  getSelectedTab,
  getPagination
} from "../redux/selectors";
import Photo from "../components/Photo";
import photoModel from "../models/photo";
import { dataForPage } from "../data/pagination";
import { selectPage } from "../redux/actions/pagination";
import PaginationComponent from "../components/Pagination";
import Loading from "../components/Loading";

const Photos = ({
  isFetching,
  photos,
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
              <th>albumId</th>
              <th>id</th>
              <th>title</th>
              <th>url</th>
              <th>thumbnailUrl</th>
            </tr>
          </thead>
          <tbody>
            {photos &&
              dataForPage(photos, pagination.page, pagination.perPage).map(
                photo => <Photo photo={new photoModel(photo)} />
              )}
          </tbody>
        </Table>
        {photos && (
          <PaginationComponent
            paginationMode={paginationMode}
            content={photos}
            pagination={pagination}
            selectPage={selectPage}
          />
        )}
      </div>
    )}
  </>
);

const mapStateToProps = state => {
  const photos = getPhotos(state);
  const isFetching = isFetchingPhotos(state);
  const paginationMode = getSelectedTab(state) === "albums" ? "photos" : null;
  const pagination = getPagination(state, paginationMode);
  return { photos, pagination, paginationMode, isFetching };
};

export default connect(
  mapStateToProps,
  { selectPage }
)(Photos);
