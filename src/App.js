import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignUp from "./Pages/SignUp/SignUp.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={LandingPage} />
          <Route path="/Signup" exact component={SignUp} />
          <Route path="/profile" exact>
            <SignUp />
          </Route>
          <Route path="/preferences" exact>
            <SignUp />
          </Route>
          <Route path="/feedback" exact>
            <SignUp />
          </Route>
          <Route path="/login" exact>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
