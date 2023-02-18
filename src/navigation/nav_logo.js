import React from "react";
import { HamburgerDropdown } from "./hamburger_dropdown";
import { Logo } from "../logo/logo";
export const NavLogo = ({ setShowResults, showResults }) => {
  return (
    <>
      <Logo></Logo>
      <HamburgerDropdown
        setShowResults={setShowResults}
        showResults={showResults}
      ></HamburgerDropdown>
    </>
  );
};
