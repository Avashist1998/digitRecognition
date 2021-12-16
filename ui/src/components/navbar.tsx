import React from 'react';
import './navbar.css'
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <div>
        <nav
          style={{
            padding: "1rem"
          }}
        >
             <NavLink
              style={({ isActive }) => {
                return {
                  margin: "0 20px",
                  color: isActive ? "red" : ""
                };
              }}
              to={'/home'}
              key={1}
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  margin: "0 20px",
                  color: isActive ? "red" : ""
                };
              }}
              to={'/play'}
              key={2}
            >
              play
            </NavLink>
          {/* {invoices.map(invoice => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))} */}
        </nav>
        <Outlet />
      </div>
    )
}

export default NavBar;