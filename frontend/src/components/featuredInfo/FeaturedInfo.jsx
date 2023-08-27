import "./featuredInfo.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function FeaturedInfo() {
  const { incentiveFromReferences, referencesMemberId, nonWorkingIncentive } = useSelector((state) => state.userSlice);
  const { sessionUser, isAuthenticated } = useSelector((state) => state.sessionSlice);

  return (
    <div className="featured" style={{ marginBottom: "30px" }}>
      <Link to="/dashboard" className="featuredItem" style={{ backgroundColor: "#00b6d1" }}>
        <span className="featuredTitle">Total Incentive Earned</span>
        <div className="featuredMoneyContainer">
          {sessionUser?.pendingAmount ? (
            <span className="featuredMoney">₹ {incentiveFromReferences + nonWorkingIncentive - sessionUser.pendingAmount}</span>
          ) : (
            <span className="featuredMoney">₹ {incentiveFromReferences + nonWorkingIncentive}</span>
          )}
        </div>
      </Link>

      <Link to="/referencesIncentiveHistory" className="featuredItem" style={{ backgroundColor: "#53A743" }}>
        <span className="featuredTitle">Working Plan Incentive</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹ {incentiveFromReferences}</span>
        </div>
      </Link>

      <Link to="/nonWorkingPlanIncentiveHistory" className="featuredItem" style={{ backgroundColor: "#FFC207" }}>
        <span className="featuredTitle">Non-Working Plan Incentive</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹ {nonWorkingIncentive}</span>
        </div>
      </Link>

      <Link to="/referredMembers" className="featuredItem" style={{ backgroundColor: "#DB3644" }}>
        <span className="featuredTitle">Referred Members Count</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{referencesMemberId.length} Members</span>
        </div>
      </Link>

      <div to="/referredMembers" className="featuredItem" style={{ backgroundColor: "#d545d5" }}>
        <div className="levelDiv">
          <span className="featuredTitle">Leadership Level</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney"> {sessionUser.level}</span>
          </div>
        </div>

        <div className="levelDiv">
          <span className="featuredTitle">Non-Working Level</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney"> {sessionUser.nonWorkingLevel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
