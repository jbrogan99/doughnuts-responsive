import React from "react";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./nav_mobile";
import { DropDown } from "./dropdown";
import { useState } from "react";

export const Navigation = () => {
  const [showResults, setShowResults] = useState(false);
  const [activePage, setActivePage] = useState("home");
  return (
    <>
      <NavMobile setShowResults={setShowResults} showResults={showResults} />
      <DropDown
        showResults={showResults}
        activePage={activePage}
        setActivePage={setActivePage}
      ></DropDown>
      <NavDesktop activePage={activePage} setActivePage={setActivePage} />
    </>
  );
};
