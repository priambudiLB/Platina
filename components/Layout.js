import React from "react";
import Navbar from "./Navbar";
import Notify from "./Notify";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Notify />
      <div className="container">{children}</div>
    </div>
  );
}

export default Layout;
