import Hamburger from "../../Components/LandingPage/Header/Hamburger";
import React from "react";
import Media from "react-media";
import MainPage from "../../Components/MainPage/MainComponent/MainPage";
import HeaderMain from "../../Components/MainPage/Header/HeaderMain";

function Main() {
  return (
    <div>
      <Media query={{ maxWidth: 800 }}>
        {(matches) => (matches ? <Hamburger /> : <HeaderMain />)}
      </Media>
      <MainPage />
    </div>
  );
}

export default Main;
