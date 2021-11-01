import React from "react";

/* import components and styles */
import "./web.css";

/* import icons */
import { BiCool } from "react-icons/bi";
import { BiCodeBlock } from "react-icons/bi";
import { BiMessageDots } from "react-icons/bi";

function Web() {
  return (
    <div>
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
  );
}

export default Web;
