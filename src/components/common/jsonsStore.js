import React from "react";
import { StateMachineProvider, createStore } from "little-state-machine";

createStore({
  ase1Preflight: {
    taskName: "ASE-1 Preflight",
    taskDescription:
      "This checklist outlines the responsibilities and equipment operating procedures to be performed by the ASE 1 on the RIVET JOINT Baseline 12 aircraft.",
    directory: "RJ ASE1.ASE1",
    supportedSimModes: ["Training"],
    taskLevels: [
      "LSV_Front_Section_MaintenanceRack",
      "LSV_ELINT-Interactables",
      "LSV_Processor-CDRacks",
    ],
    supportingLevels: ["RJ_ASE1_Preflight"],
    forcedLinear: true,
    objectives: [
      {
        description: "Setup actors to default, should be hidden",
        subDescription:
          "Do not energize any equipment that has a Red X condition\n Notify crew of any conditions affecting mission accomplishment",

        bindEvent: "Highlighted Doc Opened",
        invisible: true,
        hidden: true,
        objectiveClass: "State Check Objective",
        actors: [
          {
            actor: "Ladder",
            preSetState: 1,
          },
        ],
        actorControls: [
          {
            actor: "Player",
            preControls: [
              {
                cmd: "Hud-Notify - 111",
                args: true,
              },
              {
                cmd: "DocumentHighlight - 222",
                args: true,
              },
            ],
            postControls: [
              {
                cmd: "Hud-Notify - 111",
                args: false,
              },
              {
                cmd: "DocumentHighlight - 222",
                args: false,
              },
            ],
          },
        ],
      },
    ],
  },
  delayObjective: {
    taskName: "ASE 1 Off Watch Checklist is Complete",
    invisible: true,
    objectives: [
      {
        objectiveClass: "Delay Objective",
        actors: [{ duration: 5 }],
      },
    ],
  },
  floatingMenuEvent: {
    taskName: "AFTO Form 781s",
    taskDescription:
      "Do not energize any equipment that has a Red X condition notify Crew of any Condition affecting Missing Accomplishment.",
    objectiveClass: "Floating Menu Events Objective",
    bindEvent: "Highlighted Doc Opened",

    objectives: [
      {
        defaultActors: [
          { actor: "Player", cmd: "Hud Notification", args: true },
        ],
        action: "Review",
        document1: "AFTO Form 781s",
        document2: "AFTO Form 781s",
        postControls: [{ cmd: "Hud Notification", args: true }],
      },
    ],
  },
  heldToggleSwitch: {
    taskName: "Held Toggle Switch Objective",
    taskDescription:
      "6A. Mission Power Control Panel: Turn on 60 Hz Power Control Switches No 2. and No 3.",

    objectives: [
      {
        objectiveClass: "Held Toggle Switch Objective",
        defaultActors: [
          {
            actor: "Mission PowerControl",
            cmd: "Set Information",
            arg: 2,
          },
        ],
      },
    ],
  },
  lookAtObjective: {
    taskName: "2A2. Check 28 VDC Volt / Load Meters",
    objectiveClass: "Look at Objective",
    objectives: [
      {
        defaultActors: [{ actor: "ASE1 Preflight Look at 28VDC Voltmeter" }],
      },
    ],
  },
  stateCheck: {
    description: "3A. Processor Rack CBP: 28 VDC (UP)",
    subDescription:
      "Maint Sta Pwr Ctrl (UP)\n Maint Sta Supply Pwr (UP)\n Posn 14 Supply Pwr (UP)\n Posn 17 Supply Pwr (UP)",

    objectives: [
      {
        objectiveClass: "State Check Objective",
        description: "my description",

        actors: [
          {
            actor:
              "Processor RackCircuit Breaker Panel MaintSta Supply Pwr 28VDC",
            waitState: true,
            enum: "EToggle Switch-2 State",
          },
        ],
      },
    ],
  },
  o2MaskObjective: {
    description: "ASE1 Preflight Oxygen Mask",
    subDescription:
      "25A3. Remove Oxygen Mask from Quick Don Bag, Connect Oxygen Mask hose to workstation",
    bindEvent: "Hose Attached",

    objectives: [
      {
        objectiveClass: "O₂ Mask Objective",
        invisible: true,
        hidden: true,
        defaultActors: [
          {
            actor: "Maintenance Station Oxygen Hose 2",
            preCmd: "Highlight",
            preArgs: true,
            postCmd: "Highlight",
            postArgs: false,
          },
        ],
      },
    ],
  },
  uISelect: {
    description: "NOTE: Maintenance Station",
    subDescription:
      "If power is to be applied to MRK's 500/501, LCS must be operating. If LCS is operated on the ground, Check LCS inlets must have cooling applied",
    objectives: [
      {
        objectiveClass:
          "If power is to be applied to MRK's 500/501, LCS must be operating. If LCS is operated on the ground, Check LCS inlets must have cooling applied",
        defaultActors: [
          {
            actor: "ASE3 Preflight General UI Select",
            overrideMaint:
              "NOTE: If power is to be applied to MRK's 500/501, LCS must be operating. If LCS is operated on the ground, Check LCS inlets must have cooling applied",
            overrideButton: "ACKNOWLEDGED",
            scrollBlock: true,
          },
        ],
      },
    ],
  },
  eTD101Objective: {
    description: "Touchscreen Display ETD101 Maintenance Rack 2",
    subDescription: "24A2. Interphone: ETD101: PVT INTPH (Monitor)",
    bindEvent: "PVT INT PH",
    objectives: [
      {
        objectiveClass: "ETD101 Objective",
        defaultActors: [
          {
            actor: "Touchscreen Display ETD101 Maintenance Rack 2",
            preCmd: "Enable",
            preArgs: true,
            postCmd: "Enable",
            postArgs: false,
          },
        ],
      },
    ],
  },
  smartWaypointState: {
    description: "Large Software Box 3",
    subDescription: "9. Load Software (Filer Software Box)",
    objectives: [
      {
        initialWaypoint: "Large Software Box 3",
        defaultActors: [
          {
            actor: "HSDC A Data",
            slotuid: "HSDC A Data Slot",
            preCmd: "Enable",
            preArgs: true,
            postCmd: "Enable",
            postArgs: false,
            waitState: 1,
          },
        ],
      },
    ],
  },
});

function jsonStore() {
  return (
    <StateMachineProvider>
      <ase1Preflight />
      <delayObjective />
      <floatingMenuEvent />
      <heldToggleSwitch />
      <lookAtObjective />
      <stateCheck />
      <o2MaskObjective />
      <uISelect />
      <eTD101Objective />
      <smartWaypointState />
    </StateMachineProvider>
  );
}

export default jsonStore;
