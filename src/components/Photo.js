import React from "react";

export default function Photo({ photo }) {
  return (
    <tr>
      <th>{photo.albumId()}</th>
      <th>{photo.id()}</th>
      <th>{photo.title()}</th>
      <th>{photo.url()}</th>
      <th>{photo.thumbnailUrl()}</th>
    </tr>
  );
}
