import React from "react";
import "./CircleDoughnut.css";

export const CircleDoughnut = ({ src, alt, children}) => {
  return (
    <section className="doughnut-img-desc">
      <div className="doughnut-circle-container">
      <img src={src} className="circle-doughnut" alt={alt} />
      <div className="desc-container-circle">
      <p>{children}</p>
      </div>
      </div>
    
    </section>
  );
};
