import React from "react";
import { HamburgerDropdown } from "./hamburger_dropdown";
import { Logo } from "../logo/logo";
export const NavMobile = ({ setShowResults, showResults }) => {
  return (
    <>
      <header id="navMobileContainer">
        <Logo></Logo>
        <HamburgerDropdown
          setShowResults={setShowResults}
          showResults={showResults}
        ></HamburgerDropdown>
      </header>
    </>
  );
};
