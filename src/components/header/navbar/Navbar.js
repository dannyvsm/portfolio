import React from "react";
import "./navbar.css";
import { BiCool } from "react-icons/bi";
import { BiCodeBlock } from "react-icons/bi";
import { BiMessageDots } from "react-icons/bi";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <h2 className="logo-text">danny vincent</h2>
        </a>
      </div>
      <div className="menu">
        <div className="web-menu">
          <nav className="weblinks">
            <a href="/about" className="navlink">
              <BiCool
                color="#272b27"
                variant="bold"
                size={24}
                className="nav-icon"
              />
            </a>
            <a href="/projects" className="navlink">
              <BiCodeBlock color="#272b27" variant="bold" size={24} />
            </a>
            <a href="/contacts" className="navlink">
              <BiMessageDots color="#272b27" variant="bold" size={24} />
            </a>
          </nav>
        </div>

        <div className="mobile-menu"></div>
      </div>
    </div>
  );
}

export default Navbar;
