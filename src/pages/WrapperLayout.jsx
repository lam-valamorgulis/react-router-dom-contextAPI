import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function WrapperLayout() {
  return (
    <>
      <NavBar />
      {/* Outlet will render all component in this routed and all component in child rout */}
      <Outlet />
      <Footer />
    </>
  );
}

export default WrapperLayout;
