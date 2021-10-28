import React from "react";
import "./navbar.css";
import FolioLogo from "../../imgs/dvlogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <image src={FolioLogo} alt="logo image" className="logo-img" />
      </div>
      <nav className="links">
        <a href="/" className="navlink">
          home
        </a>
        <a href="/about" className="navlink">
          about
        </a>
        <a href="/projects" className="navlink">
          projects
        </a>
        <a href="/contacts" className="navlink">
          contact
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
