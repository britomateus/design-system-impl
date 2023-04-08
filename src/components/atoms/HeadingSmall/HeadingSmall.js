import React from "react";
import PropTypes from "prop-types";
import "./HeadingSmall.scss";

/**
 * UI component for a Heading
 */
const HeadingSmall = ({ text }) => <p className="heading-sm">{text}</p>;

export default HeadingSmall;

HeadingSmall.propTypes = {
  /**
   * Heading text value
   */
  text: PropTypes.string.isRequired,
};

HeadingSmall.defaultProps = {
  text: "Heading SM",
};
