import React from "react";
import { NavMobile } from "../navigation/nav_logo";
import { useState } from "react";
import { DropDown } from "../navigation/dropdown";
import {NavDesktop} from "../navigation/NavDesktop"
import caramel from "../cropped_img_new/caramel-modified-min.png"
import raspberry from "../cropped_img_new/jam-min-modified-min.png"
import biscoffCookie from "../cropped_img_new/biscoff-cookie-modified-min.png"
import biscoff from "../cropped_img_new/biscoff-min-modified-min.png"
import coffee from "../cropped_img_new/circle-coffee-min.png"
import velvet from "../cropped_img_new/redVelevt-modified-min.png"
import lemon from "../cropped_img_new/lemon-modified-min.png"
import hazelnut from "../cropped_img_new/hazlenut-modified-min.png"
import sprinkles from "../cropped_img_new/cropped_doughnut-min-modified-min.png"
import caramel_delight from "../cropped_img_new/sprinkles-min-modified-min.png"
import { CircleDoughnut } from "../Circle-Doughnut/CircleDoughnut";


export const Collection = () => {
  const [showResults, setShowResults] = useState(false);
  return (
    <>
      <section id="container-stock-our-stuff">
      <NavMobile setShowResults={setShowResults} showResults={showResults}/>
      <DropDown showResults={showResults}></DropDown>
      <NavDesktop />  
       
        <h1 id="collection-heading" className="hero-h1">Doughnuts</h1>
        <div id="extensive-range-container">
        <h2>Find our extensive range below</h2>
        </div>
        <section id="collection-doughnut-container">
          <CircleDoughnut src={caramel} children="Caramel oozer" id="caramel" alt="caramel doughnut" />
          <CircleDoughnut src={raspberry} children="Raspberry oozer" id="raspberry" alt="raspberry doughnut" />
          <CircleDoughnut src={biscoffCookie} children="Biscoff Cookie" id="biscoff-cookie" alt="biscoff cookie" />
          <CircleDoughnut src={biscoff} children="Biscoff Delight" id="biscoff" alt="biscoff doughnut" />
          <CircleDoughnut src={coffee} children="Coffee Delight" id="coffee" alt="coffee doughnut" />
          <CircleDoughnut src={velvet} children="Kush Red Velvet" id="velvet" alt="red velvet doughnut" />
          <CircleDoughnut src={lemon} children="Sweet Lemon Curd" id="lemon" alt="lemon curd doughnut" />
          <CircleDoughnut src={hazelnut} children="Hazelnut Special" id="hazelnut" alt="hazelnut doughnut" />
          <CircleDoughnut src={sprinkles} children="One of a Kind" id="one-of-a-kind" alt="one of a kind doughnut" />
          <CircleDoughnut src={caramel_delight} children="Caramel Delight" id="caramel-delight" alt="Caramel Delight doughnut" />
        </section>
      </section>
    </>
  );
};
