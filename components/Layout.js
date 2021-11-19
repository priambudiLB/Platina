import React from "react";
import Navbar from "./Navbar";
import Notify from "./Notify";

import Script from "next/script";

function Layout({ children }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
      <Navbar />
      <Notify />
      {children}
    </>
  );
}

export default Layout;
