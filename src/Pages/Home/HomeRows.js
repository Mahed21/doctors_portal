import React from "react";

const HomeRows = (props, index) => {
  const { gender, email, name, number, patientId, updatedAt } = props.data;

  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{updatedAt}</td>
      <td>
        <button className="btn btn-primary me-1">View Profile</button>
        <button className="btn btn-success me-1">Previous Prescription</button>
        <button className="btn btn-info me-1">Add Prescription</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default HomeRows;
