import React from "react";
import { Logo } from "../logo/logo";
import { NavHeadings } from "./NavHeadings";
import "./navDesktop.css";
export const NavDesktop = () => {
  return (
    <>
      <header className="nav-header-container">
        <Logo></Logo>
        <NavHeadings></NavHeadings>
      </header>
    </>
  );
};
