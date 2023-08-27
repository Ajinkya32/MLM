import React, { useEffect, useState } from "react";
import "./genealogy.css";
// import Tree from "react-d3-tree";
import Tree from "../../components/tree/Tree";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Genealogy() {
  const { genealogy } = useSelector((state) => state.userSlice);
  const { adminGenealogy } = useSelector((state) => state.adminSlice);
  const { sessionUser, isAuthenticated } = useSelector((state) => state.sessionSlice);

  const zoomIn = () => {
    const boxes = document.getElementsByClassName(sessionUser._id);

    boxes[0].style.scale = parseFloat(boxes[0].style.scale) + 0.2;
  };

  const zoomOut = () => {
    const boxes = document.getElementsByClassName(sessionUser._id);

    boxes[0].style.scale = parseFloat(boxes[0].style.scale) - 0.2;
  };

  const reset = () => {
    const boxes = document.getElementsByClassName(sessionUser._id);

    boxes[0].style.scale = 0.5;
    document.getElementById(sessionUser._id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const boxes = document.getElementsByClassName(sessionUser._id);

    boxes[0].style.scale = 0.5;
    document.getElementById(sessionUser._id).scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <ScrollContainer className="genealogy">
            <h2 className="genealogyButtons-h2">Genealogy</h2>
            <div className="genealogyButtons">
              <span className="zoomButtons" onClick={zoomIn}>
                +
              </span>
              <span className="zoomButtons" onClick={zoomOut}>
                -
              </span>
              <span className="zoomButtons" onClick={reset}>
                Reset
              </span>
            </div>

            <div style={{ width: "50000px", height: "30000px", cursor: "grab", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Tree membersData={genealogy} />
            </div>
          </ScrollContainer>
        </div>
      </div>
    </>
  );
}
