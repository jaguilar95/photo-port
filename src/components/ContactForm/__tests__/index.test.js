import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm component", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Contact Me is visible", () => {
  it("inserts text into h1", () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId("h1")).toHaveTextContent("Contact Me");
    expect(getByTestId("submitBtn")).toHaveTextContent("Submit");
  });
});
