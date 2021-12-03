/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen } from "@testing-library/react";
 import Component from "../../components/Loading";
 
 describe("Loading", () => {
   it("Renders compoent", () => {
     render(<Component />);
 
     const loading = screen.getByText("Loading...");
 
     expect(loading).toBeInTheDocument();
   });
 });