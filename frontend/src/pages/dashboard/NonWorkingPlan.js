import React from "react";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import NonWokingPlanImage from "../../assets/nonWorkingPlan.png";

export default function NonWorkingPlan() {
  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="workingPlan">
            <span className="workingPlanTitle">Non-Working Plan</span>

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <img className="leadershipRewards-image" src={NonWokingPlanImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
