import React from "react";
import { Logo } from "../logo/logo";
import { NavHeadings } from "./NavHeadings";
import "./navDesktop.css";
export const NavDesktop = ({ activePage, setActivePage }) => {
  return (
    <>
      <div className="nav-header-container">
        <Logo></Logo>
        <NavHeadings
          activePage={activePage}
          setActivePage={setActivePage}
        ></NavHeadings>
      </div>
    </>
  );
};
