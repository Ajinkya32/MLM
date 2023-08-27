import React, { useEffect, useState } from "react";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import NonWokingPlanImage from "../../assets/nonWorkingPlan.png";
import axios from "axios";
import { Box, Modal } from "@mui/material";
import ReactPlayer from "react-player";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function Videos() {
  const [videos, setVideos] = useState([]);

  const [openVideo, setOpenVideo] = useState(false);

  const [data, setData] = useState([...videos]);

  const [searchTerm, setSearchTerm] = useState("");

  const [playingVideo, setPlayingVideo] = useState("");

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
    await axios
      .get(`/api/admin/getVideos`)
      .then(({ data }) => {
        setVideos(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVideos();
  }, []);

  const playVideo = (id) => {
    console.log(id);
    let currentVideo = videos.filter((e) => e._id.toString() === id.toString());
    console.log(currentVideo);
    setPlayingVideo(currentVideo[0]);
    setOpenVideo(true);
  };

  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="workingPlan">
            <span className="workingPlanTitle">Course Videos</span>
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
      <Modal open={openVideo} onClose={handleCloseVideo} aria-labelledby="parent-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style4}>
          <ReactPlayer url={playingVideo.video} controls={true} />
        </Box>
      </Modal>
    </>
  );
}
