import React from "react";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./nav_mobile";
import { DropDown } from "./dropdown";
import { useState } from "react";

export const Navigation = ({ activePage, setActivePage }) => {
  //destructure props
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      {/*pass down state to function */}
      <NavMobile setShowResults={setShowResults} showResults={showResults} />
      <DropDown
        showResults={showResults}
        activePage={activePage}
        setActivePage={setActivePage}
        setShowResults={setShowResults}
      ></DropDown>
      <NavDesktop activePage={activePage} setActivePage={setActivePage} />
    </>
  );
};
