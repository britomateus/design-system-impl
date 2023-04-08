import React from "react";
import PropTypes from "prop-types";
import "./Shape.scss";

/**
 * UI component for a Shape
 */
const Shape = ({ content }) => <div className="shape"> {content} </div>;

export default Shape;

Shape.propTypes = {
  /**
   * Content value object
   */
  content: PropTypes.object,
};

Shape.defaultProps = {
  content: <p>Default Shape Content</p>,
};
