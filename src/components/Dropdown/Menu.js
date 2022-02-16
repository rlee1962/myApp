import React, { useRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { classList } from "../../utils/helpers";

const DropdownMenu = (props) => {
  const {
    children,
    state,
    dropdownContainer,
    enterDuration,
    exitDuration,
    ...rest
  } = props;
  const nodeRef = useRef();
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={state}
      timeout={{
        enter: 0,
        exit: durationToInt(exitDuration),
      }}
      classNames={{
        enter: "opacity-0 scale-75",
        enterDone: classList(
          "ease-out opacity-100 scale-100",
          dropdownSpeedDuration(enterDuration)
        ),
        exit: classList(
          "ease-in opacity-0 scale-75",
          dropdownSpeedDuration(exitDuration)
        ),
      }}
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={
          dropdownContainer.className
            ? dropdownContainer.className
            : classList(
                dropdownDirection(dropdownContainer.direction),
                "absolute mt-2 w-48 rounded-md shadow-lg z-10 transform transition"
              )
        }
        {...rest}
      >
        <div className="rounded-md bg-white shadow-xs">{children}</div>
      </div>
    </CSSTransition>
  );
};

DropdownMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  state: PropTypes.bool.isRequired,
  dropdownContainer: PropTypes.shape({
    direction: PropTypes.string,
    width: PropTypes.string,
    marginTop: PropTypes.string,
    className: PropTypes.string,
  }),
  enterDuration: PropTypes.string,
  exitDuration: PropTypes.string,
  buttonText: PropTypes.string,
};

DropdownMenu.defaultProps = {
  state: false,
  dropdownContainer: {
    direction: "default",
    width: "w-48",
    marginTop: "mt-2",
  },
  enterDuration: "default",
  exitDuration: "fast",
};

export default DropdownMenu;

const durationToInt = (duration) => {
  switch (duration) {
    case "slow":
      return 300;
    case "fast":
      return 75;
    case "normal":
    default:
      return 100;
  }
};

const dropdownSpeedDuration = (duration) => {
  switch (duration) {
    case "slow":
      return "duration-300";
    case "fast":
      return "duration-75";
    case "normal":
    default:
      return "duration-100";
  }
};

const dropdownDirection = (direction) => {
  switch (direction) {
    case "left":
      return "origin-top-left left-0";
    case "right":
    default:
      return "origin-top-right right-1";
  }
};
