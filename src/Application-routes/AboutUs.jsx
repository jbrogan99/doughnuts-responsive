import React from "react";
import { NavMobile } from "../navigation/nav_logo";
import { useState } from "react";
import { DropDown } from "../navigation/dropdown";
import { HeadingOne } from "../h1/h1";
import story from "../images/our-story.jpg";
import { Ptag } from "../ptag/Ptag";
import { HeadingTwo } from "../h2/h2";
import { CircleDoughnut } from "../Circle-Doughnut/CircleDoughnut";
import jam from "../images/jam-min.jpg";
import biscoff from "../images/biscoff-min.jpg";
import { CrossOverImage } from "../crossoverImage/CrossoverImage";
import crossOver from "../images/pink_bkground_man_women-min.png";
export const AboutUs = () => {
  const [showResults, setShowResults] = useState(false);
  return (
    <>
      <section id="container-our-story">
        <header id="navLogo">
          <NavMobile
            setShowResults={setShowResults}
            showResults={showResults}
          ></NavMobile>
        </header>
        <DropDown showResults={showResults}></DropDown>
        <HeadingOne heading="Our Story"></HeadingOne>
        <img src={story} alt="doughnut banner our story" width="100%"></img>
        <section id="about-us-desc-container">
          <HeadingTwo heading="About Us" id="about-us"></HeadingTwo>
          <Ptag paragraph="Down to your final quid? The obvious thing to do is to start making and selling delicious doughnuts. Well, that’s what we did back in 2015 anyway"></Ptag>
        </section>
        <section id="images-container-doughnuts">
          <CircleDoughnut alt="jam doughnut" src={jam} />
          <CircleDoughnut alt="biscoff doughnut" src={biscoff} />
        </section>
        <section id="cross-over-image-container">
          <CrossOverImage
            src={crossOver}
            alt="man and women eating doughnuts"
            width="80%"
          />
        </section>
        <section id="para-container-our-story">
          <Ptag
            paragraph="John Simpson and Harriet Jones kicked things off in mum’s kitchen with a tenner and a wok. Before they knew it, they had themselves a
        micro-bakery and their own coffee and doughnut shop in Manchester."
          />

          <Ptag
            paragraph="We’re not talking your usual doughnuts either, oh no. These doughnuts are handmade, coming rough and ready with all manner of mouth-watering
        toppings. We’ve even got vegan doughnuts,because we’ve got your backs, you vegan champ s."
          />

          <Ptag
            paragraph="With stores in the city centres of Manchester, Stockport, Bolton and Bury, these are doughnuts made different. Get yourself along to one of our
        doughnut shops for the full dipped, dusted and deep-filled experience. You’re in for a treat!"
          />
        </section>
      </section>
    </>
  );
};
