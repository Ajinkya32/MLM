import React, { useEffect, useState } from "react";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import moment from "moment";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Box, LinearProgress, Modal, Typography } from "@mui/material";
import axios from "axios";
import ReactPlayer from "react-player";
import Loader from "../../components/Loader/Loader";

import PropTypes from "prop-types";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function AddVideos() {
  const [videos, setVideos] = useState([]);

  const [open, setOpen] = useState(false);

  const [openVideo, setOpenVideo] = useState(false);

  const [data, setData] = useState([...videos]);

  const [searchTerm, setSearchTerm] = useState("");

  const [title, setTitle] = useState("");

  const [video, setVideo] = useState("");

  const [playingVideo, setPlayingVideo] = useState("");

  const [loading, setLoading] = useState(false);

  const [isSuccess, setIsSuccess] = useState(true);
  const [progress, setProgress] = useState(0);
  console.log(progress);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  const style4 = {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
  };

  const handleSearch = () => {
    let oldData = [...videos];

    let filteredData = oldData.filter((obj) => {
      let values = Object.values(obj); // Get all the values from the object
      return values.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
    });

    setData([...filteredData]);
  };

  const getVideos = async () => {
    setLoading(true);
    await axios
      .get(`/api/admin/getVideos`)
      .then(({ data }) => {
        setVideos(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getVideos();
  }, []);

  const postVideo = async (e) => {
    e.preventDefault();
    // setLoading(true);
    const myForm = new FormData();
    setIsSuccess(false);
    myForm.set("title", title);
    myForm.set("video", video);

    axios
      .post(`/api/admin/postVideo`, myForm, {
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 50;
          setProgress(progress);
        },
      })
      .then(({ data }) => {
        setIsSuccess(true);
        console.log(data);
        getVideos();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteVideo = async (id) => {
    setLoading(true);
    await axios
      .post(`/api/admin/deleteVideo`, { id })
      .then((res) => {
        console.log(res);
        getVideos();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const playVideo = (id) => {
    console.log(id);
    let currentVideo = videos.filter((e) => e._id.toString() === id.toString());
    console.log(currentVideo);
    setPlayingVideo(currentVideo[0]);
    setOpenVideo(true);
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="workingPlan">
            <span className="workingPlanTitle">Add Course Videos</span>
            <span className="addVideoButton" onClick={handleOpen}>
              Add Video
            </span>
            <div style={{ display: "flex", width: "95%", marginTop: "30px", marginLeft: "20px", justifyContent: "center" }}>
              <div className="memberList">
                <div>
                  <input className="searchTable" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                  <button onClick={handleSearch}>Search</button>
                </div>

                <Table>
                  <Thead>
                    <Tr>
                      <Th>Video Title</Th>
                      <Th>Video URL</Th>
                      <Th>Date</Th>
                      <Th>Play Video</Th>
                      <Th>Delete Video</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.map((e, index) => {
                      return (
                        <Tr key={index} style={{ marginTop: "10px" }}>
                          <Td>{e.title}</Td>
                          <Td>{e.video}</Td>
                          <Td>{e.createdAt}</Td>
                          <Td>
                            <span style={{ color: "green", cursor: "pointer" }} onClick={() => playVideo(e._id)}>
                              Play Video
                            </span>
                          </Td>
                          <Td>
                            <span style={{ color: "red", cursor: "pointer" }} onClick={() => deleteVideo(e._id)}>
                              Delete
                            </span>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style4}>
          <div className="register w-1/2 h-96 ml-24">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Video
            </Typography>
            <form onSubmit={postVideo} style={{ marginTop: "20px" }}>
              <input type="text" required={true} value={title} placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)}></input>
              <input required={true} type="file" onChange={(e) => setVideo(e.target.files[0])}></input>

              {isSuccess ? (
                <button
                  style={{ marginTop: "20px" }}
                  className="p-2 pl-24 pr-24 clicabledivRegsiter bg-blue-500 h-10 rounded-md text-white  text-xl "
                >
                  Submit
                </button>
              ) : (
                <>
                  <span>Uploading...</span>
                  <LinearProgressWithLabel value={progress} />
                </>
              )}
            </form>
          </div>
        </Box>
      </Modal>

      <Modal open={openVideo} onClose={handleCloseVideo} aria-labelledby="parent-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style4}>
          <ReactPlayer url={playingVideo.video} controls={true} />
        </Box>
      </Modal>
    </>
  );
}
