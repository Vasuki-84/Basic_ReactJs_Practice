import React from "react";
import Button from "./Button";
import Input from "./input";

function Register() {
    const register = () => {
        alert("Registration successful");
    }
  return (
    <div>
      <h2>Register Form</h2>
     
      <Input type="text" placeholder="your name" />
      <Input type="email" placeholder="enter your mail" />
      <Input type="password" placeholder="enter your password" />
      <Input type="text" placeholder="enter your Mobile number" />
      <Button label="Register" clickfunction={register} />
    </div>
  );
}

export default Register;
