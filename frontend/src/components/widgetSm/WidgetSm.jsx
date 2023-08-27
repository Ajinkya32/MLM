import "./widgetSm.css";
import Visibility from "@mui/icons-material/Visibility";
import { useSelector } from "react-redux";
import moment from "moment";

export default function WidgetSm() {
  const { membersData } = useSelector((state) => state.userSlice);
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">New Referred Members</h3>
      <ul className="widgetSmList">
        {membersData.length
          ? membersData.map((e, index) => {
              return (
                <li className="widgetSmListItem" key={index}>
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">{e.memberName}</span>
                    <span className="widgetSmUserTitle">Joined On: {moment(e.createdAt).format("DD/MM/YYYY hh:mm A")}</span>
                  </div>
                  {/* <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                  </button> */}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
