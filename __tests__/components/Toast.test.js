/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "../../components/Toast";

describe("Loading", () => {
  it("Renders compoent", () => {
    const props = {
      message: {
        title: "title",
        message: "message",
      },
      bgColor: "white",
    };
    render(<Component {...props} />);

    const title = screen.getByText("title");
    const message = screen.getByText("message");

    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
