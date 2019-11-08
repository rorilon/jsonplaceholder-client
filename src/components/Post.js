import React from "react";

export default function Post({ post, handleClick }) {
  return (
    <tr onClick={handleClick}>
      <th>{post.id()}</th>
      <th>{post.title()}</th>
    </tr>
  );
}
