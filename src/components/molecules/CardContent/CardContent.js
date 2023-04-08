import React from "react";
import PropTypes from "prop-types";
import "./CardContent.scss";
import Shape from "../../atoms/Shape/Shape";
import HeadingSmall from "../../atoms/HeadingSmall/HeadingSmall";
import SubtitleSmall from "../../atoms/SubtitleSmall/SubtitleSmall";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ButtonPrimary from "../../atoms/ButtonPrimary/ButtonPrimary";

/**
 * UI component for a card content
 */
const CardContent = ({
  headingText,
  subtitleText,
  paragraphText,
  buttonLabel,
}) => (
  <Shape
    content={
      <>
        <div className="cardContent">
          <HeadingSmall className="heading" text={headingText}></HeadingSmall>
          <SubtitleSmall
            className="subtitle"
            text={subtitleText}
          ></SubtitleSmall>
          <Paragraph className="paragraph" text={paragraphText}></Paragraph>
          <ButtonPrimary className="button" label={buttonLabel}></ButtonPrimary>
        </div>
      </>
    }
  ></Shape>
);

export default CardContent;

CardContent.propTypes = {
  /**
   * Heading text value
   */
  headingText: PropTypes.string.isRequired,
  /**
   * Subtitle text value
   */
  subtitleText: PropTypes.string.isRequired,
  /**
   * Paragraph text value
   */
  paragraphText: PropTypes.string.isRequired,
  /**
   * Button Label value
   */
  buttonLabel: PropTypes.string.isRequired,
};

CardContent.defaultProps = {
  headingText: "Heading SM",
  subtitleText: "Subtitle SM",
  paragraphText: "Paragraph Text",
  buttonLabel: "Button Label",
};
