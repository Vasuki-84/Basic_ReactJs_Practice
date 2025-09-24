import React from "react";
import Button from "./Button";

function Home({ name, userRole }) {
  return (
    <div>
      {/* Destructuring */}
      <h1>Welcome {name}</h1>
      <p>Your role is {userRole}</p>

      {/* Conditional Rendering using Ternary Operator */}
      {/* ? - if | : - else */}
      {userRole === "buyer" ? (
        <div>
          <ul>
            <li>Watch</li>
            <Button label="Add to Cart" />
            <li>Laptop</li>
            <Button label="Add to Cart" />
            <li>Books</li>
            <Button label="Add to Cart" />
          </ul>
          <Button label="buy now" />
        </div>
      ) : userRole === "seller" ? (
        <div>
          <Button label="Create your product" />
          <Button label="Post Product" />
        </div>
      ) : (
        <p>No user role found</p>
      )}
    </div>
  );
}

export default Home;
