import React from "react";
import hamburger_menu from "../images/hamburger_menu-min.png";
import "./hamburger_dropdown.css";

export const HamburgerDropdown = ({ setShowResults, showResults }) => {
  //destructure props
  return (
    <div id="menu_container">
      <img
        src={hamburger_menu}
        alt="hamburger menu"
        onClick={() => setShowResults(!showResults)}
        id="hamburger"
      />
    </div>
  );
};
