import React from "react";
import { render } from "@testing-library/react";
import SubtitleSmall from "../components/SubtitleSmall/SubtitleSmall";

describe("Subtitle Small Tests", () => {
  it("should render subtitle without warning", () => {
    const warningConsole = jest.spyOn(console, "warn");
    render(<SubtitleSmall />);
    expect(warningConsole).not.toHaveBeenCalled();
  });

  it("should render subtitle without errors", () => {
    const errorsConsole = jest.spyOn(console, "error");
    render(<SubtitleSmall />);
    expect(errorsConsole).not.toHaveBeenCalled();
  });

  it("should render subtitle with proper text", () => {
    const subtitleText = "Test Subtitle Small Text";
    const { getByText } = render(<SubtitleSmall text={subtitleText} />);
    expect(getByText(subtitleText)).toBeDefined();
  });

  it("should render subtitle with default text", () => {
    const { getByText } = render(<SubtitleSmall />);
    expect(getByText(SubtitleSmall.defaultProps.text)).toBeDefined();
  });

});
