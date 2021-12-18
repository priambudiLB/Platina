/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "../../pages/sign-up";

describe("FormLabel", () => {
  it.skip("Renders component", () => {
    const props = {
      FormLabel: {
        FormLabel: "FormLabel",
      },
    };
    render(<Component />);

    const FormLabel = screen.getByText("Password");

    expect(FormLabel).toBeInTheDocument();
  });
});
