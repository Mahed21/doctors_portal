import React from "react";
import { Link } from "react-router-dom";
import { FaHospitalUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <FaHospitalUser className="fs-1 ms-3" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                to="/drugList"
                class="nav-link"
                aria-current="page"
                href="#"
              >
                Drug's
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/elementList" class="nav-link" href="#">
                Elements
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/addPatient" class="nav-link">
                Add New Patients
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
