import React from "react";

import doughnut from "../images/doughnut_transparent_w-min.png";
import "./logo.css";
export const Logo = () => {
  return (
    <section
      aria-label="Doughnuts Logo"
      id="logo-container"
      className="logo-container-desk"
    >
      <p className="logo">D</p>
      <img
        id="logo_img"
        width="35em"
        height="35em"
        src={doughnut}
        alt="Doughnut for the O"
      />
      <p className="logo">ughnuts</p>
    </section>
  );
};
