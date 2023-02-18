import React from "react";
import { HeadingOne } from "../h1/h1";
import { HeadingTwo } from "../h2/h2";
import { Ptag } from "../ptag/Ptag.js";
import { CrossOverImage } from "../crossoverImage/CrossoverImage";
import { NavLogo } from "../navigation/nav_logo";
import video from "../video/video.mp4";
import coffee from "../images/coffee.jpg";
import sprinkle from "../images/sprinklesv2.png";
import doungnutsBackground from "../images/doughnuts_bkground1.jpg";
import { DropDown } from "../navigation/dropdown";
import { useState } from "react";
import "./MobileHomePage.css";

export function MobileHomePage() {
  const [showResults, setShowResults] = useState(false);
  return (
    <>
      <header id="navLogo">
        <NavLogo
          setShowResults={setShowResults}
          showResults={showResults}
        ></NavLogo>
      </header>
      <DropDown showResults={showResults}></DropDown>
      <img src={sprinkle} alt="sprinkles" width="100%" height="50px" />
      <HeadingOne heading="Doughnuts Made Different"></HeadingOne>
      <Ptag paragraph="Dipped, dusted and deep-filled doughnuts. Made by hand in Manchester, delivered across England, Wales and Scotland!"></Ptag>
      <img
        src={sprinkle}
        alt="powder sprinkling on doughnut"
        height="100em"
      ></img>
      <img
        src={doungnutsBackground}
        alt="powder sprinkling on doughnut"
        width="100rem"
      ></img>
      <HeadingTwo heading="Celebrate with something different!"></HeadingTwo>
      <Ptag
        paragraph="Whether you’re celebrating a birthday, 
        a wedding or just making it through to Friday,
        say it with fresh doughnuts. Order doughnuts online 
        for events and occasions or pick up something special
        from our stores just for you. 
        We even hand-make vegan doughnuts"
      ></Ptag>
      <CrossOverImage src={coffee} alt="coffee doughnut" width="100em" />
      <HeadingTwo heading="Take a peek inside our Manchester bakery"></HeadingTwo>
      <video controls width="250">
        <source src={video} type="video/webm"></source>
      </video>
      <Ptag paragraph="We spend our time baking handmade doughnuts for you to fill your hole with. Take a peek inside our Manchester bakery to see how they’re made."></Ptag>
      <HeadingTwo heading="You can find our delish Ds in more places than ever!"></HeadingTwo>
      <p id="ptagColours">
        Obey your rumble and tuck in at any of our
        <span className="redName"> Manchester, Stockport, Bolton </span> or
        <span className="redName"> Bury</span> stores -either box it up and go,
        or stick around with a coffee, it’s totally up to you. Not near a store?
        Fear not! Doughnuts Delivered lets you get your favourite doughnut
        flavours right to your door!
      </p>
      <a href="#" id="stores_button">
        Our Stores
      </a>
    </>
  );
}
