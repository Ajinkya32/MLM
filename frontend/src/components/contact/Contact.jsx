import React from "react";
import Back from "../common/back/Back";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row mapConact">
            <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Barsa, Sheikhpura, Bihar 811105&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>If you have any queries feel free to contact us below. You can follow us on our socials for updates.</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Barsa, Sheikhpura, Bihar 811105</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <a href="mailto:support@aimtimebusiness.com" target="_top">
                  support@aimtimebusiness.com
                </a>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <a href="tel:7858006672">7858006672</a>
              </div>
            </div>
            <div className="contactSocials">
              <a href="https://www.facebook.com/profile.php?id=100064010889081" className="fab fa-facebook-f icon"></a>
              <a href="https://www.instagram.com/aimtimeofficial/" className="fab fa-instagram icon"></a>
              <a href="https://twitter.com/AimTime0fficial?t=J8VDKM_uWZ1pLILacaZYHg&s=09" className="fab fa-twitter icon"></a>
              <a href="https://youtube.com/@aimtimeofficial" className="fab fa-youtube icon"></a>
              <a href="https://t.me/+CHWSp8hMhMpmMTRl" className="fab fa-telegram icon"></a>
            </div>

            {/* <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
