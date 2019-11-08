import React from "react";
import Table from "react-bootstrap/Table";

export default function AlbumDetailed({ album }) {
  return (
    <Table>
      <tr>
        <th colSpan="2">id</th>
        <th colSpan="3">{album.id()}</th>
      </tr>
      <tr>
        <th colSpan="2">userId</th>
        <th colSpan="3">{album.userId()}</th>
      </tr>
      <tr>
        <th colSpan="5">Title</th>
        <th>{album.title()}</th>
      </tr>
    </Table>
  );
}
