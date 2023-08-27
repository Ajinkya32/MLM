import React, { useEffect, useState } from "react";
import "./incentiveHistory.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import ReferencesIncentiveTable from "../../components/incentiveTables/ReferencesIncentiveTable";
import ReportChart from "../../components/chart/ReportChart";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function NonWorkingRewards() {
  const { sessionUser } = useSelector((state) => state.sessionSlice);
  const [rewards, setRewards] = useState([]);
  const [data, setData] = useState([...rewards]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    let oldData = [...rewards];

    let filteredData = oldData.filter((obj) => {
      let values = Object.values(obj); // Get all the values from the object
      return values.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
    });

    setData([...filteredData]);
  };

  useEffect(() => {
    setData([...rewards]);
  }, [rewards]);

  useEffect(() => {
    const getRewards = async () => {
      await axios
        .get(`/api/rewards/getNonWorkingRewards`)
        .then((res) => {
          console.log(res);
          let filered = res.data.NonWorkingRewards.filter((e) => e.rewards);
          setRewards(filered);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getRewards();
  }, [sessionUser]);

  const columns = [
    {
      field: "rewards",
      headerName: "Rewards Earned",
      width: 400,
    },
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
            <FeaturedInfo />
            {/* <ReportChart data={referenceIncentiveAnalytics} title="Incentive Earned Analytics" grid dataKey="count" /> */}
            {/* <div className="homeWidgets">
              <ReferencesIncentiveTable props={referencesIncentiveData} title="Incentive From References History" />
            </div> */}

            <div style={{ display: "flex", width: "95%", marginTop: "30px", marginLeft: "20px", justifyContent: "center" }}>
              <div className="memberList">
                <h2>Non-Working Rewards Earned</h2>
                <div>
                  <input className="searchTable" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                  <button onClick={handleSearch}>Search</button>
                </div>

                <Table>
                  <Thead>
                    <Tr>
                      <Th>Rewards Earned</Th>
                      <Th>Date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.map((e, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{e.rewards}</Td>
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
