import React from "react";

const AddPatient = () => {
  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between">
        <div>
          <h4> Patient List</h4>
        </div>
        <div>
          <div>
            <button className="btn btn-primary btn-success">Add New Patient</button>
          </div>
        </div>
      </div>
      <div>
        <div className="container home_page mt-5 d-flex justify-content-center">
          <div>
            <table className="table custom-table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Last Visited</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>John Doefdghhhhhhh</td>
                  <td>30</td>
                  <td>2023-12-01</td>
                  <td>Chest pain</td>
                  <td>
                    <button className="btn btn-primary me-1">View Profile</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>John Doefdghhhhhhh</td>
                  <td>30</td>
                  <td>2023-12-01</td>
                  <td>Chest pain</td>
                  <td>
                    <button className="btn btn-primary me-1">View Profile</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
