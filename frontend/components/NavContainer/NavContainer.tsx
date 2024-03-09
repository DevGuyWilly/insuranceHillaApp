import Logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";

export default function NavContainer() {
  return (
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
    </div>
  );
}
