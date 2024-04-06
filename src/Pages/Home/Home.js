import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeRows from "./HomeRows";

const Home = () => {
  const [patientDetails, setPatientDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/patientDetails")
      .then((res) => res.json())
      .then((data) => {
        setPatientDetails(data.data);
      });
  }, []);

  return (
    <div className="container home_page mt-5 d-flex justify-content-center">
      <div>
        <table className="table custom-table">
          <thead>
            <tr>
              <th scope="col">Patient ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Last Visited</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {patientDetails.map((data, index) => (
              <HomeRows data={data} key={data._id} index={index}></HomeRows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
