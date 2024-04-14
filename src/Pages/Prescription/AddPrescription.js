import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Prescription.css";
import logo from "../../image/logo.png";
const AddPrescription = (props) => {
  const { state } = useLocation();
  const { name, age, gender, number } = state;
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${today.getDate()} ${months[today.getMonth()]
    } ${today.getFullYear()}`;

  const [newMedicine, setnewMedicine] = useState([0]);

  const addNewMedicine = () => {
    const n = [...newMedicine];
    n.push(n.length);
    setnewMedicine(n);
  }
  //console.log(_id, name, age, gender, number);
  return (
    <div className="addPrescription mt-5 container">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <h6>Chamber Name</h6>
          <h6>Address: Sylhet</h6>
          <h6>Contact Number:01777857557 </h6>
        </div>
        <div className="col-lg-2">
          <img src={logo} alt="" className="d-none d-md-block img-fluid" />
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div>
            <h6>Doctors Name:abcd Ahmed chy</h6>
            <h6>Qualification</h6>
            <h6>Contact Number:01777857557 </h6>
          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h6>Reg. No:</h6>
          <h6>PatientName:{name}</h6>
          <h6>Age:{age} </h6>
          <h6>Number:{number} </h6>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
          <div>
            <h6>Date: {formattedDate}</h6>
            <h6>Reffered By:ABCD </h6>
          </div>
        </div>
      </div>

      <hr />

      {/* prescription part */}

      <div className="row">
        <div
          className="col-lg-3 d-none d-lg-block border-end border-dark"
          style={{ height: "823px" }}
        >
          <div
            className="d-flex flex-column justify-content-between"
            style={{ height: "100%" }}
          >
            <div style={{ height: "33%" }}>
              <textarea
                className="form-control rounded-2 mb-2"
                style={{ height: "70%" }}
                placeholder="Investigations"
              />
              <button className="btn btn-primary">Add</button>
            </div>
            <div style={{ height: "33%" }}>
              <textarea
                className="form-control rounded-2 mb-2"
                style={{ height: "70%" }}
                placeholder="Notes"
              />
              <button className="btn btn-primary">Add</button>
            </div>
            <div style={{ height: "33%" }}>
              <textarea
                className="form-control rounded-2 mb-2"
                style={{ height: "70%" }}
                placeholder="Advice"
              />
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          {
            newMedicine?.map((i) => {
              return <div className="d-flex">
                <input value={newMedicine.length} readOnly className="prescription_input w-25" />
                <input placeholder="Medicine Name" className="prescription_input" />
                <div className="d-flex align-items-center me-2">
                  <input type="checkbox" id="night" name="time" value="night" />
                  <label htmlFor="night">Night</label>
                  <input type="checkbox" id="morning" name="time" value="morning" />
                  <label htmlFor="morning">Morning</label>
                  <input type="checkbox" id="lunch" name="time" value="lunch" />
                  <label htmlFor="lunch">Lunch</label>
                </div>
                <input placeholder="Duration" className="prescription_input" />
                {
                  i === newMedicine?.length - 1 ? <span
                    class="d-flex align-items-center">
                    <button onClick={addNewMedicine} class="d-flex align-items-center btn btn-primary ">
                      +
                    </button>
                  </span> : null
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default AddPrescription;
