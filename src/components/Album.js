import React from "react";

export default function Album({ album, handleClick }) {
  return (
    <tr onClick={handleClick}>
      <th>{album.id()}</th>
      <th>{album.userId()}</th>
      <th>{album.title()}</th>
    </tr>
  );
}
