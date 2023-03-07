import React from "react";
import "./navHeadings.css";
import { Link } from "react-router-dom";

export const NavHeadings = () => {
  return (
    <>
      <ul className="nav-headings-container-desk">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/collection">Doughnuts</Link>
        </li>
        <li>
          <Link to="/stock">Wholesale</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </>
  );
};
