import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BBoxForm } from "./BBoxForm";

// Check successful mounting of <App />
test("sucessfully renders App", () => {
  render(<App />);
  const linkElement = screen.getByText(/enter Boundary Box manually/i);
  expect(linkElement).toBeInTheDocument();
});

// Form fields and events
describe("BBoxForm", () => {
  it("should render each field and button", () => {
    render(<BBoxForm submit={(sub) => console.log(sub)} />);
    expect(screen.getByTestId("max-lat")).toBeInTheDocument();
    expect(screen.getByTestId("min-lng")).toBeInTheDocument();
    expect(screen.getByTestId("max-lng")).toBeInTheDocument();
    expect(screen.getByTestId("min-lat")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });
});
