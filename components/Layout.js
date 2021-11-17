import React from "react";
import Navbar from "./Navbar";
import Notify from "./Notify";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Notify />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
