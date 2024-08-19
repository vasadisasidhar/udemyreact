import React from "react";
import "../../CSS/Header.css";
import image from "../../Images/react-core-concepts.png"

const dynamicvalue = ["Fundamental", "Core", "Advanced"];

function getDynamicValue(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const randomValue = dynamicvalue[getDynamicValue(dynamicvalue.length - 1)];

  return (
    <div>
      <header>
        <img src={image}></img>
        <h1>React Essentials</h1>
        <p>
          {randomValue} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}

export default Header;
