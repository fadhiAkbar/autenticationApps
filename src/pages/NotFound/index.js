import React from "react";
import { ILNotFound } from "../../assets";
import "./notFound.scss";

const NotFound = () => {
  return (
    <div className="container">
      <img className="illustration" src={ILNotFound} />
      <p>Page Not Found</p>
    </div>
  );
};

export default NotFound;
