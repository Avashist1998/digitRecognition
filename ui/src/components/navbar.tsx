import React from 'react';
import './navbar.css'
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <div className="navigation">
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='container'>
          <NavLink className="navbar-brand" to={"/"}>
            Number Classifer
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className='nav-item'>
                <NavLink className="nav-link" to="/">
                  Home
                <span className="sr-only">(current)</span>
                </NavLink>

              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/play'}>
                  Play
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/about'}>
                  About
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default NavBar;