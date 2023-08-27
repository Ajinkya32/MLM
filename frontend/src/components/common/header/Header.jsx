import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearAdminSlice } from "../../../slices/adminSlice";
import { logout } from "../../../slices/sessionSlice";
import { clearUserSlice } from "../../../slices/userSlice";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const { sessionUser, isAuthenticated } = useSelector((state) => state.sessionSlice);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUserSlice());
    dispatch(clearAdminSlice());
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/courses">All Courses</Link>
            </li>

            <li>
              <Link to="/businessPlan">Business Plan</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            {isAuthenticated && !click ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : null}

            {isAuthenticated && click ? (
              <>
                <li style={{ marginTop: "30px", fontWeight: "600", color: "white", fontSize: "25px" }}>Dashboard Section</li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/genealogy">Genealogy</Link>
                </li>
                <li>
                  <Link to="/referencesIncentiveHistory">Working Plan Incentive</Link>
                </li>
                <li>
                  <Link to="/nonWorkingPlanIncentiveHistory">Non-Working Plan Incentive</Link>
                </li>
                <li>
                  <Link to="/leadershipRewards">Leadership Rewards</Link>
                </li>
                <li>
                  <Link to="/nonWorkingRewards">Non-Working Rewards</Link>
                </li>

                <li>
                  <Link to="/referredMembers">Referred Members</Link>
                </li>

                <li>
                  <Link to="/profile">Profile</Link>
                </li>

                <li>
                  <Link to="/courseVideos">Course Videos</Link>
                </li>

                <li style={{ marginTop: "30px", fontWeight: "600", color: "white", fontSize: "25px" }}>Business Plan</li>
                <li>
                  <Link to="/workingPlan">Working Business Plan</Link>
                </li>
                <li>
                  <Link to="/nonWorkingPlan">Non-Working Business Plan</Link>
                </li>
                <li>
                  <Link to="/leadershipRewardsPlan">Leadership Rewards Plan</Link>
                </li>
              </>
            ) : null}

            {sessionUser.role && sessionUser.role === "admin" && click ? (
              <>
                <li style={{ marginTop: "30px", fontWeight: "600", color: "white", fontSize: "25px" }}>Admin</li>
                <li>
                  <Link to="/report">Reports</Link>
                </li>
                <li>
                  <Link to="/members">Members</Link>
                </li>
                <li>
                  <Link to="/incentiveReports">Working Incentive Reports</Link>
                </li>
                <li>
                  <Link to="/nonWorkingIncentiveReports">Non-Working Incentive Reports</Link>
                </li>
                <li>
                  <Link to="/leadershipRewardsAdmin">Leadership Rewards Reports</Link>
                </li>
                <li>
                  <Link to="/addVideos">Add Videos</Link>
                </li>
              </>
            ) : null}
          </ul>
          <div className="start">
            {isAuthenticated ? (
              <span onClick={handleLogout} className="button">
                Logout
              </span>
            ) : (
              <Link to="/login" className="button">
                Login
              </Link>
            )}
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
