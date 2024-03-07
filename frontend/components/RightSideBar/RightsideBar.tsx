import "./RightsideBar.css";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { activityDetails } from "./activityData";
import AtmCard from "../AtmCard/AtmCard";

export default function RightbarSide() {
  return (
    <>
      <div className="layout">
        <div className="latestactivity">
          <div className="heading">
            <h3>Latest Activity</h3>
            <ArrowCircleRightOutlinedIcon />
          </div>
          {activityDetails.map((values, index) => {
            return (
              <div className="activity">
                <div className="actCont">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "5px",
                      width: "70%",
                    }}
                  >
                    <div className="dot"></div>
                    <div className="activitydate">
                      <p style={{fontWeight: "bold"}}>{values.title}</p>
                      <p
                        style={{
                          color: "#A5A5A5",
                          fontSize: "10px",
                        }}
                      >
                        {values.date}
                      </p>
                    </div>
                  </div>
                  <div className="price">
                    <h4 className="amount">{values.amount}</h4>
                  </div>
                </div>
              </div>
            );
          })}
          {/*  */}
        </div>
        <AtmCard />
        {/*  */}
        <div></div>
      </div>
    </>
  );
}
