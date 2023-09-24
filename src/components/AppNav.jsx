import React from 'react';
import { NavLink } from 'react-router-dom';

function AppNav() {
  return (
    <>
      <nav>
        <ul className="flex fex-row p-2">
          <li className="p-2 text-red-500 text-[18px]">
            <NavLink to="lists">All Tasks</NavLink>
          </li>
          <li className="p-2 text-red-500 text-[18px]">
            <NavLink to="type">Type</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AppNav;
