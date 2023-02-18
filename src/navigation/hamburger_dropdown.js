import React from "react";
import hamburger_menu from "../images/hamburger_menu.png";
import "./hamburger_dropdown.css";

export const HamburgerDropdown = ({ setShowResults, showResults }) => {
  return (
    <nav>
      <div id="menu_container">
        <img
          src={hamburger_menu}
          alt="hamburger menu"
          width="35em"
          onClick={() => setShowResults(!showResults)}
          id="hamburger"
        />
      </div>
    </nav>
  );
};
