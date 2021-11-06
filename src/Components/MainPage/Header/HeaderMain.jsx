import React, { useState } from "react";
import "./HeaderMain.css";
import { Link } from "react-scroll";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
function HeaderMain() {
  const [Drop, setDrop] = useState(false);
  const toggle = () => setDrop((value) => !value);
  return (
    <div className="HeaderMain">
      <div className="HeaderMainLeft">
        <div className="HeaderMainLogo" onClick={() => (window.location = "/")}>
          <p>RackRev</p>
        </div>
        <div className="HeaderMainLeftItems">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            className="active navItems"
            to="Home"
          >
            <p>Wardrobe</p>
          </Link>
          <Link spy={true} smooth={true} className="active navItems" to="Home">
            <p>Recommendations</p>
          </Link>
          <Link spy={true} smooth={true} className="active navItems" to="Home">
            <p>Outfit</p>
          </Link>
          <Link spy={true} smooth={true} className="active navItems" to="Home">
            <p>Schedule</p>
          </Link>
        </div>
      </div>
      <div
        className="HeaderMainRight"
        // onClick={() => {
        //   setDrop(true);
        // }}
        onClick={toggle}
      >
        <AccountCircleOutlinedIcon />
        <div>
          {/* <p>{auth.currentUser ? auth.currentUser.displayName : ""}</p> */}
          <p>Aparna</p>
          <div className="MainNavLine"></div>
        </div>
      </div>
      <div className={Drop ? "HeaderMainOn" : "HeaderMainOff"}>
        <p
          onClick={() => {
            window.location = "/InDevelopment";
          }}
        >
          Profile
        </p>
        <p
          onClick={() => {
            window.location = "/InDevelopment";
          }}
        >
          Measurements
        </p>
        <p
          onClick={() => {
            window.location = "/InDevelopment";
          }}
        >
          Settings
        </p>
        <p
          onClick={() => {
            window.location = "/InDevelopment";
          }}
        >
          Contact us
        </p>
        <p>Sign out</p>
      </div>
    </div>
  );
}

export default HeaderMain;
