import React from "react";
import { useLocation } from "react-router-dom";
import "./Prescription.css";
import logo from "../../image/logo.png";
const AddPrescription = (props) => {
  const { state } = useLocation();
  const { _id, name, age, gender, number } = state;
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
  const formattedDate = `${today.getDate()} ${
    months[today.getMonth()]
  } ${today.getFullYear()}`;
  //console.log(_id, name, age, gender, number);
  return (
    <div className="addPrescription mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6>Chamber Name</h6>
            <h6>Address: Sylhet</h6>
            <h6>Contact Number:01777857557 </h6>
          </div>
          <div className="col-lg-4">
            <h6>logo</h6>
          </div>
          <div className="col-lg-4 d-flex justify-content-end">
            <div>
              <h6>Doctors Name:abcd Ahmed chy</h6>
              <h6>Qualification</h6>
              <h6>Contact Number:01777857557 </h6>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h6>Id:</h6>
            <h6>PatientName:{name}</h6>
            <h6>Age:{age} </h6>
            <h6>Number:{number} </h6>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div>
              <h6>Date: {formattedDate}</h6>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6>test part</h6>
          </div>
          <div className="col-lg-8 d-flex">
            <div>
              <div>
                <input placeholder="name" />
              </div>
              <div>
                <input type="checkbox" id="night" name="time" value="night" />
                <label htmlFor="night">Night</label>

                <input
                  type="checkbox"
                  id="morning"
                  name="time"
                  value="morning"
                />
                <label htmlFor="morning">Morning</label>

                <input type="checkbox" id="lunch" name="time" value="lunch" />
                <label htmlFor="lunch">Lunch</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPrescription;
