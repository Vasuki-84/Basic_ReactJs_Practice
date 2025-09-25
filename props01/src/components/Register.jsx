
import React from "react";
import Button from "./Button";
import Input from "./input";
import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2 className="form-title">Register</h2>
        <input type="text" className="input-field" placeholder="Full Name" />
        <input type="email" className="input-field" placeholder="Email" />
        <input type="password" className="input-field" placeholder="Password" />
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;


