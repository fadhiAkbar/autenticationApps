import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.log("error :", error);
      }
    }
  }, []);

  console.log(user);
  return (
    <div className="header">
      <p className="logo-app">TomSaymon Blog</p>
      <p
        className="menu-item"
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        Logout
      </p>
    </div>
  );
};

export default Header;
