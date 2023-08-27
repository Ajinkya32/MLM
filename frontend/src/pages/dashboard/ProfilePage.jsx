import React from "react";

import "./profilePage.css";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import moment from "moment";

import DummyImage from "../../assets/dummyProfile.png";

export default function ProfilePage() {
  const { sessionUser } = useSelector((state) => state.sessionSlice);

  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="profilePage">
            <span className="workingPlanTitle">Profile</span>
            <div className="profileContainer">
              <div className="profileDiv">
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  {sessionUser.profilePic ? (
                    <img className="profilePic" src={sessionUser.profilePic} alt=""></img>
                  ) : (
                    <img className="profilePic" src={DummyImage} alt="{DummyImage}"></img>
                  )}
                </div>
                <span className="profileTitles">
                  Name: <span className="profileText">{sessionUser.memberName}</span>
                </span>
                <span className="profileTitles">
                  Email: <span className="profileText">{sessionUser.email}</span>
                </span>
                <span className="profileTitles">
                  Address: <span className="profileText">{sessionUser.address}</span>
                </span>
                <span className="profileTitles">
                  Contact No: <span className="profileText">{sessionUser.contactNumber}</span>
                </span>
                <span className="profileTitles">
                  Working Level: <span className="profileText">{sessionUser.level}</span>
                </span>
                <span className="profileTitles">
                  Non-Working Level: <span className="profileText">{sessionUser.nonWorkingLevel}</span>
                </span>
                <span className="profileTitles">
                  Joining Date: <span className="profileText">{moment(sessionUser.createdAt).format("DD/MM/YYYY hh:mm A")}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
