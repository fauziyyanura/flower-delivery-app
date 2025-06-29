
import React, { useState, useEffect } from "react";
//import Checkout from "../Checkout";
//import '../App.css';
import Checkout from "../pages/Checkout";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert("You must be signed in to proceed to checkout.");
      return;
    }
    setCheckout(true);
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container show">
      <h2>Shopping Cart</h2>

      {checkout ? (
        <Checkout cartItems={cartItems} total={calculateTotal()} />
      ) : (
        <>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="cart-img"
                />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => handleRemoveFromCart(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <strong>${calculateTotal().toFixed(2)}</strong>
            </div>
            <input
              type="text"
              placeholder="Gift Message"
              className="gift-input"
            />
            <p className="shipping-note">
              Shipping & taxes calculated at checkout
            </p>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={!isAuthenticated}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
