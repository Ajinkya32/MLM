import React from "react";
import "./networkAnalytics.css";
import Chart from "../../components/chart/Chart";
import ReportChart from "../../components/chart/ReportChart";
import FeaturedInfoAdmin from "../../components/featuredInfoAdmin/FeaturedInfoAdmin";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";

export default function NetworkAnalytics() {
  const { salesAnalyticsAdmin, membersAnalyticsAdmin } = useSelector((state) => state.adminSlice);

  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="networkAnalytics">
            <h2 style={{ marginLeft: "20px", marginBottom: "10px" }}>Reports Admin</h2>
            <FeaturedInfoAdmin />
            {/* <ReportChart data={salesAnalyticsAdmin} title="Sales Data" dataKey="count" /> */}
            <ReportChart data={membersAnalyticsAdmin} title="Members Joined" dataKey="count" />
          </div>
        </div>
      </div>
    </>
  );
}
