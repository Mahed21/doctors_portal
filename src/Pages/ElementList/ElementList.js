import React from "react";

const ElementList = () => {
  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between">
        <div>
          <h4> Element List</h4>
        </div>
        <div>
          <div>
            <button className="btn btn-primary btn-success">Add New Element</button>
          </div>
        </div>
      </div>
      <div>
        <div className="container home_page mt-5 d-flex justify-content-center">
          <div>
            <table className="table custom-table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Elements</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Rules</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Xray</td>
                  <td>Fracture or pain in bone</td>
                  <td>Leg</td>
                  <td>
                    <button className="btn btn-primary me-1">Element Profile</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Xray</td>
                  <td>Fracture or pain in bone</td>
                  <td>Chest</td>
                  <td>
                    <button className="btn btn-primary me-1">Element Profile</button>
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

export default ElementList;
