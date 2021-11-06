import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <div
          className="HeaderLogo"
          onClick={() => {
            window.location = "/";
          }}
        >
          <p>RackRev</p>
        </div>
        <div className="HeaderLeftItems">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            className="active navItems"
            to="Home"
          >
            <p>Wardrobe</p>
          </Link>
          <Link spy={true} smooth={true} className="active navItems" to="Home">
            <p>Recommendations</p>
          </Link>
          <Link spy={true} smooth={true} className="active navItems" to="Home">
            <p>Outfit</p>
          </Link>
          <Link spy={true} smooth={true} className="active navItems" to="Home">
            <p>Schedule</p>
          </Link>
        </div>
      </div>
      <div
        className="HeaderRight"
        onClick={() => {
          window.location = "/SignUp";
        }}
      >
        <div>Join Now</div>
      </div>
    </div>
  );
}

export default Header;
