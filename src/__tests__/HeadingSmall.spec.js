import React from "react";
import { render } from "@testing-library/react";
import HeadingSmall from "../components/HeadingSmall/HeadingSmall";

describe("Heading Small Tests", () => {
  it("should render heading without warning", () => {
    const warningConsole = jest.spyOn(console, "warn");
    render(<HeadingSmall />);
    expect(warningConsole).not.toHaveBeenCalled();
  });

  it("should render heading without errors", () => {
    const errorsConsole = jest.spyOn(console, "error");
    render(<HeadingSmall />);
    expect(errorsConsole).not.toHaveBeenCalled();
  });

  it("should render heading with proper text", () => {
    const headingText = "Test Heading Small Text";
    const { getByText } = render(<HeadingSmall text={headingText} />);
    expect(getByText(headingText)).toBeDefined();
  });

  it("should render heading with default text", () => {
    const { getByText } = render(<HeadingSmall />);
    expect(getByText(HeadingSmall.defaultProps.text)).toBeDefined();
  });

});
