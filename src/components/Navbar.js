import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    // <nav className="navigation">
      <ul className="navigation-menu">
        <li >
          <Link className="Link"
            
            to="home"
            spy={true}
            smooth={true}
            // offset={0}
            duration={2000}
          >
            Home
          </Link>
        </li>
        <li>
          
        <Link className="Link"
            to="about"
            spy={true}
            smooth={true}
            offset={10}
            duration={2000}
          >
            About
          </Link>
        </li>
      </ul>
    // </nav>
  );
}

export default Navbar;
