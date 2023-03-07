import React from "react";
import { HeadingOne } from "../h1/h1";
import { HeadingTwo } from "../h2/h2";
import { Ptag } from "../ptag/Ptag.jsx";
import { CrossOverImage } from "../crossoverImage/CrossoverImage";
import { NavMobile } from "../navigation/nav_logo";
import video from "../video/video.mp4";
import coffee from "../images/coffee_cropped-min.png";
import sprinkles from "../images/sprinkles-min.jpg";
import biscoff from "../images/biscoff-min.jpg";
import { DropDown } from "../navigation/dropdown";
import { useState } from "react";
export function MobileHomePage() {
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      
        <NavMobile
          setShowResults={setShowResults}
          showResults={showResults}
        ></NavMobile>
      <DropDown showResults={showResults}></DropDown>
      <section id="first-section">
        <div id="background-sprinkles">
          <HeadingOne heading="Doughnuts Made Different"></HeadingOne>
        </div>
        <p id="home-description">
          <span id="bold-font">Dipped, dusted </span> and{" "}
          <span id="bold-font">deep-filled doughnuts.</span> Made by hand in
          Manchester, delivered across England, Wales and Scotland!
        </p>
        <div id="doughnut-container">
          <img src={sprinkles} alt="powder sprinkling on doughnut"></img>
          <img src={biscoff} alt="powder sprinkling on doughnut"></img>
        </div>
      </section>
      <section id="celebrate">
        <h2>
          {" "}
          Celebrate with <br /> something <br /> different!{" "}
        </h2>
      </section>
      <section id="home-description2">
        <Ptag
          id="ptag"
          paragraph="Whether you’re celebrating a birthday, 
        a wedding or just making it through to Friday,
        say it with fresh doughnuts. Order doughnuts online 
        for events and occasions or pick up something special
        from our stores just for you. 
        We even hand-make vegan doughnuts"
        ></Ptag>

        <CrossOverImage
          id="cross-over-image"
          src={coffee}
          alt="coffee doughnut"
        />
        <aside>
          <HeadingTwo
            id="video-heading"
            heading="Take a peek inside our Manchester bakery"
          ></HeadingTwo>
          <section id="video-wrapper">
            <video controls width="250">
              <source src={video} type="video/webm"></source>
            </video>
          </section>
          <Ptag
            id="ptag2"
            paragraph="We spend our time baking handmade doughnuts for you to fill your hole with. Take a peek inside our Manchester bakery to see how they’re made."
          ></Ptag>
        </aside>
        <section id="home-description3">
          <HeadingTwo
            id="final-heading"
            heading="You can find our delish Ds in more places than ever!"
          ></HeadingTwo>
          <p id="ptagColours">
            Obey your rumble and tuck in at any of our
            <span className="redName"> Manchester, Stockport, Bolton </span> or
            <span className="redName"> Bury</span> stores -either box it up and
            go, or stick around with a coffee, it’s totally up to you. Not near
            a store? Fear not! Doughnuts Delivered lets you get your favourite
            doughnut flavours right to your door!
          </p>
          <a href="#" id="stores_button">
            Our Stores
          </a>
        </section>
      </section>
    </>
  );
}
