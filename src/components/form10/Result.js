import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./../common/updateAction";

const Result = (props) => {
  const { state } = useStateMachine(updateAction);
  console.log(state.smartWaypointState);

  const submitForm = () => {
    const blob = new Blob([JSON.stringify(state.ase1Preflight, null, "\t")], {
      "Content-Type":
        "application/json" +
        JSON.stringify(state.smartWaypointState, null, "\t"),
    });
  };

  return (
    <div className="container">
      <pre id="results">
        {JSON.stringify(state.smartWaypointState, null, 2)}
      </pre>
      <button type="submit" onClick={submitForm}>
        Save &#8595;
      </button>
    </div>
  );
};

export default Result;
