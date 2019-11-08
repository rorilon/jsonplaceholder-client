import React from "react";

export default function Comment({ comment }) {
  return (
    <tr>
      <th>{comment.id()}</th>
      <th>{comment.name()}</th>
      <th>{comment.email()}</th>
      <th>{comment.body()}</th>
    </tr>
  );
}
