import React, { useState } from "react";
import "../style/Login.css";
import Frame from "../images/mobileframe.png";
import Frontframe from "../images/mobile-front-frame.png";
import { useNavigation, Link } from "react-router-dom";
import {GrLanguage} from 'react-icons/gr';
const Login = () => {
  const navigate = useNavigation;
  const initialValues = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initialValues);
  // on Change handling here
  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  // on Submit handling here
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("submit data", login);
  };
  return (
    <div className="login">
      <div className="card login-container">
        <div className="card-body">
          <div className="login-body-image">
            <div className="login-body-image-front">
              <div className="login-body-image-font-frame"></div>
              <div className="login-body-image-font-image">
                <img
                  src={Frontframe}
                  alt=""
                  className="login-image-front-frame"
                  height="520px"
                />
              </div>
            </div>
            <div className="login-body-image-frame">
              <img
                src={Frame}
                alt=""
                className="login-image-frame"
                width="450px"
              />
            </div>
          </div>
          <div className="login-body-main-form mt-2">
            <div className="login-body-form">
              <div className="login-form-heading mb-4">Thread</div>
              <form>
                <div className="form-floating mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    name="email"
                    value={login.email}
                    onChange={changeHandler}
                    required
                  />
                  <label>Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    name="password"
                    value={login.password}
                    onChange={changeHandler}
                    required
                  />
                  <label>Password</label>
                </div>
                <div className="d-grid gap-2 mt-4 login-button-container">
                  <button
                    className="btn login-button"
                    onClick={submitHandler}
                    type="button"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div className="d-grid gap-2 mt-4 hrline">
                <div className="login-form-hrline"></div>
                <div>Or</div>
                <div className="login-form-hrline"></div>
              </div>
              <div className="login-forget-password mb-4">
                <Link to="/">Forgotten your password?</Link>
              </div>
            </div>
            <div className="login-body-form-register mt-2 p-3">
              <div>Don't have an account?</div>
              <div className="ms-2 signup">
                <Link to="/register">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card footer mt-4">
        <div className="card-body ">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle bg-white text-dark "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="mb-2" style={{marginRight:"5px"}}><GrLanguage/></span>Language
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  English(UK)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hindi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  French
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
