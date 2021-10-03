import React from "react";
import Media from "react-media";
import Hamburger from "../../Components/LandingPage/Header/Hamburger";
import Header from "../../Components/LandingPage/Header/Header";
import LandingMain from "../../Components/LandingPage/LandingMain/LandingMain";
import HowDoesItWork from "../../Components/LandingPage/How Does It Work/HowDoesItWork";
import VerticalCarousel from "../../Components/LandingPage/Vertical Caraousel/VerticalCarousel";
import WhyRackRev from "../../Components/LandingPage/Why Rack Rev/WhyRackRev";
import WhatSpecial from "../../Components/LandingPage/Whats Special/WhatSpecial";
import Footer from "../../Components/LandingPage/Footer/Footer";
function LandingPage() {
  return (
    <div className="LandingPage">
      <Media query={{ maxWidth: 800 }}>
        {(matches) => (matches ? <Hamburger /> : <Header />)}
      </Media>
      <LandingMain />
      <HowDoesItWork />
      <VerticalCarousel />
      <WhyRackRev />
      <WhatSpecial />
      <Footer />
    </div>
  );
}

export default LandingPage;
