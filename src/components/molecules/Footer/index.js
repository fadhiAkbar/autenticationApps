import React from "react";
import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconYoutube,
} from "../../../assets";
import { Icon } from "../../atoms";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="wrapper-icon">
          <Icon img={IconFacebook} />
          <Icon img={IconInstagram} />
          <Icon img={IconYoutube} />
          <Icon img={IconGithub} />
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright <span>&#169;</span> 2022-2023 Kartono Saleh All Right
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
