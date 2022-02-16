import React from "react";
import { Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./../common/updateAction";
import Dropdown from "./../Dropdown/Dropdown";

export const Navigation = (props) => {
  const { state, action } = useStateMachine(updateAction);

  const onClick = () => {
    window.STATE_MACHINE_RESET();
    window.location.reload();
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a onClick={onClick} className="navbar-brand page-scroll" href="/">
            <h1 id="thebrand">Checklist GenApp!</h1>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <Dropdown>
            <Link to="/Form01" exact>
              <li className="dropdownInner">ASE-1 Preflight</li>
            </Link>
            <Link to="/Form02" exact>
              <li className="dropdownInner">Delay Objective</li>
            </Link>
            <Link to="/Form03" exact>
              <li className="dropdownInner">Floating Menu Event Objective</li>
            </Link>
            <Link to="/Form04" exact>
              <li className="dropdownInner">Held Toggle Switch Objective</li>
            </Link>
            <Link to="/Form05" exact>
              <li className="dropdownInner">Look At Objective</li>
            </Link>
            <Link to="/Form06" exact>
              <li className="dropdownInner">State Check Objective</li>
            </Link>
            <Link to="/Form07" exact>
              <li className="dropdownInner">
                O<sub>2</sub> Mask Objective
              </li>
            </Link>
            <Link to="/Form08" exact>
              <li className="dropdownInner">UI Select Objective</li>
            </Link>
            <Link to="/Form09" exact>
              <li className="dropdownInner">ETD-101 Objective</li>
            </Link>
            <Link to="/Form010" exact>
              <li className="dropdownInner">Smart Waypoint State Check</li>
            </Link>
            {/* <Link to="/Contact" exact>
              <li className="dropdownInner">Contact</li>
            </Link> */}
          </Dropdown>

          <ul className="nav navbar-nav navbar-right"></ul>
        </div>
      </div>
    </nav>
  );
};
