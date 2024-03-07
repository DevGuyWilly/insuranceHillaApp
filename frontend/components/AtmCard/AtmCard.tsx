import "./Atmcard.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function AtmCar() {
  return (
    <>
      <div className="atmCont">
        <h3 style={{}}>Active Cards</h3>
        <div className="atmcard">
          <div className="cardBal"></div>
        </div>
      </div>
    </>
  );
}
