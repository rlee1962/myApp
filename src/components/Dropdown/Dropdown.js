import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "./Menu";
import useDropdown from "./useDropdown";

const Dropdown = (props) => {
  const { buttonText, children } = props;
  const [open, setOpen, dropdownContainer] = useDropdown();
  return (
    <div className="relative inline-block" ref={dropdownContainer}>
      <button className="dropdownBtn" onClick={() => setOpen((prev) => !prev)}>
        {buttonText}
      </button>
      <div className="relative">
        <DropdownMenu state={open}>{children}</DropdownMenu>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.object.isRequired,
};

Dropdown.defaultProps = {
  buttonText: "Select a Form",
};

export default Dropdown;
