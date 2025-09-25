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
     
      <Input type="text" placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your mail" />
      <Input type="password" placeholder="Enter your password" />
      <Input type="text" placeholder="Enter your Mobile number" />
      <Button label="Register" clickfunction={register} />
    </div>
  );
}

export default Register;
