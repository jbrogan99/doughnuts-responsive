import React from "react";
import { NavDesktop } from "../navigation/NavDesktop";
import { Blob } from "../blob/blob";
import { HeadingTwo } from "../h2/h2";
import { Sprinkles } from "../sprinkles/sprinkles";
import { CrossOverImage } from "../crossoverImage/CrossoverImage";
import { NavMobile } from "../navigation/nav_logo";
import video from "../video/video.mp4";
import coffee from "../images/coffee_cropped-min.png";
import sprinkles from "../images/sprinkles-min.jpg";
import hazelnut from "../images/hazlenut.jpg";
import lemon from "../images/lemon.jpg";
import biscoff from "../images/biscoff-min.jpg"
import caramel from "../images/caramel.jpg";
import jam from "../images/jam-min.jpg"
import velvet from "../images/redVelevt.jpg"
import cookies from "../images/cookies.jpg"
import { DropDown } from "../navigation/dropdown";
import { useState, useEffect } from "react";
export const Home = () => {

  const images = [sprinkles, biscoff, jam];
  const images2 = [hazelnut, caramel, velvet];
  const images3 = [lemon, coffee, cookies];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false)
  const [showResults, setShowResults] = useState(false);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
                setTransition(true)
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
                 setTransition(true)
            }
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex, images.length])
  return (
    <>
  <section className="background-desktop">
      <NavMobile setShowResults={setShowResults} showResults={showResults}/>
      <DropDown showResults={showResults}></DropDown>
      <NavDesktop />       
        <div className="width-desk-container">
        <section id="home-desk-computer-container">
          <div id="background-hero">
            <Sprinkles>
            <h1 className="hero-h1">Doughnuts Made Different</h1>
            </Sprinkles>
        </div>
          <div className="background-color-0">
          <div id="doughnut-image-container-desk">
            <img src={images[currentIndex]} className={`fade-in-image ${transition ? 'fade-in-image2' : 'fade-in-image2'}`} alt="powder sprinkling on doughnut"></img>
            <img src={images2[currentIndex]} className="fade-in-image" alt="powder sprinkling on doughnut"></img>
            <img src={images3[currentIndex]} className="fade-in-image" alt="powder sprinkling on doughnut"></img>
          </div>
        <div id="shop-donut-container">
          <button className="pink-black-btn">
            Shop our Doughnuts
          </button>
        </div>
          </div>
        </section>
        <section id="celebrate-container">
          <Blob container="container-dipped" innerDiv="inner-dipped"></Blob>
          <h2>
            {" "}
            Celebrate with something <br /> different!{" "}
          </h2>
            <p id="home-description-desk">
              <span id="bold-font">Dipped, dusted </span> and{" "}
              <span id="bold-font">deep-filled doughnuts.</span> Made by hand in
              Manchester, delivered across England, Wales and Scotland!
            </p>
        </section>
        <section id="home-description2-desk-container">
        <Blob container="container-wedding" innerDiv="inner-wedding">
        <p
            id="birthday-wedding-desc">Whether you’re celebrating a birthday, 
        a wedding or just making it through to Friday,
        say it with fresh doughnuts. Order doughnuts online 
        for events and occasions or pick up something special
        from our stores just for you. 
        We even hand-make vegan doughnuts</p>
        </Blob>

          <div id="cross-over-image-container">
            <CrossOverImage
              id="cross-over-image-desk"
              src={coffee}
              alt="coffee doughnut"
            />
          </div>
          <aside id="peek-inside-bakery-container">
            <div>
              <h2>Take a peek inside <br /> our Manchester bakery</h2>
            </div>
            <section id="video-wrapper">
              <video controls width="70%">
                <source src={video} type="video/webm"></source>
              </video>
            </section>
            <div>
              <p id="under-video-text">
                We spend our time baking handmade doughnuts for you to fill your
                hole with. Take a peek inside our Manchester bakery to see how
                they’re made.
              </p>
            </div>
          </aside>
        </section>
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
        <div id="button-container">
          <button className="pink-black-btn">
            Our Stores
          </button>
          </div>
        </section>
        </div>
      </section>
    </>
  );
};
