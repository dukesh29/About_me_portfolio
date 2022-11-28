import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Duulat Akmatbekov</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-me" className="nav-link">About Me</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;