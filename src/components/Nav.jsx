import React, { useContext } from 'react'
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

import { GlobalContext } from '../context';
import "./nav.css";

function Nav() {
  let { getGlobal: {isLoggedin, image}, setGlobal } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logoutHandler = () => {
    setGlobal({
      isLoggedin: false,
      username: null,
      type: null,
      phone: null,
      image: null,
      email: null
    });
    localStorage.removeItem("token");
    toast.success("Logged out!");
    navigate("/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              New
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Women
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Men
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Kids
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Kid's store
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  School store
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Home wear
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Nav;