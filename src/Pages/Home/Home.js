import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeRows from "./HomeRows";

const Home = () => {
  const [patientDetails, setPatientDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:5000/patientDetails?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setPatientDetails(data.data);
        setTotalPages(data.totalPages);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container home_page mt-5 d-flex justify-content-center">
      <div>
        <div className="d-flex mb-3">
          <div className="me-2">
            <input
              type="text"
              class="form-control"
              id="exampleInputsearch1"
              placeholder="Search by phone number"
            />
          </div>
          <div>
            <button
              className="btn
            btn-primary"
            >
              search
            </button>
          </div>
        </div>
        <table className="table custom-table">
          <thead>
            <tr>
              <th scope="col">Number</th>
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
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className="  btn
            btn-primary
            me-1"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
