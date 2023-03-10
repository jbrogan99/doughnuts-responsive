import React from "react";
import "./CircleDoughnut.css";

export const CircleDoughnut = ({ id, src, alt, children }) => {
  return (
    <figure className="doughnut-img-desc" id={id}>
      <div className="doughnut-circle-container">
        <img src={src} className="circle-doughnut" alt={alt} />
        <div className="desc-container-circle">
          <p>{children}</p>
        </div>
      </div>
    </figure>
  );
};
