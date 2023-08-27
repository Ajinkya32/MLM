import React from "react";
import "./topbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/sessionSlice";
import { clearUserSlice } from "../../slices/userSlice";
import { clearAdminSlice } from "../../slices/adminSlice";
import DummyImage from "../../assets/dummyProfile.png";

export default function Topbar() {
  const { sessionUser, isAuthenticated } = useSelector((state) => state.sessionSlice);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUserSlice());
    dispatch(clearAdminSlice());
  };
  return isAuthenticated ? (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="dashboard">Dashboard</span>
        </div>
        <div className="topBarDetails">
          {sessionUser.profilePic ? (
            <img className="profilePicTopbar" src={sessionUser.profilePic} alt=""></img>
          ) : (
            <img className="profilePicTopbar" src={DummyImage} alt=""></img>
          )}

          <h5 className="referralCode">Name: {sessionUser.memberName}</h5>
          <h5 className="referralCode">Member Id: {sessionUser._id}</h5>
          <h5 className="referralCode">Sopnsor Id: {sessionUser.referedByMemberId}</h5>
        </div>

        <div className="topRight">
          {/* <span className="logout-button" onClick={handleLogout}>
            Logout
          </span> */}
        </div>
      </div>
    </div>
  ) : null;
}
