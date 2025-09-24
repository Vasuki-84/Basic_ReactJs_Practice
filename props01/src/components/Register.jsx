import React from "react";
import Button from "./Button";

function Register() {
  return (
    <div>
      <h2>Register Form</h2>
      <input type="text" placeholder="enter your name" />
      <input type="email" placeholder="enter your mail" />
      <input type="password" placeholder="enter your password" />
      <input type="text" placeholder="enter your Mobile number" />
      <Button label="Register" />
    </div>
  );
}

export default Register;
