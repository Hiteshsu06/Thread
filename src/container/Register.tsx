import React from "react";
import { Link } from "react-router-dom";
import "../style/Register.css";

const Register = () => {
  return (
   <div className="register">
     <div className="register-main-form">
      <div className="register-body-form">
        <div className="register-header">Create a new account</div>
        <div className="resiter-header-statement mb-5">It's quick and easy.</div>
        <form className="row">
          <div className="form-floating mb-2 col-6">
            <input
              type="text"
              className="form-control"
              name="fullname"
            />
            <label>First Name</label>
          </div>
          <div className="form-floating mb-2 col-6">
            <input
              type="text"
              className="form-control"
              name="text"
            />
            <label>Last name</label>
          </div>
          <div className="form-floating mb-2 col-12">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              required
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mb-2 col-12">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              required
            />
            <label>Password</label>
          </div>
          <div className="form-floating col-12">
            <input
              type="date"
              className="form-control"
              id="floatingPassword"
              name="password"
              required
            />
            <label>Date of birth</label>
          </div>
          <div className="mt-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                required
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                required
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
          <div className="d-grid gap-2 mt-4 mb-2 register-button-container">
            <button className="btn register-button" type="button">
              Sign up
            </button>
          </div>
          
        </form>
      </div>
      <div className="register-already-account mb-4 mt-2 p-3">
            <span style={{marginRight:"5px"}}>Already have an account?</span>
            <Link to="/">Log in</Link>
      </div>
    </div>
   </div>
  );
};

export default Register;
