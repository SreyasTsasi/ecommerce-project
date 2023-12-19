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
    <div className='nav-container'>
      <Toaster position="top-center" />
      <img src="/logo.png" alt="logo" onClick={() => navigate("/")} />
      {isLoggedin ? <div className="right profile">
        <img src={image} alt="prifile" onClick={() => navigate("/profile")} />
        <button onClick={logoutHandler}>Logout</button>
      </div> : <div className="right buttons">
        {pathname != "/register" && <button onClick={() => navigate("/register")}>Register</button>}
        {pathname != "/login" && <button onClick={() => navigate("/login")}>Login</button>}
      </div>}
    </div>
  )
}

export default Nav;