import React from "react";
import "./MainPage.css";
import walking from "../../../Images/Città Standing.png";
import Standing from "../../../Images/Città Abstract.png";
function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPageBox">
        <div className="MainPageLeft">
          <img src={Standing} alt="Standing" />
        </div>
        <div className="MainPageMiddle">
          <div className="MainPageMiddleHeading">Hi Aparna! Welcome</div>
          <div className="MainPageMiddleContent">
            Thank-you for signing up!! we will get back to you after the final
            verification, at you mail Id
          </div>
        </div>
        <div className="MainPageRight">
          <img src={walking} alt="Waling" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
