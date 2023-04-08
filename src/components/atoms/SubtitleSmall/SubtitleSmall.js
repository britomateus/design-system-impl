import React from "react";
import PropTypes from "prop-types";
import "./SubtitleSmall.scss";

/**
 * UI component for a Subtitle
 */
const SubtitleSmall = ({ text }) => <p className="subtitle-sm">{text}</p>;

export default SubtitleSmall;

SubtitleSmall.propTypes = {
  /**
   * Subtitle text value
   */
  text: PropTypes.string.isRequired,
};

SubtitleSmall.defaultProps = {
  text: "Subtitle SM",
};
