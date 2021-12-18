/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "../../components/Notify";

describe("Notify", () => {
  it.skip("Renders component", () => {
    const props = {
      Script: {
        bgColor: "bgColor",
        type: "NOTIFY",
        title: "Error",

      },
    };
    render(<Component />);

    const bgColor = screen.getByText("bg-danger");
    const type = screen.getByText("NOTIFY");
    const title = screen.getByText("Error");

    expect(bgColor).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
