/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "../../components/CartItem";

describe("CartItem", () => {
  it.skip("Renders component", () => {
    const props = {
      h5: {
        h5: "h5",

      },
    };
    render(<Component />);

    const h5 = screen.getByText("className");

    expect(h5).toBeInTheDocument();
  });
});
