import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// after each test, clean up left over memory data
afterEach(cleanup);

describe("About component", () => {
  it("renders", () => {
    render(<About />);
  });

  it("matched snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
