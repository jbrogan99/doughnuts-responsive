import React from "react";
import { NavMobile } from "../navigation/nav_logo";
import { useState } from "react";
import { DropDown } from "../navigation/dropdown";
import caramel from "../images/caramel.jpg";
import redVelvet from "../images/redVelevt.jpg";
import cake from "../images/cake1.jpg";
import cookieBiscoff from "../images/biscoff-cookie.jpg";
import hazelnut from "../images/hazlenut.jpg";
import sprinkles from "../images/sprinkles-min.jpg";
import lemon from "../images/lemon.jpg";
import coffee from "../images/coffee-min.jpg";
import {NavDesktop} from "../navigation/NavDesktop"
export const StockOurStuff = () => {
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <section id="container-stock-our-stuff">
       <NavMobile setShowResults={setShowResults} showResults={showResults}/>
      <DropDown showResults={showResults}></DropDown>
      <NavDesktop />
        
        <h1 id="stock-our-stuff" className="hero-h1">Stock our stuff </h1>

        <section id="pic-collage-container">
          <img src={caramel} alt="carmael doughnut" id="caramel" />
          <img src={redVelvet} alt="red velvet doughnut" id="red-velvet" />
          <img src={cake} alt="strawberry cake" id="cake" />
          <img src={cookieBiscoff} alt="biscoff cookie" id="biscoff-cookie" />
          <img src={hazelnut} alt="hazelnut doughnut" id="hazelnut-doughnut" />
          <img
            src={sprinkles}
            alt="sprinkled iceing sugar onto caramel doughnut"
            id="sprinkled-doughnut"
          />
          <img src={lemon} alt="lemon doughnut" id="lemon-doughnut" />
          <img src={coffee} alt="coffee doughnut" id="coffee-doughnut" />
        </section>
        <section id="heading-description-wholesale-container">
          <h2>Wholesale Doughnuts</h2>
          <p>We’ve already got a number of stockists outside of our stores – including coffee shops and eateries– so why not join the club? You can have our 
            bright, bold and curvaceous buns to add to your store, offering your customers something extra when you bulk buy wholesale doughnuts</p>
          <p>Whether you need bulk doughnuts or a regular wholesale doughnut supplier, chuck your details in our form and we’ll get back to you. 
            We’re knee-deep in batter at the moment, but we’ll be in touch about the doughnuts wholesale process.</p>
        </section>
      </section>
    </>
  );
};
