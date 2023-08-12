import React from "react";
import "./menubar.css";
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <div className="practiceMenu">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home{" "}
          </Link>
        </li>

        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/jobs">Careers</Link>
        </li>
        <li>
          <Link to="/player">Player</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menubar;
