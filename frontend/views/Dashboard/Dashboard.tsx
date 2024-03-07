import Logo from "../../assets/logo.png";
import Navbar from "../../components/Navbar/Navbar";
import "../../themes/insuranceapp/styles.css";
import addIcon from "../../assets/add.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import filterIcon from "../../assets/filterIcon.png";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RightbarSide from "../../components/RightSideBar/RightsideBar";
import Hightchart from "../../components/HighChart/HighChart";
import * as Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
};

export default function Dashboard() {
  return (
    <div className="mainLayout">
      <div
        style={{
          height: "100vh",
          width: "20%",
          backgroundColor: "#373737",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "space-between",
        }}
      >
        <div
          className="LogoAndName"
          style={{
            // border: "1px solid red",
            padding: "20px",
            height: "30%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // alignContent: "center",
            alignItems: "center",
            zIndex: 100,
          }}
        >
          <img style={{ width: "50px", height: "50px" }} src={Logo} alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "15px",
              //   border: "1px solid",
            }}
          >
            <h2 style={{ color: "white", fontSize: "20px" }}>ASSURANCE +</h2>
            <h3
              style={{
                letterSpacing: "10px",
                color: "white",
                fontSize: "10px",
              }}
            >
              INSURANCE
            </h3>
          </div>
        </div>
        <div
          className="MenuItems"
          style={{
            // border: "1px solid blue",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            // padding: "20px",
            height: "90%",
          }}
        >
          <Navbar />
        </div>
        {/*  */}
      </div>
      <div className="middleSection">
        <div className="info">
          <h1>Dasboard</h1>
          <h4>Check and maintain your insurance status</h4>
        </div>

        {/* CARD */}
        <div className="cardContainer">
          <div className="card one">
            <div className="cardDetails">
              <div className="icon">
                <LocalHospitalIcon />
              </div>
              <p>Health</p>
            </div>
            <div className="amount">
              <h2>$3,650.00</h2>
            </div>
          </div>
          <div className="card two">
            <div className="cardDetails">
              <div className="icon" style={{ backgroundColor: "#FFC177" }}>
                <LocalHospitalIcon />
              </div>
              <p>Car Insurance</p>
            </div>
            <div className="amount">
              <h2>$3,650.00</h2>
            </div>
          </div>
          <div className="card three">
            <div className="cardDetails">
              <div className="icon" style={{ backgroundColor: "#73DFB2" }}>
                <LocalHospitalIcon />
              </div>
              <p>Car Insurance</p>
            </div>
            <div className="amount">
              <h2>$3,650.00</h2>
            </div>
          </div>
          <div className="addCard">
            <img src={addIcon} alt="" />
          </div>
        </div>
        {/*  */}
        <div className="bar">
          <div className="left">
            <h4>
              Family <br /> Insurance
            </h4>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
            <h4>$43,000.00</h4>
            <img src={filterIcon} alt="" />
          </div>
          <div className="right">
            <h4 style={{ color: "white" }}>Top Up</h4>
          </div>
        </div>
        {/*  */}
        <Hightchart />
      </div>
      <RightbarSide />
    </div>
  );
}
