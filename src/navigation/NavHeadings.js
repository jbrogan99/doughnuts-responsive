import React, { useState } from "react";
import "./navHeadings.css";
import { Link } from "react-router-dom";

export const NavHeadings = () => {
  const [activePage, setActivePage] = useState("home");

  const handleClick = (page) => {
    setActivePage(page);
  };
  return (
    <>
      <ul className="nav-headings-container-desk">
        <li className={activePage === "home" ? "active-nav" : ""}>
          <Link to="/" onClick={() => handleClick("home")}>
            Home
          </Link>
        </li>
        <li className={activePage === "about" ? "active-nav" : ""}>
          <Link to="/about" onClick={() => handleClick("about")}>
            About us
          </Link>
        </li>
        <li
          className={activePage === "doughnut" ? "active-nav" : ""}
          onClick={() => handleClick("doughnut")}
        >
          <Link to="/collection">Doughnuts</Link>
        </li>
        <li
          className={activePage === "stock" ? "active-nav" : ""}
          onClick={() => handleClick("stock")}
        >
          <Link to="/stock">Wholesale</Link>
        </li>
        <li
          className={activePage === "contact" ? "active-nav" : ""}
          onClick={() => handleClick("contact")}
        >
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </>
  );
};
