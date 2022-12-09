import React from "react";

const Icon = ({ img }) => {
  return (
    <div>
      <img
        style={{ width: 30, height: 30, cursor: "pointer" }}
        src={img}
        alt={img}
      />
    </div>
  );
};

export default Icon;
