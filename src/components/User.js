import React from "react";

export default function User({ user, handleClick }) {
  return (
    <tr onClick={handleClick}>
      <th>{user.id()}</th>
      <th>{user.name()}</th>
      <th>{user.username()}</th>
      <th>{user.email()}</th>
    </tr>
  );
}
