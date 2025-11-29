import React from "react";
import logo from "../logo.svg"; // CRA includes the React logo by default

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="nav-logo" alt="React logo" />
      <img
        src="https://imgur.com/jr6KrlF.png"
        alt="menu"
        className="nav-menu"
      />
    </nav>
  );
}

export default Navbar;
