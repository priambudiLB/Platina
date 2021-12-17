/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "../../components/Loading";

describe("Loading", () => {
  it.skip("Renders component", () => {
    render(<Component />);

    const loading = screen.getByText("Loading...");

    expect(loading).toBeInTheDocument();
  });
});
