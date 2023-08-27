import React from "react";
import Logo from "../../../assets/logo.png";

const HeadDashboard = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logoNavbarDiv">
            <img className="logoNavbar" src={Logo} alt="" />
            <h1>AimTime Marketing</h1>
            {/* <span>ONLINE EDUCATION & LEARNING</span> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeadDashboard;
