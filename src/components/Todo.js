import React from "react";

export default function Photo({ todo }) {
  return (
    <tr>
      <th>{todo.userId()}</th>
      <th>{todo.id()}</th>
      <th>{todo.title()}</th>
      <th>{todo.completed()}</th>
    </tr>
  );
}
