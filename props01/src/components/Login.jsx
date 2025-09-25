import React from "react";
import Button from "./Button";
import Input from "./input";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="form-title">Login</h2>
        <input type="email" className="input-field" placeholder="Email" />
        <input type="password" className="input-field" placeholder="Password" />
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;