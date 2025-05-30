import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://api.kodein.sch.id/api/v1/auth/login",
        formData
      );
      if (response.data.status === "success") {
        const data = response.data.data;
        const { token, ...userData } = data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));

        navigate("/");
      }
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Gap height={18} />
        <div className="input-wrapper">
          <p className="label">Email :</p>
          <input
            className="input"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <Gap height={18} />
        <div className="input-wrapper">
          <p className="label">Password :</p>
          <input
            className="input"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <Gap height={50} />
        <Button title="Login" onClick={handleSubmit} />
        <Gap height={100} />
        <Link
          text="Belum punya Akun?"
          textLink="Daftar"
          onClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
