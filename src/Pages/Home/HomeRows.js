import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiNotePencilFill } from "react-icons/pi";
import { PiTrashFill } from "react-icons/pi";
import { PiNewspaperClippingFill } from "react-icons/pi";

const HomeRows = (props, index) => {
  const { gender, email, name, number, patientId, updatedAt, _id, age } =
    props.data;

  let navigate = useNavigate();

  const date = new Date(updatedAt);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const day = date.getDate();
  const monthAbbrev = months[date.getMonth()];
  const year = date.getFullYear();

  // Formatted date string
  const formattedDate = `${day}-${monthAbbrev}-${year}`; // '2024-04-14'

  console.log(formattedDate);

  const deletePatient = (id) => {
    fetch(`http://localhost:5000/patientDetails/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.status === "success") {
          // afterUpdate();
          alert("Successfully deleted");
        } else {
          alert("problem occure to delete data");
        }
      });
  };

  const addPrescription = (_id, name, age, gender, number) => {
    //console.log(_id, name, age, gender, number);
    navigate("/addPrescription", {
      state: { name: name, age: age, gender: gender, number: number },
    });
  };

  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{formattedDate}</td>
      <td>
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Previous Prescriptions" className="btn btn-outline-dark me-1"><PiNewspaperClippingFill /></button>
        <button
          data-bs-toggle="tooltip" data-bs-placement="top" title="Add New Prescription"
          className="btn btn-outline-success me-1"
          onClick={() => addPrescription(_id, name, age, gender, number)}
        >
          <PiNotePencilFill />
        </button>
        <button data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Patient" className="btn btn-danger" onClick={() => deletePatient(_id)}>
          <PiTrashFill />
        </button>
      </td>
    </tr>
  );
};

export default HomeRows;
