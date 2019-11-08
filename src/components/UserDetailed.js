import React from "react";
import Table from "react-bootstrap/Table";

export default function UserDetailed({ user }) {
  return (
    <Table>
      <tr>
        <th colSpan="2">Id</th>
        <th colSpan="3">{user.id()}</th>
      </tr>
      <tr>
        <th colSpan="2">Name</th>
        <th colSpan="3">{user.name()}</th>
      </tr>
      <tr>
        <th colSpan="2">Username</th>
        <th colSpan="3">{user.username()}</th>
      </tr>
      <tr>
        <th colSpan="2">e-mail</th>
        <th colSpan="3">{user.email()}</th>
      </tr>
      <tr>
        <th colSpan="2">address</th>
        <th colSpan="3">{user.address()}</th>
      </tr>
      <tr>
        <th colSpan="2">phone</th>
        <th colSpan="3">{user.phone()}</th>
      </tr>
      <tr>
        <th colSpan="2">website</th>
        <th colSpan="3">{user.website()}</th>
      </tr>
      <tr>
        <th colSpan="2">company</th>
        <th colSpan="3">{user.companyName()}</th>
      </tr>
    </Table>
  );
}
