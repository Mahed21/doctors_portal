import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container home_page mt-5 d-flex justify-content-center">
      <div>
        <table className="table custom-table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Last Visited</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>John Doefdghhhhhhh</td>
              <td>30</td>
              <td>2023-12-01</td>
              <td>
                <button className="btn btn-primary me-1">View Profile</button>
                <button className="btn btn-success me-1">
                  Previous Prescription
                </button>
                <button className="btn btn-info me-1">Add Prescription</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>John Doefdghhhhhhh</td>
              <td>30</td>
              <td>2023-12-01</td>
              <td>
                <button className="btn btn-primary me-1">View Profile</button>
                <button className="btn btn-success me-1">
                  Previous Prescription
                </button>
                <button className="btn btn-info me-1">Add Prescription</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
