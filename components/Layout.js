import React from "react";
import Navbar from "./Navbar";
import Notify from "./Notify";
import Modal from "./Modal";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Notify />
      <Modal />
      {children}
    </div>
  );
}

export default Layout;
