/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "../../pages/cart";

describe("Cart", () => {
  it("Renders component", () => {
    const props = {
      h2: {
        h2: "h2",
      },
    };
    render(<Component {...props} />);

    const h2 = screen.getByText("Gorengan");

    expect(h2).toBeInTheDocument();
  });
});
