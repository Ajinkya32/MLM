import React from "react";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import LeadershipRewardsImage from "../../assets/leadershipRewards.png";

export default function LeadershipRewardsPlan() {
  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="workingPlan">
            <span className="workingPlanTitle">Leadership Rewards</span>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <img className="leadershipRewards-image" src={LeadershipRewardsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
