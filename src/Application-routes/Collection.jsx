import React from "react";
import { NavMobile } from "../navigation/nav_logo";
import { useState } from "react";
import { DropDown } from "../navigation/dropdown";
import doughnut1 from "../images/circle-coffee.png";
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
        <h1 id="collection-heading">Doughnuts</h1>
        <h2>find our extensive range below</h2>
        <CircleDoughnut src={doughnut1} children="Caramel Oozer" alt="caramel doughnut" />
      </section>
    </>
  );
};
