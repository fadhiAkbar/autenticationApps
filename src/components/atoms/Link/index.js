import React from "react";
import "./link.scss";

const Link = ({ text, textLink, onClick }) => {
  return (
    <div className="wrapper">
      <p className="text">{text}</p>
      <p className="link" onClick={onClick}>
        {textLink}
      </p>
    </div>
  );
};

export default Link;
