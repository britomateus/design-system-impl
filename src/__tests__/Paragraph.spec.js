import React from "react";
import { render } from "@testing-library/react";
import Paragraph from "../components/Paragraph/Paragraph";

describe("Paragraph Tests", () => {
  it("should render paragraph without warning", () => {
    const warningConsole = jest.spyOn(console, "warn");
    render(<Paragraph />);
    expect(warningConsole).not.toHaveBeenCalled();
  });

  it("should render paragraph without errors", () => {
    const errorsConsole = jest.spyOn(console, "error");
    render(<Paragraph />);
    expect(errorsConsole).not.toHaveBeenCalled();
  });

  it("should render paragraph with proper text", () => {
    const paragraphText = "Test Paragraph Small Text";
    const { getByText } = render(<Paragraph text={paragraphText} />);
    expect(getByText(paragraphText)).toBeDefined();
  });

  it("should render paragraph with default text", () => {
    const { getByText } = render(<Paragraph />);
    expect(getByText(Paragraph.defaultProps.text)).toBeDefined();
  });

});
