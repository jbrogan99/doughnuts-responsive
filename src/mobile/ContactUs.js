import React from "react";
import "./contactUs.css";
import { NavLogo } from "../navigation/nav_logo";
import { useState } from "react";
import { DropDown } from "../navigation/dropdown";
import { HeadingOne } from "../h1/h1";
export const ContactUs = () => {
  const [showResults, setShowResults] = useState(false);
  <>
    <header id="navLogo">
      <NavLogo
        setShowResults={setShowResults}
        showResults={showResults}
      ></NavLogo>
    </header>
    <DropDown showResults={showResults}></DropDown>
    <HeadingOne id="stock-our-stuff" heading="Stock our stuff"></HeadingOne>
  </>;
};
