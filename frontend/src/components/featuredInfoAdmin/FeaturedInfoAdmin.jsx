import "./featuredInfoAdmin.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function FeaturedInfoAdmin() {
  const { directSalesAdmin, incentiveFromDirectSalesAdmin, incentiveFromReferencesAdmin, membersDataAdmin } = useSelector(
    (state) => state.adminSlice
  );

  return (
    <div className="featuredInfoAdmin">
      <Link to="/incentiveReports" className="featuredItem" style={{ backgroundColor: "#FFC207" }}>
        <span className="featuredInfoAdminTitle">Total Incentive Report</span>
        <div className="featuredInfoAdminMoneyContainer">
          <span className="featuredInfoAdminMoney">₹ {incentiveFromReferencesAdmin}</span>
          {/* <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span> */}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </Link>

      <Link to="/members" className="featuredItem" style={{ backgroundColor: "#DB3644" }}>
        <span className="featuredInfoAdminTitle">Total Members Count</span>
        <div className="featuredInfoAdminMoneyContainer">
          <span className="featuredInfoAdminMoney">{membersDataAdmin.length}</span>
          {/* <span className="featuredMoneyRate">
            -1.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span> */}
        </div>
        {/* <span className="featuredSub">Compared to last month</span> */}
      </Link>
    </div>
  );
}
