import React from 'react';
import { NavLink } from 'react-router-dom';

const LINKS = [
  { path: '/', name: 'Homepage' },
  { path: 'nav1', name: 'Nav1' },
  { path: 'nav2', name: 'Nav2' },
  { path: 'login', name: 'Login' },
  { path: 'app', name: 'App' },
];

function NavBar() {
  return (
    <div className="bg-blue-200 h-50 flex">
      <ul className="flex flex-wrap justify-items-center justify-center">
        {LINKS.map((link, index) => (
          <li key={index} className="p-10">
            <NavLink to={link.path}> {link.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
