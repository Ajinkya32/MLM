import "./sidebar.css";

import LineStyle from "@mui/icons-material/LineStyle";
import Timeline from "@mui/icons-material/Timeline";
import TrendingUp from "@mui/icons-material/TrendingUp";
import PermIdentity from "@mui/icons-material/PermIdentity";
import Storefront from "@mui/icons-material/Storefront";
import AttachMoney from "@mui/icons-material/AttachMoney";
import BarChart from "@mui/icons-material/BarChart";
import MailOutline from "@mui/icons-material/MailOutline";
import DynamicFeed from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import WorkOutline from "@mui/icons-material/WorkOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkIcon from "@mui/icons-material/Work";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import { ImTree } from "react-icons/im";
import Report from "@mui/icons-material/Report";
import FaceIcon from "@mui/icons-material/Face";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { sessionUser, isAuthenticated } = useSelector((state) => state.sessionSlice);

  return isAuthenticated ? (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h5>{sessionUser.memberName}</h5>
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <Link to="/genealogy" className="link">
              <li className="sidebarListItem">
                <ImTree className="sidebarIcon" />
                Genealogy
              </li>
            </Link>
            {/* <Link to="/directSalesAndIncentiveHistory" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Direct Sales And Incentive History
              </li>
            </Link> */}
            <Link to="/referencesIncentiveHistory" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Working Plan Incentive
              </li>
            </Link>

            <Link to="/nonWorkingPlanIncentiveHistory" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Non-Working Plan Incentive
              </li>
            </Link>

            <Link to="/leadershipRewards" className="link">
              <li className="sidebarListItem">
                <EmojiEventsIcon className="sidebarIcon" />
                Leadership Rewards
              </li>
            </Link>

            <Link to="/nonWorkingRewards" className="link">
              <li className="sidebarListItem">
                <EmojiEventsIcon className="sidebarIcon" />
                Non-Working Rewards
              </li>
            </Link>

            <Link to="/referredMembers" className="link">
              <li className="sidebarListItem">
                <PeopleOutlineIcon className="sidebarIcon" />
                Referred Members
              </li>
            </Link>

            <Link to="/profile" className="link">
              <li className="sidebarListItem">
                <FaceIcon className="sidebarIcon" />
                Profile
              </li>
            </Link>

            <Link to="/courseVideos" className="link">
              <li className="sidebarListItem">
                <OndemandVideoIcon className="sidebarIcon" />
                Course Videos
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Business Plan</h3>
          <ul className="sidebarList">
            <Link to="/workingPlan" className="link">
              <li className="sidebarListItem">
                <WorkIcon className="sidebarIcon" />
                Working Plan
              </li>
            </Link>

            <Link to="/nonWorkingPlan" className="link">
              <li className="sidebarListItem">
                <WorkOffIcon className="sidebarIcon" />
                Non-Working Plan
              </li>
            </Link>

            <Link to="/leadershipRewardsPlan" className="link">
              <li className="sidebarListItem">
                <EmojiEventsIcon className="sidebarIcon" />
                Leadership Rewards Plan
              </li>
            </Link>
          </ul>
        </div>

        {sessionUser.role && sessionUser.role === "admin" ? (
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Admin Menu</h3>
            <ul className="sidebarList">
              <Link to="/report" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Reports
                </li>
              </Link>

              <Link to="/members" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Members
                </li>
              </Link>

              <Link to="/incentiveReports" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Working Incentive Reports
                </li>
              </Link>

              <Link to="/nonWorkingIncentiveReports" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Non-Working Incentive Reports
                </li>
              </Link>

              <Link to="/leadershipRewardsAdmin" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Leadership Rewards Reports
                </li>
              </Link>

              <Link to="/addVideos" className="link">
                <li className="sidebarListItem">
                  <VideoCallIcon className="sidebarIcon" />
                  Add Videos
                </li>
              </Link>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
}
