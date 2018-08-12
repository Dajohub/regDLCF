import React from "react";
import { Card, CardBlock, Table, Col } from "reactstrap";

export default ({ data }) => (
  <Card className="card-accent-primary">
    <CardBlock>
      <Table responsive striped hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Denomination</th>
            <th>State</th>
            <th>Category</th>
            <th>Institution/PPA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((participant, i) => (
            <tr key={participant._id}>
              <th> {i + 1} </th>
              <td> {participant.fullName} </td>
              <td> {participant.phoneNumber} </td>
              <td> {participant.denomination} </td>
              <td> {participant.state} </td>
              <td> {participant.category} </td>
              <td> {participant.institution} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardBlock>
  </Card>
);