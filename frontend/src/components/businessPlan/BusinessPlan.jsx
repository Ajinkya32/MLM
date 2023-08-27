import React from "react";
import Back from "../common/back/Back";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import "./BusinessPlan.css";
import WorkingPlanImage from "../../assets/workingPlan.png";
import NonWorkingPlanImage from "../../assets/nonWorkingPlan.png";
import LeadershipRewards from "../../assets/leadershipRewards.png";

const BusinessPlan = () => {
  return (
    <>
      <Header />
      <Back title="Business Plan" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <h1 style={{ marginTop: "20px", fontWeight: "600" }}>Working Business Plan</h1>
          <img className="businessPlanImage" src={WorkingPlanImage} alt="" />
        </div>
      </section>

      <section className="contacts padding">
        <div className="container shadow flexSB">
          <h1 style={{ marginTop: "20px", fontWeight: "600" }} className="nonWorkingBusinessTitle">
            Non-Working Business Plan
          </h1>
          <img className="businessPlanImage" src={NonWorkingPlanImage} alt="" />
        </div>
      </section>

      <section className="contacts padding">
        <div className="container shadow flexSB">
          <h1 style={{ marginTop: "20px", fontWeight: "600" }}>LeadershipRewards</h1>
          <img className="businessPlanImage" src={LeadershipRewards} alt="" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BusinessPlan;
