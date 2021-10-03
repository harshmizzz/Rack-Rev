import React from "react";
import "./LandingMain.css";
import bro from "../../../Images/bro.svg";
function LandingMain() {
  return (
    <div className="LandingMain">
      <div className="LandingMainTop">
        <div className="LandingMainLeft">
          <div className="LandingMainLeft1">Rack Rev</div>
          <div className="LandingMainLeft2">
            Wear the confidence you deserve
          </div>
          <div className="LandingMainLeft3">
            You Keep the style <br /> we keep your Trust!!
          </div>
          <div className="LandingMainLeft4">Begin My Journey</div>
        </div>
        <div className="LandingMainRight">
          <img src={bro} alt="bro svg" />
        </div>
      </div>
      <div className="LandingMainBottom">
        <p>Let’s Show the world a style they have never seen before.</p>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 16L16 26L6 16"
            stroke="#CFC4C1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26 6L16 16L6 6"
            stroke="#CFC4C1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default LandingMain;
