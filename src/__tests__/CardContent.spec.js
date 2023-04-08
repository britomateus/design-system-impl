import React from "react";
import { render } from "@testing-library/react";
import CardContent from "../components/CardContent/CardContent";

describe("Card Content Tests", () => {
  it("should render card content with heading proper text", () => {
    const headingText = "Heading Text Test";
    const { getByText } = render(<CardContent headingText={headingText} />);
    expect(getByText(headingText)).toBeDefined();
  });

  it("should render card content with subtitle proper text", () => {
    const subtitleText = "Subtitle Text Test";
    const { getByText } = render(<CardContent subtitleText={subtitleText} />);
    expect(getByText(subtitleText)).toBeDefined();
  });

  it("should render card content with paragraph proper text", () => {
    const paragraphText = "Paragraph Text Test";
    const { getByText } = render(<CardContent paragraphText={paragraphText} />);
    expect(getByText(paragraphText)).toBeDefined();
  });

  it("should render card content with button proper label", () => {
    const buttonLabel = "Button Label Test";
    const { getByText } = render(<CardContent buttonLabel={buttonLabel} />);
    expect(getByText(buttonLabel)).toBeDefined();
  });

  describe("Validating Default Values", () => {
    it('should render card content with default values', () => {
        const { getByText } = render(<CardContent />);
    
        expect(getByText(CardContent.defaultProps.headingText)).toBeDefined();
        expect(getByText(CardContent.defaultProps.subtitleText)).toBeDefined();
        expect(getByText(CardContent.defaultProps.paragraphText)).toBeDefined();
        expect(getByText(CardContent.defaultProps.buttonLabel)).toBeDefined();
      });
  })
});
