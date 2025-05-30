import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      full_name: fullName,
      email: email,
      password: password,
      gender: gender,
    };

    try {
      const response = await axios.post(
        "https://api.kodein.sch.id/api/v1/auth/register",
        formData
      );
      navigate("/login");
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Form Register</p>
        <Gap height={18} />
        <div className="input-wrapper">
          <p className="label">Full Name :</p>
          <input
            className="input"
            placeholder="fullname"
            onChange={(e) => setFullName(e.target.value)}
            type="text"
          />
        </div>
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
        <Gap height={18} />
        <div className="input-wrapper">
          <label for="gender" className="label">
            Gender :
          </label>
          <select
            name="gender"
            id="gender"
            className="input"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <Gap height={50} />
        <Button title="Register" onClick={handleSubmit} />
        <Gap height={100} />
        <Link
          text="Kembali ke"
          textLink="Login"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Register;
