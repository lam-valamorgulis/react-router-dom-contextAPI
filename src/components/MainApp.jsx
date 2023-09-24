import React from 'react';
import AppNav from '../components/AppNav';

import { Outlet } from 'react-router-dom';
function MainApp() {
  return (
    <>
      <div className="bg-yellow-100 flex flex-col items-center">
        <h1>This is MainApp</h1>
        <AppNav />
        {/* a place holder all component in child route will be render with MainApp components */}
        <Outlet />
      </div>
    </>
  );
}

export default MainApp;
