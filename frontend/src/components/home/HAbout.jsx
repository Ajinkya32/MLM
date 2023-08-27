import React, { useState } from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import EnroleRegister from "./EnroleRegister";
import { useSelector } from "react-redux";

const HAbout = () => {
  const { sessionUser, isAuthenticated } = useSelector((state) => state.sessionSlice);
  const [open, setOpen] = useState(false);
  const [advance, setAdvance] = useState(false);

  const handleEnrole = (index) => {
    if (index === 1) {
      setAdvance(true);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "white",
    border: "none",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
  };

  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading subtitle="Joining Opions" title="There are two option of Joining in this company " />

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {coursesCard.slice(0, 2).map((val, index) => (
                <div className="items">
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                      {/* <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                      </div> */}
                      {val.courTeacher ? (
                        <div className="details">
                          <h3>Course List:</h3>
                          {val.courTeacher?.map((details) => (
                            <>
                              <div className="box">
                                <div className="para">
                                  <h5>{details}</h5>
                                </div>
                              </div>
                              {/* <span>{details.totalTime}</span> */}
                            </>
                          ))}
                        </div>
                      ) : (
                        <div className="details">
                          <h3>Note:</h3>
                          <div className="box">
                            <div className="para">
                              <h6>
                                By booking your ID package in advance, you can only avail it but the course will be available only when your dues are
                                fully paid. Rs.-2600/-
                              </h6>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="price">
                    <h3>{val.priceAll}</h3>
                  </div>
                  <button className="outline-btn" onClick={() => handleEnrole(index)}>
                    ENROLL NOW !
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <OnlineCourses /> */}
      </section>
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="modal-modal-description">
        {isAuthenticated ? (
          <Box className="enrollStyle">
            <p id="parent-modal-description" style={{ textAlign: "center" }}>
              You Have Already Enrolled for this Course !!!
            </p>
          </Box>
        ) : (
          <Box className="enrollStyle2">
            <EnroleRegister setOpen={setOpen} advance={advance} />
          </Box>
        )}
      </Modal>
    </>
  );
};

export default HAbout;
