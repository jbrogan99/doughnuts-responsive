import React from "react";
import cropped_doughnut from "../images/cropped_doughnut.jpg";
import doughnut from "../images/doughnut_transparent_w.png";
import "./logo.css";
export const Logo = () => {
  return (
    <section aria-label="Doughnuts Logo">
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
