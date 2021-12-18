/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "../../components/Layout";

describe("Layout", () => {
  it.skip("Renders component", () => {
    const props = {
      Script: {
        Script: "Script",

      },
    };
    render(<Component />);

    const Script = screen.getByText("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js");

    expect(Script).toBeInTheDocument();
  });
});
