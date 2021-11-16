import React from "react";
import Navbar from "./Navbar";
import Notify from "./Notify";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Notify />
      {children}
    </>
  );
}

export default Layout;
