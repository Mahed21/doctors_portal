import React from "react";
import { Link } from "react-router-dom";
import "./Authentication.css";
import login_banner from "../../image/login_banner.jpg";

const Register = () => {
  return (
    <div className="authentication_background">
      <div className="row row-cols-lg-2">
        <div className="col d-flex justify-content-center">
          <div>
            <h3 className="mt-5">Doctor Prescription Management System</h3>
            <div>
              <h3 className="text-center mt-5">Register</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <Link to="/login" className="mt-1 login-link">
                    Already Registerd?
                  </Link>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col d-none d-lg-block">
          <img src={login_banner} alt="" className="d-block img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Register;
