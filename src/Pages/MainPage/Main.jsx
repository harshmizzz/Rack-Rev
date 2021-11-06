import Hamburger from "../../Components/LandingPage/Header/Hamburger";
import React from "react";
import Media from "react-media";
import MainPage from "../../Components/MainPage/MainComponent/MainPage";
import HeaderMain from "../../Components/MainPage/Header/HeaderMain";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InDevelopment from "../../Components/MainPage/DevelopmentError/InDevelopment";
function Main() {
  return (
    <Router>
      <div>
        <Media query={{ maxWidth: 800 }}>
          {(matches) => (matches ? <Hamburger /> : <HeaderMain />)}
        </Media>
        <Switch>
          <Route path="/Dashboard">
            <MainPage />
          </Route>
          <Route path="/InDevelopment">
            <InDevelopment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
