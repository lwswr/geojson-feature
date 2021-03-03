import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  // Check successful mounting of <App />
  it("sucessfully renders App", () => {
    render(<App />);
    const linkElement = screen.getByText(/enter Boundary Box manually/i);
    expect(linkElement).toBeInTheDocument();
  });

  // checking polyline rendering and updating
  it("renders polylines after resolve", async () => {
    render(<App />);

    // checks to see if polylines are rendered on following first API call
    const renderedPolyLines = await screen.findAllByTestId("poly-line");
    expect(renderedPolyLines.length).toBeGreaterThan(0);

    // user enters new bbox
    userEvent.type(screen.getByTestId("max-lat"), "51.50008313091356");
    userEvent.type(screen.getByTestId("max-lng"), "-0.12664579698274278");
    userEvent.type(screen.getByTestId("min-lat"), "51.49863385555124");
    userEvent.type(screen.getByTestId("min-lng"), "-0.1280950723450616");

    // click submit
    userEvent.click(screen.getByTestId("bbox-submit"));

    // then checks to see if polyLines are updated to new array length
    expect(renderedPolyLines.length).toEqual(81);
  });
});
