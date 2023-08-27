import { Box, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./tree.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Tree = ({ membersData }) => {
  const array = [membersData];

  return <div className="tree">{TreeRendering(array)}</div>;
};

const TreeRendering = (array) => {
  const { sessionUser } = useSelector((state) => state.sessionSlice);
  const [open, setOpen] = useState(false);

  const [userData, setUserData] = useState([]);

  console.log(userData);

  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 550,
  //   bgcolor: "white",
  //   border: "none",
  //   boxShadow: 24,
  //   borderRadius: "8px",
  //   p: 4,
  // };

  const handleClick = async (memberId) => {
    await axios
      .post(`/api/analytics/getAnalyticsUser`, { memberId })
      .then(({ data }) => {
        console.log(data);
        setUserData(data);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ul>
        {array.length > 0 &&
          array.map((item, index) => (
            <li className={item.memberId} key={index} style={{ scale: 0.5 }}>
              {item.memberId !== 1 && (
                <>
                  {item.branch === "branchA" ? <div>Branch A</div> : null}
                  {item.branch === "branchB" ? <div>Branch B</div> : null}
                  {item.branch === "branchC" ? <div>Branch C</div> : null}
                </>
              )}

              <div
                id={item.memberId}
                className="tree-box"
                style={
                  item.memberId.toString() === sessionUser._id.toString()
                    ? { backgroundColor: "#dc3545", color: "white" }
                    : null || item.branch === "branchC"
                    ? { backgroundColor: "#1eb2a6", color: "white" }
                    : null
                }
                onClick={() => handleClick(item.memberId)}
              >
                <div className="tree-elements-inside">
                  <span> Level {item.level}</span>
                </div>
                <div className="tree-elements-inside">{item.memberName}</div>
                <div className="tree-elements-inside">Member Id: {item.memberId}</div>
                {/* <div style={{ marginTop: "10px", fontSize: "12px" }}>{item.memberId}</div> */}
              </div>

              {item.referencesMemberId && item.referencesMemberId.length > 0 ? TreeRendering(item.referencesMemberId) : ""}
            </li>
          ))}
      </ul>

      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="modal-modal-description">
        <Box className="memberDetailsTree">
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: "center", marginBottom: "20px" }}>
            Member Info
          </Typography>
          <div className="memberInfo">
            <span className="title">
              Member Id: <span className="info">{userData.memberInfo?._id}</span>
            </span>
            <span className="title">
              Sponsor Id: <span className="info">{userData.memberInfo?.referedByMemberId}</span>
            </span>
            <span className="title">
              Name: <span className="info">{userData.memberInfo?.memberName}</span>
            </span>
            <span className="title">
              Email: <span className="info">{userData.memberInfo?.email}</span>
            </span>
            <span className="title">
              Contact: <span className="info">{userData.memberInfo?.contactNumber}</span>
            </span>
            <span className="title">
              Working Level: <span className="info">{userData.memberInfo?.level}</span>
            </span>
            <span className="title">
              Non-Working Level: <span className="info">{userData.memberInfo?.nonWorkingLevel}</span>
            </span>
            <span className="title">
              Working Plan Incentive Earned: <span className="info">Rs {userData.memberInfo?.incentiveEarned}</span>
            </span>
            <span className="title">
              Non-Working Plan Incentive Earned: <span className="info">Rs {userData.nonWorkingIncentive}</span>
            </span>
            <span className="title">
              Total Incentive Earned:
              {userData?.memberInfo?.pendingAmount ? (
                <span className="info">
                  Rs {userData.memberInfo?.incentiveEarned + userData.nonWorkingIncentive - userData.memberInfo?.pendingAmount}
                </span>
              ) : (
                <span className="info">Rs {userData.memberInfo?.incentiveEarned + userData.nonWorkingIncentive}</span>
              )}
            </span>
            <span className="title">
              Referred Members Count: <span className="info">{userData.membersJoined}</span>
            </span>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Tree;
