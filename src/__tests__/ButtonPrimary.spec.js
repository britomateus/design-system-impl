import React from "react";
import { render } from "@testing-library/react";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";

describe("Button Primary Tests", () => {
  it("should render button without warning", () => {
    const warningConsole = jest.spyOn(console, "warn");
    render(<ButtonPrimary />);
    expect(warningConsole).not.toHaveBeenCalled();
  });

  it("should render button without errors", () => {
    const errorsConsole = jest.spyOn(console, "error");
    render(<ButtonPrimary />);
    expect(errorsConsole).not.toHaveBeenCalled();
  });

  it("should render button with proper label", () => {
    const buttonLabel = "Test Button Label";
    const { getByText } = render(<ButtonPrimary label={buttonLabel} />);
    expect(getByText(buttonLabel)).toBeDefined();
  });

  it("should render button with default label", () => {
    const buttonDefaultLabel = "Button Label";
    const { getByText } = render(<ButtonPrimary />);
    expect(getByText(ButtonPrimary.defaultProps.label)).toBeDefined();
  });

  it("should apply 'pressed' class when 'pressed' prop is true", () => {
    const { container } = render(<ButtonPrimary pressed />);
    expect(container.firstChild.classList).toContain("pressed");
  });

  it("should not apply 'pressed' class when 'pressed' is false", () => {
    const { container } = render(<ButtonPrimary pressed={false} />);
    expect(container.firstChild.classList).not.toContain("pressed");
  });
});
