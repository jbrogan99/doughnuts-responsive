import React from "react";
import doughnutBackground from "../images/cartoon_doughnuts_falling-min.jpg";
import { Sprinkles } from "../sprinkles/sprinkles";
export const ContactUs = () => {
  return (
    <>
      <div id="container-contact-us">
        <section>
          <Sprinkles>
            <h1 id="stock-our-stuff" className="hero-h1">
              Contact Us
            </h1>
          </Sprinkles>
        </section>
        <main id="contact-us-banner-container">
          <h2 id="banner-text">
            Doughnut <span>addiction</span> hotline
          </h2>
          <p>07893778446</p>
        </main>
        <section id="contact-us-para-container">
          <p>
            We’re pretty busy baking doughnuts – up to our eyeballs in cookie
            crumbs and caramel sauce, but you can always give us a call to find
            out more.
          </p>
          <p>
            Simply check which store you want and pick up the phone to have a
            chat, or better yet, get in touch by filling in our form and we’ll
            get back to you.
          </p>
          <p>
            Don’t forget to sign up to our mailing list for special offers, too!
          </p>
        </section>
      </div>
    </>
  );
};
