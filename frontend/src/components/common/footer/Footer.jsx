import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className="container padding">
          <div className="box logo logodiv">
            <img className="logoFooter" src={Logo} alt=""></img>
            <h1 className="logoTitle">AimTime Marketing</h1>
            {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}

            <div className="contact" style={{ marginBottom: "20px" }}>
              <a href="https://www.facebook.com/profile.php?id=100064010889081" className="fab fa-facebook-f icon"></a>
              <a href="https://www.instagram.com/aimtimeofficial/" className="fab fa-instagram icon"></a>
              <a href="https://twitter.com/AimTime0fficial?t=J8VDKM_uWZ1pLILacaZYHg&s=09" className="fab fa-twitter icon"></a>
              <a href="https://youtube.com/@aimtimeofficial" className="fab fa-youtube icon"></a>
              <a href="https://t.me/+CHWSp8hMhMpmMTRl" className="fab fa-telegram icon"></a>
            </div>
          </div>
          <div className="box link footerBoxes">
            <h3>Explore</h3>
            <ul style={{ padding: "0" }}>
              <li>
                <Link style={{ color: "black" }} to="/about">
                  About Us
                </Link>
              </li>
              {/* <li>Services</li> */}
              <li>
                <Link style={{ color: "black" }} to="/courses">
                  Courses
                </Link>
              </li>
              {/* <li>Blog</li> */}
              <li>
                <Link style={{ color: "black" }} to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="box link footerBoxes">
            <h3>Quick Links</h3>
            <ul style={{ padding: "0" }}>
              <li>
                <Link style={{ color: "black" }} to="/login">
                  Login or Register
                </Link>
              </li>
              {/* <li>Pricing</li> */}
              <li>
                <Link style={{ color: "black" }} to="/termsAndConditions">
                  Terms & Conditions
                </Link>
              </li>
              {/* <li>Privacy</li> */}
              {/* <li>Feedbacks</li> */}
            </ul>
          </div>
          {/* <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4 style={{ fontSize: "15px" }}>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className="box last footerBoxes">
            <h3>Have a Questions?</h3>
            <ul style={{ padding: "0" }}>
              <li>
                <i className="fa fa-map"></i>
                Barsa, Sheikhpura, Bihar 811105
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <a href="tel:7858006672">7858006672</a>
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                <a href="mailto:support@aimtimebusiness.com" target="_top">
                  support@aimtimebusiness.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2023 All rights reserved | by Ajinkya Bandagale</p>
      </div>
    </>
  );
};

export default Footer;
