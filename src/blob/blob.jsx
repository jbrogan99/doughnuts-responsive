import React from "react";

export const Blob = ({ container, innerDiv, children }) => {
  return (
    <div className={container}>
      <div className={innerDiv}>{children}</div>
    </div>
  );
};
