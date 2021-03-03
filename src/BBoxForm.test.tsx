import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BBoxForm } from "./BBoxForm";

// Form fields and events
describe("BBoxForm", () => {
  it("should emulate form submission", () => {
    // mock callback prop
    const mockSubmit = jest.fn();
    render(<BBoxForm submit={mockSubmit} />);

    // fill in values
    userEvent.type(screen.getByTestId("max-lat"), "0.5");
    userEvent.type(screen.getByTestId("max-lng"), "0.5");
    userEvent.type(screen.getByTestId("min-lat"), "0.5");
    userEvent.type(screen.getByTestId("min-lng"), "0.5");

    // click submit
    userEvent.click(screen.getByTestId("bbox-submit"));
    expect(mockSubmit.mock.calls.length).toEqual(1);

    // calls[0][0] is the first argument to the first execution of the mock
    expect(mockSubmit.mock.calls[0][0]).toEqual([0.5, 0.5, 0.5, 0.5]);
  });
});
