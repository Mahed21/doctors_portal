import React from "react";

const DrugList = () => {
  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between">
        <div>
          <h4> Drug List</h4>
        </div>
        <div>
          <div>
            <button className="btn btn-primary btn-success">Add New Drug</button>
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
                  <th scope="col">Drug</th>
                  <th scope="col">Company</th>
                  <th scope="col">Dosage</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Napa (Paracetamol)</td>
                  <td>Beximco</td>
                  <td>2 times elderly, 1 time children</td>
                  <td> fever, common cold and influenza, headache</td>
                  <td>
                    <button className="btn btn-primary me-1">Drug Profile</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Napa (Paracetamol)</td>
                  <td>Beximco</td>
                  <td>2 times elderly, 1 time children</td>
                  <td> fever, common cold and influenza, headache</td>
                  <td>
                    <button className="btn btn-primary me-1">Drug Profile</button>
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

export default DrugList;
