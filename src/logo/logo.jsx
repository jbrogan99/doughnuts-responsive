import React from "react";

import doughnut from "../images/doughnut-header.png";
import "./logo.css";
export const Logo = () => {
  return (
    <section aria-label="Doughnuts Logo" className="logo-container-desk">
      <p className="logo">D</p>
      <img className="logo_img" src={doughnut} alt="Doughnut for the O" />{" "}
      {/*adds image in the doughnuts logo*/}
      <p className="logo">ughnuts</p>
    </section>
  );
};
