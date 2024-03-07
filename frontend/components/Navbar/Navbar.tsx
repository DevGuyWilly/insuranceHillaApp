import { Link } from "react-router-dom";
import { navBarDetail } from "./NavbarData";
import { Typography } from "@mui/material";

export default function Navbar() {
  return (
    <>
      {navBarDetail.map((items, index) => {
        // })
        return (
          <li
            value={index}
            style={{
              //   border: "1px solid red",

              //   width: "100%",
              //   height: "50px",
              display: "flex",
              padding: "10px",
              flexDirection: "row",
              justifyContent: "start",
              marginBottom: "20px",
            }}
          >
            <Link
              style={{
                // border: "1px solid green",
                display: "flex",
                flexDirection: "row",
              }}
              to={items.path}
            >
              <img
                src={items.icon}
                style={{
                  paddingRight: "15px",
                  //   border: "1px solid",
                  alignItems: "center",
                }}
                alt=""
              />
              <Typography
                variant="body1"
                color="initial"
                // border={"1px solid"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                {items.title}
              </Typography>
            </Link>
          </li>
        );
      })}
    </>
  );
}
