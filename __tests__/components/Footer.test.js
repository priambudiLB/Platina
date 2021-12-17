/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "../../components/Footer";

describe("Footer", () => {
  it("Renders component", () => {
    const props = {
      p: {
        p: "p",
        h3: "h3",
      },
    };

    render(<Component />);

    const p = screen.getByText("Delivery");
    const h3 = screen.getByText("MENDOAN.ID");

    expect(p).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
  });
});
