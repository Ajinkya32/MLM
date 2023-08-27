import React from "react";
import Logo from "../../../assets/logo.png";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logoNavbarDiv">
            <img className="logoNavbar" src={Logo} alt="" />
            <h1>AimTime Marketing</h1>
            {/* <span>ONLINE EDUCATION & LEARNING</span> */}
          </div>

          {/* <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Head;
