import React, { useEffect, useState } from "react";
import "./incentiveHistory.css";
import ReferencesIncentiveTable from "../../components/incentiveTables/ReferencesIncentiveTable";
import ReportChart from "../../components/chart/ReportChart";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import FeaturedInfoAdmin from "../../components/featuredInfoAdmin/FeaturedInfoAdmin";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function IncentiveHistoryAdmin() {
  const { referencesIncentiveDataAdmin } = useSelector((state) => state.adminSlice);
  const [data, setData] = useState([...referencesIncentiveDataAdmin]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    let oldData = [...referencesIncentiveDataAdmin];

    let filteredData = oldData.filter((obj) => {
      let values = Object.values(obj); // Get all the values from the object
      return values.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
    });

    setData([...filteredData]);
  };

  useEffect(() => {
    setData(referencesIncentiveDataAdmin);
  }, [referencesIncentiveDataAdmin]);

  const columns = [
    { field: "memberId", headerName: "Member Id", width: 400 },
    {
      field: "earnedFromMemberId",
      headerName: "Earned From Member Id",
      width: 400,
    },
    { field: "incentiveEarned", headerName: "Incentive Earned", width: 200 },
    {
      field: "createdAt",
      headerName: "Date",
      width: 200,
      valueFormatter: (params) => moment(params?.value).format("DD/MM/YYYY hh:mm A"),
    },
  ];

  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="incentiveHistory">
            <div style={{ display: "flex", width: "95%", justifyContent: "center" }}>
              <div className="memberList">
                <h2>Working Incentive Reports</h2>
                <div>
                  <input className="searchTable" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                  <button onClick={handleSearch}>Search</button>
                </div>

                <Table>
                  <Thead>
                    <Tr>
                      <Th>Member Id</Th>
                      <Th>From Member Id</Th>
                      <Th>Incentive Earned</Th>
                      <Th>Date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.map((e, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{e.memberId}</Td>
                          <Td>{e.earnedFromMemberId}</Td>
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
        </div>
      </div>
    </>
  );
}
