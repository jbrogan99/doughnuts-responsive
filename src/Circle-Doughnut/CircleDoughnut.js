import React from "react";
import "./CircleDoughnut.css";

export const CircleDoughnut = ({ src, id, width, height, alt }) => {
  return <img src={src} width={width} height={height} id={id} alt={alt} />;
};
