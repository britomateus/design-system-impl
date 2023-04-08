import React from "react";
import PropTypes from "prop-types";
import "./ButtonPrimary.scss";

/**
 * Primary UI for a Button component
 */
const ButtonPrimary = ({ label, pressed }) => {
  return (
    <button className={`btn-primary ${pressed ? "pressed" : ""}`}>
      {label}
    </button>
  );
};

export default ButtonPrimary;

ButtonPrimary.propTypes = {
  /**
   * Button label value
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional field to set the pressed button behavior
   */
  pressed: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  label: "Button Label",
  pressed: false,
};
