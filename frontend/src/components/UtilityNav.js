import React from "react";
import { Link } from "react-router-dom";
import "./UtilityNav.css";

const UtilityNav = () => {
  return (
    <div className="utility-nav">
      <div className="utility-left">
        <Link to="/product">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="utility-right">
        <Link to="/signin">Sign In</Link>
        <Link to="/cart" className="cart">cart 🛒</Link>
      </div>
    </div>
  );
};

export default UtilityNav;
