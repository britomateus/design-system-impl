import React from "react";
import PropTypes from "prop-types";
import "./Paragraph.scss";

/**
 * UI component for a Paragraph
 */
const Paragraph = ({ text }) => <p className="paragraph">{text}</p>;

export default Paragraph;

Paragraph.propTypes = {
  /**
   * Paragraph text value
   */
  text: PropTypes.string.isRequired,
};

Paragraph.defaultProps = {
  text: "Paragraph Text",
};
