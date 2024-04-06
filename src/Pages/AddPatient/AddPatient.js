import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddPatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  let navigate = useNavigate();

  const PatientInfo = (e) => {
    e.preventDefault();
    const firstName = name.split(" ")[0].trim();
    const generatedId = `${firstName}${number}${age}`;
    // console.log(patientNewID);
    const patientDetails = {
      name: name,
      age: age,
      number: number,
      email: email,
      gender: gender,
      patientId: generatedId,
    };
    fetch(`http://localhost:5000/patientDetails`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(patientDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("New Patient Added Successfully");
          navigate("/");
        } else {
          alert(data.data);
        }
      });
  };

  return (
    <div className="authentication_background">
      <div className=" d-flex justify-content-center">
        <div>
          <h3 className="mt-5">Add New Patient</h3>

          <form onSubmit={PatientInfo}>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Enter Patient Name</label>
              <input
                className="form-control"
                id="exampleInputName1"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputAge1">Enter Patient Age</label>
              <input
                className="form-control"
                id="exampleInputAge1"
                type="number"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputNumber1">Enter Patient Number</label>
              <input
                className="form-control"
                id="exampleInputNumber1"
                type="number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputGender1">Gender</label>
              <select
                className="form-control"
                id="exampleInputGender1"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
