import React, { useState } from "react";
import { useStateMachine } from "little-state-machine";
import { saveAs } from "@progress/kendo-file-saver";
import jsonStore from "./../common/jsonsStore";
import updateAction from "./../common/updateAction";

const Result = (props) => {
  const { state } = useStateMachine(updateAction);
  console.log(state.stateCheck);

  const submitForm = () => {
    const blob = new Blob([JSON.stringify(state.ase1Preflight, null, "\t")], {
      "Content-Type": "application/json" + JSON.stringify(state.stateCheck, null, "\t"),
    });

    const slob =
      "data:application/json," +
      JSON.stringify(state.ase1Preflight, null, "\t");
    saveAs(blob, "data.json");
    console.log("Listening:", state.stateCheck);
  };

  return (
    <div className="container">
      <pre id="results">{JSON.stringify(state.stateCheck, null, 2)}</pre>
      <button type="submit" onClick={submitForm}>
        Save &#8595;
      </button>
    </div>
  );
};

export default Result;
