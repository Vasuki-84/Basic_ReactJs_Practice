import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  // props - example
  // username variable
  let username = "vasuki";
  let role = "buyer"; // buyer , seller

  return (
    <div>
      <Login />
      <Register />
      <div style={{marginTop: "100px"}}>
        {/*  name variable is props, it carries the variable value into Home component  */}
        <Home name={username} userRole={role} />
      </div>
    </div>
  );
}

export default App;
