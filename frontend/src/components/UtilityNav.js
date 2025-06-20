// Rename this file to UtilityNav.jsx
import React from "react";
import "./UtilityNav.css"; // rename CSS accordingly

const UtilityNav = () => {
  return (
    <div className="utility-nav">
      <div className="utility-left">
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="utility-right">
        <a href="#signin">Sign In</a>
        <button className="cart">cart🛒</button>
      </div>
    </div>
  );
};

export default UtilityNav;
