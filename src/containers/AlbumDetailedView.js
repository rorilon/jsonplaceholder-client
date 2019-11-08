import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Photos from "./Photos";
import AlbumDetailed from "../components/AlbumDetailed";

const AlbumDetailedView = ({ album, handleClosing }) => (
  <Form striped bordered hover>
    <AlbumDetailed album={album} />
    <Photos />
    <Button variant="primary" type="submit" onClick={handleClosing}>
      Close
    </Button>
  </Form>
);

export default AlbumDetailedView;
