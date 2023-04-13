import React from "react";
import caramel from "../images-about-resized/caramel.jpg";
import redVelvet from "../images-about-resized/redVelevt.jpg";
import cake from "../images-about-resized/cake1.jpg";
import cookieBiscoff from "../images-about-resized/biscoff-cookie.jpg";
import hazelnut from "../images-about-resized/hazlenut-min.jpg";
import sprinkles from "../images-about-resized/sprinkles-min.jpg";
import lemon from "../images-about-resized/lemon.jpg";
import coffee from "../images-about-resized/coffee-min.jpg";
import { Sprinkles } from "../sprinkles/sprinkles";
export const StockOurStuff = () => {
  return (
    <>
      <div id="container-stock-our-stuff">
        <section>
          <Sprinkles>
            <h1 id="stock-our-stuff" className="hero-h1">
              Stock our stuff
            </h1>
          </Sprinkles>
        </section>
        <section>
          <figure id="pic-collage-container">
            <img src={caramel} alt="carmael doughnut" id="caramel-stock" />
            <img
              src={redVelvet}
              alt="red velvet doughnut"
              id="red-velvet-stock"
            />
            <img src={cake} alt="strawberry cake" id="cake-stock" />
            <img
              src={cookieBiscoff}
              alt="biscoff cookie"
              id="biscoff-cookie-stock"
            />
            <img
              src={hazelnut}
              alt="hazelnut doughnut"
              id="hazelnut-doughnut-stock"
            />
            <img
              src={sprinkles}
              alt="sprinkled iceing sugar onto caramel doughnut"
              id="sprinkled-doughnut-stock"
            />
            <img src={lemon} alt="lemon doughnut" id="lemon-doughnut-stock" />
            <img
              src={coffee}
              alt="coffee doughnut"
              id="coffee-doughnut-stock"
            />
          </figure>
        </section>
        <main id="heading-description-wholesale-container">
          <h2>Wholesale Doughnuts</h2>
          <p>
            We’ve already got a number of stockists outside of our stores –
            including coffee shops and eateries– so why not join the club? You
            can have our bright, bold and curvaceous buns to add to your store,
            offering your customers something extra when you bulk buy wholesale
            doughnuts
          </p>
          <p>
            Whether you need bulk doughnuts or a regular wholesale doughnut
            supplier, chuck your details in our form and we’ll get back to you.
            We’re knee-deep in batter at the moment, but we’ll be in touch about
            the doughnuts wholesale process.
          </p>
        </main>
      </div>
    </>
  );
};
