import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const Navstyle = {
    color: "white",
  };

  return (
    <nav>
      <Link to="/">
        <h3 className="nxtstyle"> NXTHYPE</h3>
      </Link>
      <ul className="nav-links">
        <Link style={Navstyle} to="/Anime">
          <li>Upcoming Anime Ranker</li>
        </Link>
        <Link style={Navstyle} to="/League">
          <li>League Items Ranker</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
