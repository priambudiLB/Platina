import React from "react";
import Navbar from "./Navbar";
import Notify from "./Notify";
import Modal from "./Modal";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Notify />
      <Modal />
      {children}
    </>
  );
}

export default Layout;
