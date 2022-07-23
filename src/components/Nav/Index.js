import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/">About Me</Link>
        </li>
        <li className="mx-1">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li className="mx-1">
          <Link to="/Resume">Resume</Link>
        </li>
        <li className="mx-1">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    );
  }

  return (
    <header className="flex-row px-1">
      <h1 className="my-2">
        <Link to="/">
          Micah Stewart
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
