import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAdminSlice } from "../../../slices/adminSlice";
import { logout } from "../../../slices/sessionSlice";
import { clearUserSlice } from "../../../slices/userSlice";
import HeadDashboard from "./HeadDashboard";

import "./header.css";

const HeaderDashboard = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const { sessionUser, isAuthenticated } = useSelector((state) => state.sessionSlice);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUserSlice());
    dispatch(clearAdminSlice());
    navigate("/");
  };

  return (
    <>
      <HeadDashboard />
      <header className="headerDashboard">
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to="/" style={{ color: "black" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" style={{ color: "black" }}>
                All Courses
              </Link>
            </li>
            <li>
              <Link to="/businessPlan" style={{ color: "black" }}>
                Business Plan
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: "black" }}>
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" style={{ color: "black" }}>
                Contact
              </Link>
            </li>

            {isAuthenticated && !click ? (
              <li>
                <Link to="/dashboard" style={{ color: "black" }}>
                  Dashboard
                </Link>
              </li>
            ) : null}

            {isAuthenticated && click ? (
              <>
                <li style={{ marginTop: "30px", fontWeight: "600", color: "black", fontSize: "25px" }}>Dashboard Section</li>

                <li>
                  <Link to="/dashboard" style={{ color: "black" }}>
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link to="/genealogy" style={{ color: "black" }}>
                    Genealogy
                  </Link>
                </li>
                <li>
                  <Link to="/referencesIncentiveHistory" style={{ color: "black" }}>
                    Working Plan Incentive
                  </Link>
                </li>
                <li>
                  <Link to="/nonWorkingPlanIncentiveHistory" style={{ color: "black" }}>
                    Non-Working Plan Incentive
                  </Link>
                </li>
                <li>
                  <Link to="/leadershipRewards" style={{ color: "black" }}>
                    Leadership Rewards
                  </Link>
                </li>
                <li>
                  <Link to="/nonWorkingRewards" style={{ color: "black" }}>
                    Non-Working Rewards
                  </Link>
                </li>

                <li>
                  <Link to="/referredMembers" style={{ color: "black" }}>
                    Referred Members
                  </Link>
                </li>

                <li>
                  <Link to="/profile" style={{ color: "black" }}>
                    Profile
                  </Link>
                </li>

                <li>
                  <Link to="/courseVideos" style={{ color: "black" }}>
                    Course Videos
                  </Link>
                </li>

                <li style={{ marginTop: "30px", fontWeight: "600", color: "black", fontSize: "25px" }}>Business Plan</li>
                <li>
                  <Link to="/workingPlan" style={{ color: "black" }}>
                    Working Business Plan
                  </Link>
                </li>
                <li>
                  <Link to="/nonWorkingPlan" style={{ color: "black" }}>
                    Non-Working Business Plan
                  </Link>
                </li>
                <li>
                  <Link to="/leadershipRewardsPlan" style={{ color: "black" }}>
                    Leadership Rewards Plan
                  </Link>
                </li>
              </>
            ) : null}

            {sessionUser.role && sessionUser.role === "admin" && click ? (
              <>
                <li style={{ marginTop: "30px", fontWeight: "600", color: "black", fontSize: "25px" }}>Admin</li>
                <li>
                  <Link to="/report" style={{ color: "black" }}>
                    Reports
                  </Link>
                </li>
                <li>
                  <Link to="/members" style={{ color: "black" }}>
                    Members
                  </Link>
                </li>
                <li>
                  <Link to="/incentiveReports" style={{ color: "black" }}>
                    Working Incentive Reports
                  </Link>
                </li>
                <li>
                  <Link to="/nonWorkingIncentiveReports" style={{ color: "black" }}>
                    Non-Working Incentive Reports
                  </Link>
                </li>
                <li>
                  <Link to="/leadershipRewardsAdmin" style={{ color: "black" }}>
                    Leadership Rewards Reports
                  </Link>
                </li>
                <li>
                  <Link to="/addVideos" style={{ color: "black" }}>
                    Add Videos
                  </Link>
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

export default HeaderDashboard;
