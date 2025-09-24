import React from "react";
import Button from "./Button";
import Input from "./input";

function Login() {
  const login = () => {
    alert("Login successfull");
  };
  return (
    <div>
      <h1>Login Form</h1>
    <Input type="text" placeholder="john@mail.com"/>
     
      <Input type="password" placeholder="*****" />

      <Button label="Login" clickfunction={login} />
    </div>
  );
}

export default Login;
