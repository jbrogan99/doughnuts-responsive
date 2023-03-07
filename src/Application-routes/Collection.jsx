import React from "react";
import { NavMobile } from "../navigation/nav_logo";
import { useState } from "react";
import { DropDown } from "../navigation/dropdown";
import { HeadingOne } from "../h1/h1";
import { HeadingTwo } from "../h2/h2";
import doughnut1 from "../images/cropped_doughnut-min.jpg";
import { CircleDoughnut } from "../Circle-Doughnut/CircleDoughnut";

export const Collection = () => {
  const [showResults, setShowResults] = useState(false);
  return (
    <>
      <section id="container-stock-our-stuff">
        <header id="navLogo">
          <NavMobile
            setShowResults={setShowResults}
            showResults={showResults}
          ></NavMobile>
        </header>
        <DropDown showResults={showResults}></DropDown>
        <HeadingOne id="collection-heading" heading="Doughnuts"></HeadingOne>
        <HeadingTwo heading="find our extensive range below"></HeadingTwo>
        <CircleDoughnut src={doughnut1} alt="t" >
          <h4>Tester</h4>
        </CircleDoughnut>
      </section>
    </>
  );
};
