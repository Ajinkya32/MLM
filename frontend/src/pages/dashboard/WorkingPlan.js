import React from "react";
import "./WorkingPlan.css";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import WokingPlanImage from "../../assets/workingPlan.png";

export default function WorkingPlan() {
  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="workingPlan">
            <span className="workingPlanTitle">Working Plan</span>
            <img className="workingPlan-image" src={WokingPlanImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
