import React from "react";
import "./navbar.css";
import Logo from "../../assets/Watermark.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo-img" src={Logo} alt="" />
      </div>

      <div className="navbar-main">
        <Link className="navbar-links">Home</Link>
        <Link className="navbar-links">Courses</Link>
        <Link className="navbar-links">Business Plan</Link>
        <Link className="navbar-links">Contact Us</Link>
        <Link className="navbar-links">About</Link>
        <Link className="navbar-links">Contact Us</Link>
        <Link to="/memberLogin" className="loginSignup">
          Login/Signup
        </Link>
      </div>
    </div>
  );
}
