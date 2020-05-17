import React from "react";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div>
      <nav className="nav justify-content-end fixed-top navbar">
        <a href=" ">
          <Link
            className="nav-item nav-link"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Home
          </Link>
        </a>

        <a href=" ">
          <Link
            className="nav-item nav-link"
            to="profile"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Profile
          </Link>
        </a>
        <a href=" ">
          <Link
            className="nav-item nav-link"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Education
          </Link>
        </a>
        <a href=" ">
          <Link
            className="nav-item nav-link"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Abilities
          </Link>
        </a>
        <a href=" ">
          <Link
            className="nav-item nav-link"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Contacts
          </Link>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
