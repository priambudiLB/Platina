/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from './Navbar';
import Notify from './Notify';
import Modal from './Modal';

const Layout = function ({ children }) {
  return (
    <>
      <Navbar />
      <Notify />
      <Modal />
      {children}
    </>
  );
};

export default Layout;
