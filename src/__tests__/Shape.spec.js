import React from "react";
import { render } from "@testing-library/react";
import Shape from "../components/Shape/Shape";

describe("Shape Tests", () => {
  it("should render shape without warning", () => {
    const warningConsole = jest.spyOn(console, "warn");
    render(<Shape />);
    expect(warningConsole).not.toHaveBeenCalled();
  });

  it("should render shape without errors", () => {
    const errorsConsole = jest.spyOn(console, "error");
    render(<Shape />);
    expect(errorsConsole).not.toHaveBeenCalled();
  });

  it("should render shape with proper content", () => {
    const content = <p>Content Text Test</p>;
    const { getByText } = render(<Shape content={content} />);
    expect(getByText("Content Text Test")).toBeDefined();
  });

  it("should render shape with default content", () => {
    const shapeDefaultContentText = Shape.defaultProps.content.props.children;
    const { getByText } = render(<Shape />);
    expect(getByText(shapeDefaultContentText)).toBeDefined();
  });
});
