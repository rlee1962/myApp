import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";

const Pages = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, []);

  return (
    <div id="formfit">
      <nav className="container">
        <ul className="steps">
          <Link to="/" className="stepUp">
            {" "}
            <li className={location.pathname === "/" ? "active" : ""}>
              Step 1
            </li>
          </Link>

          <Link to="/step2" className="stepBack">
            {" "}
            <li className={location.pathname === "/step2" ? "active" : ""}>
              Step 2
            </li>
          </Link>

          <Link to="/result" className="stepData">
            <li className={location.pathname === "/result" ? "active" : ""}>
              Result
            </li>
          </Link>
        </ul>
      </nav>
      <Route exact path="/" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/result" component={Result} />
    </div>
  );
};

function Form1() {
  return (
    <StateMachineProvider>
      {/* <DevTool /> */}
      <div id="about">
        <div className="container">
          <div className="form-container">
            <div className="col-xs-12 col-md-6 left-card">
              <Router>
                <Pages />
              </Router>
            </div>
            <div className="col-xs-12 col-md-6 right-card">
              <h3>Delay Objective</h3>
              <Router>
                <Result />
              </Router>
            </div>
          </div>
        </div>
      </div>
    </StateMachineProvider>
  );
}

export default Form1;
