import "./dashboard.css";
import ReportChart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import ReferencesIncentiveTable from "../../components/incentiveTables/ReferencesIncentiveTable";
import WidgetSm from "../../components/widgetSm/WidgetSm";

import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

import HeaderDashboard from "../../components/common/header/HeaderDashboard";

export default function Dashboard() {
  const { referencesIncentiveData, referenceIncentiveAnalytics, directSalesIncentiveData, directSalesIncentiveAnalytics, loading } = useSelector(
    (state) => state.userSlice
  );

  return loading ? (
    <Loader />
  ) : (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="home">
            <FeaturedInfo />
            <div></div>
            <div className="homeWidgets">
              <WidgetSm />
              <ReferencesIncentiveTable props={referencesIncentiveData} title="Incentive History" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
