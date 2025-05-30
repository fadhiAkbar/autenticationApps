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
  const handleLogOut = async () => {
    try {
      const response = await axios.delete(
        "https://api.kodein.sch.id/api/v1/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.refresh_token}`, // Still using refresh_token as per API
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("error :", error);
    }
  };
  return (
    <div className="header">
      <p className="logo-app">TomSaymon Blog</p>
      <p className="menu-item" onClick={handleLogOut}>
        Logout
      </p>
    </div>
  );
};

export default Header;
