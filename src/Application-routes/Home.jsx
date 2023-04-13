import React from "react";
import { Blob } from "../blob/blob";
import { Sprinkles } from "../sprinkles/sprinkles";
import video from "../video/video.mp4";
import coffee from "../images-320/coffee-min.jpg";
import sprinkles from "../images-320/sprinkles-min.jpg";
import hazelnut from "../images-320/hazlenut-min.jpg";
import lemon from "../images-320/lemon.jpg";
import biscoff from "../images-320/biscoff-min.jpg";
import caramel from "../images-320/caramel.jpg";
import jam from "../images-320/jam-min.jpg";
import velvet from "../images-320/redVelevt.jpg";
import cookies from "../images-320/cookie.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Home = ({ activePage, setActivePage }) => {
  const images = [sprinkles, biscoff, jam];
  const images2 = [hazelnut, caramel, velvet];
  const images3 = [lemon, coffee, cookies];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="background-desktop">
        <div className="width-desk-container">
          <section id="background-hero">
            <Sprinkles>
              <h1 className="hero-h1">Doughnuts Made Different</h1>
            </Sprinkles>
          </section>
          {/* <div className="background-color-0"> */}
          <div id="doughnut-image-container-desk">
            <figure id="images1">
              {images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt="rotation of doughnuts, caramel, biscoff, and jam"
                  className={`carousel-image ${
                    currentImageIndex === index ? "active" : ""
                  }`}
                />
              ))}
            </figure>
            <figure id="images2">
              {images2.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt="rotation of doughnuts, hazelnut, oozing caramel, and red velvet"
                  className={`carousel-image ${
                    currentImageIndex === index ? "active" : ""
                  }`}
                />
              ))}
            </figure>
            <figure id="images3">
              {images3.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt="rotation of doughnuts and cookies, lemon curd, coffee, and half chocolate coated cookie"
                  className={`carousel-image ${
                    currentImageIndex === index ? "active" : ""
                  }`}
                />
              ))}
            </figure>
            {/* </div> */}
            <div id="shop-donut-container">
              <Link
                to="/collection"
                onClick={() => setActivePage("doughnut")}
                className="pink-black-btn"
              >
                Shop our Doughnuts
              </Link>
            </div>
          </div>

          <main>
            <section id="celebrate-container">
              <Blob container="container-dipped" innerDiv="inner-dipped"></Blob>
              <h2>
                {" "}
                Celebrate with something <br /> different!{" "}
              </h2>
              <p id="home-description-desk" className="margin-p-mobile">
                <span className="bold-font">Dipped, dusted </span> and{" "}
                <span className="bold-font">deep-filled doughnuts.</span> Made
                by hand in Manchester, delivered across England, Wales and
                Scotland!
              </p>
            </section>
            <section id="home-description2-desk-container">
              <Blob container="container-wedding" innerDiv="inner-wedding">
                <p id="birthday-wedding-desc">
                  Whether you’re celebrating a birthday, a wedding or just
                  making it through to Friday, say it with fresh doughnuts.
                  Order doughnuts online for events and occasions or pick up
                  something special from our stores just for you. We even
                  hand-make vegan doughnuts.
                </p>
              </Blob>
              <aside id="peek-inside-bakery-container">
                <div>
                  <h2>
                    Take a peek inside <br /> our Manchester bakery
                  </h2>
                </div>
                <section id="video-wrapper">
                  <video controls>
                    <source src={video} type="video/webm"></source>
                  </video>
                </section>
                <div>
                  <p id="under-video-text">
                    We spend our time baking handmade doughnuts for you to fill
                    your hole with. Take a peek inside our Manchester bakery to
                    see how they’re made.
                  </p>
                </div>
              </aside>
            </section>
            <section id="home-description3">
              <h2 id="final-heading">
                You can find our delish Ds in more places than ever!
              </h2>
              <p id="ptagColours">
                Obey your rumble and tuck in at any of our
                <span className="redName"> Manchester, Stockport, Bolton </span>
                or
                <span className="redName"> Bury</span> stores - either box it up
                and go, or stick around with a coffee, it’s totally up to you.
                Not near a store? Fear not! Doughnuts Delivered lets you get
                your favourite doughnut flavours right to your door!
              </p>
              <div id="button-container">
                <button className="pink-black-btn">Our Stores</button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
