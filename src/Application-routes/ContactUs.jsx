import React from "react";
import { NavMobile } from "../navigation/nav_logo";
import { useState } from "react";
import { DropDown } from "../navigation/dropdown";
import { HeadingOne } from "../h1/h1";
import { HeadingTwo } from "../h2/h2";
import doughnutBackground from "../images/cartoon_doughnuts_falling-min.jpg";
import { Ptag } from "../ptag/Ptag";
export const ContactUs = () => {
  const [showResults, setShowResults] = useState(false);
  return (
    <>
      <section id="container-contact-us">
        <header id="navLogo">
          <NavMobile
            setShowResults={setShowResults}
            showResults={showResults}
          ></NavMobile>
        </header>
        <DropDown showResults={showResults}></DropDown>
        <h1 id="stock-our-stuff" className="hero-h1">Contact Us</h1>
        <section id="contact-us-banner-container">
          <img
            src={doughnutBackground}
            alt="doughnut background"
            id="banner-img"
          />

          <h2 id="banner-text">
            Doughnut <span>addiction</span> hotline
          </h2>
         
          <p>07893778446</p>
         
        </section>
        <section id="contact-us-para-container">
          <Ptag paragraph="We’re pretty busy baking doughnuts – up to our eyeballs in cookie crumbs and caramel sauce, but you can always give us a call to find out more" />
          <Ptag paragraph="Simply check which store you want and pick up the phone to have a chat, or better yet, get in touch by filling in our form and we’ll get back to you" />
          <Ptag paragraph="Don’t forget to sign up to our mailing list for special offers, too!" />
        </section>
      </section>
    </>
  );
};
