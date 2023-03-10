import React from "react";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./nav_mobile";
import { DropDown } from "./dropdown";
import { useState } from "react";

export const Navigation = () => {
  const [showResults, setShowResults] = useState(false);
  return (
    <>
      <NavMobile setShowResults={setShowResults} showResults={showResults} />
      <DropDown showResults={showResults}></DropDown>
      <NavDesktop />
    </>
  );
};
