import React from "react";
import "./navHeadings.css";
import { Link } from "react-router-dom";

export const NavHeadings = ({ activePage, setActivePage }) => {
  //destructure props
  const handleClick = (page) => {
    setActivePage(page);
  };
  return (
    <>
      <nav id="nav-desk">
        <ul className="nav-headings-container-desk">
          <li
            className={
              activePage === "home"
                ? "active-nav line-separator"
                : "line-separator"
            }
          >
            <Link to="/" onClick={() => handleClick("home")}>
              Home
            </Link>
          </li>
          <li
            className={
              activePage === "about"
                ? "active-nav line-separator"
                : "line-separator"
            }
          >
            <Link to="/about" onClick={() => handleClick("about")}>
              About us
            </Link>
          </li>
          <li
            className={
              activePage === "doughnut"
                ? "active-nav line-separator"
                : "line-separator"
            }
            onClick={() => handleClick("doughnut")}
          >
            <Link to="/collection">Doughnuts</Link>
          </li>
          <li
            className={
              activePage === "stock"
                ? "active-nav line-separator"
                : "line-separator"
            }
            onClick={() => handleClick("stock")}
          >
            <Link to="/stock">Wholesale</Link>
          </li>
          <li
            className={
              activePage === "contact"
                ? "active-nav line-separator-last"
                : "line-separator-last"
            }
            onClick={() => handleClick("contact")}
          >
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
