export default function updateAction(globalState, payload) {
  return {
    ...globalState,
    ase1Preflight: {
      ...payload,
    },
    delayObjective: {
      ...payload,
    },
    floatingMenuEvent: {
      ...payload,
    },
    heldToggleSwitch: {
      ...payload,
    },
    lookAtObjective: {
      ...payload,
    },
    stateCheck: {
      ...payload,
    },
    o2MaskObjective: {
      ...payload,
    },
    uISelect: {
      ...payload,
    },
    eTD101Objective: {
      ...payload,
    },
    smartWaypointState: {
      ...payload,
    },
  };
}
