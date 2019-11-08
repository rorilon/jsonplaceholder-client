import React from "react";
import Table from "react-bootstrap/Table";

export default function PostDetailed({ post }) {
  return (
    <Table>
      <tr>
        <th colSpan="2">Title</th>
        <th colSpan="3">{post.title()}</th>
      </tr>
      <tr>
        <th colSpan="2">Body</th>
        <th colSpan="3">{post.body()}</th>
      </tr>
      <tr>
        <th colSpan="5">Comments</th>
      </tr>
    </Table>
  );
}
