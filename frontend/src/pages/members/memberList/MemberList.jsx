import "./memberList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../../dummydata";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import HeaderDashboard from "../../../components/common/header/HeaderDashboard";
import moment from "moment";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Box, Modal, Typography } from "@mui/material";
import EnroleRegister2 from "../../../components/home/EnroleRegister2";

export default function MemberList() {
  const { membersDataAdmin } = useSelector((state) => state.adminSlice);
  const [data, setData] = useState([...membersDataAdmin]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
  };

  const handleSearch = () => {
    let oldData = [...membersDataAdmin];

    let filteredData = oldData.filter((obj) => {
      let values = Object.values(obj); // Get all the values from the object
      return values.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
    });

    setData([...filteredData]);
  };

  useEffect(() => {
    setData(membersDataAdmin);
  }, [membersDataAdmin]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "memberName",
      headerName: "Member Name",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.memberName}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      width: 200,
    },
    {
      field: "level",
      headerName: "level",
      width: 100,
    },
    {
      field: "incentiveEarned",
      headerName: "Incentive Earned",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Date Of Joining",
      width: 250,
      valueFormatter: (params) => moment(params?.value).format("DD/MM/YYYY hh:mm A"),
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/member/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="memberList">
            <h2>Members Data</h2>
            <span className="addVideoButton" onClick={handleOpen}>
              Add User
            </span>
            <div>
              <input className="searchTable" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
              <button onClick={handleSearch}>Search</button>
            </div>

            <Table>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Member Name</Th>
                  <Th>Email</Th>
                  <Th>Contact Number</Th>
                  <Th>Level</Th>
                  <Th>Incentive Earned</Th>
                  <Th>Date Of Joining</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((e, index) => {
                  return (
                    <Tr key={index}>
                      <Td>{e._id}</Td>
                      <Td>{e.memberName}</Td>
                      <Td>{e.email}</Td>
                      <Td>{e.contactNumber}</Td>
                      <Td>{e.level}</Td>
                      <Td>{e.incentiveEarned}</Td>
                      <Td>{moment(e.createdAt).format("DD/MM/YYYY")}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box className="enrollStyle3">
            <EnroleRegister2 setOpen={setOpen} />
          </Box>
        </Box>
      </Modal>
    </>
  );
}
