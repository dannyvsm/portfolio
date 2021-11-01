import React, { useState } from "react";

//import components + styles
import "./navbar.css";
import Web from "./web/Web";
// import Mobile from "./mobile/Mobile";

//import icons
// import { BiGridAlt } from "react-icons/bi";
// import { BiMenu } from "react-icons/bi";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <h2 className="logo-text">danny vincent</h2>
        </a>
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>

        <div className="mobile-menu">
          <div>
            {/* <div onClick={() => setIsOpen(!isOpen)}> */}
            {/* <BiMenu /> */}
          </div>
          {/* {isOpen && <Mobile />} */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
