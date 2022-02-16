import React from "react";
import { useStateMachine } from "little-state-machine";
import { StateMachineProvider } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import updateAction from "./../common/updateAction";

function devTool() {
  return (
    <StateMachineProvider>
      {process.env.NODE_ENV !== "production" && <DevTool />}
    </StateMachineProvider>
  );
}

export default devTool;
