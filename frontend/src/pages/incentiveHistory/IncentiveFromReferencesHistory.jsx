import React, { useEffect, useState } from "react";
import "./incentiveHistory.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function IncentiveFromReferencesHistory() {
  const { referencesIncentiveData, incentiveFromReferences, referencesMemberId, nonWorkingIncentive } = useSelector((state) => state.userSlice);

  const [data, setData] = useState([...referencesIncentiveData]);

  const [searchTerm, setSearchTerm] = useState("");

  const [last7Days, setLast7Days] = useState("");

  const [month, setMonth] = useState("");

  const [todays, setTodays] = useState("");

  const handleSearch = () => {
    let oldData = [...referencesIncentiveData];

    let filteredData = oldData.filter((obj) => {
      let values = Object.values(obj); // Get all the values from the object
      return values.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
    });

    setData([...filteredData]);
  };

  const getLast7days = () => {
    let earning = 0;
    const cutOffDate = moment().subtract(7, "days");
    const filteredData = referencesIncentiveData.filter((e) => moment(e.createdAt) > cutOffDate);
    filteredData.map((e) => {
      earning = earning + parseInt(e.incentiveEarned);
    });

    setLast7Days(earning);
  };

  const getLast28days = () => {
    let earning = 0;
    const cutOffDate = moment().subtract(28, "days");
    const filteredData = referencesIncentiveData.filter((e) => moment(e.createdAt) > cutOffDate);
    filteredData.map((e) => {
      earning = earning + parseInt(e.incentiveEarned);
    });

    setMonth(earning);
  };

  const getTodays = () => {
    let earning = 0;
    const cutOffDate = moment().subtract(1, "days");
    const filteredData = referencesIncentiveData.filter((e) => moment(e.createdAt) > cutOffDate);
    filteredData.map((e) => {
      earning = earning + parseInt(e.incentiveEarned);
    });

    setTodays(earning);
  };

  useEffect(() => {
    getLast7days();
    getLast28days();
    getTodays();
    setData([...referencesIncentiveData]);
  }, [referencesIncentiveData]);

  const columns = [
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
            <h2>Working Plan Incentive </h2>
            <div className="featured" style={{ marginBottom: "30px", marginTop: "30px" }}>
              <div to="/dashboard" className="featuredItem" style={{ backgroundColor: "#00b6d1" }}>
                <span className="featuredTitle">Total Income</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney">₹ {incentiveFromReferences}</span>
                </div>
              </div>

              <div to="/referredMembers" className="featuredItem" style={{ backgroundColor: "#DB3644" }}>
                <span className="featuredTitle">Todays Income</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney">₹ {todays}</span>
                </div>
              </div>

              <div to="/referencesIncentiveHistory" className="featuredItem" style={{ backgroundColor: "#53A743" }}>
                <span className="featuredTitle">7 days Income</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney">₹ {last7Days}</span>
                </div>
              </div>

              <div to="/nonWorkingPlanIncentiveHistory" className="featuredItem" style={{ backgroundColor: "#FFC207" }}>
                <span className="featuredTitle">This Month Income</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney">₹ {month}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", width: "95%", marginTop: "30px", marginLeft: "20px", justifyContent: "center" }}>
              <div className="memberList">
                <div>
                  <input className="searchTable" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                  <button onClick={handleSearch}>Search</button>
                </div>

                <Table>
                  <Thead>
                    <Tr>
                      <Th>From Member Id</Th>
                      <Th>Incentive Earned</Th>
                      <Th>Date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.map((e, index) => {
                      return (
                        <Tr key={index}>
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
