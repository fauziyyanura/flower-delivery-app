// src/pages/Checkout.js
import React from "react";
import { FaLock } from "react-icons/fa";
//import "./Checkout.css";

const Checkout = ({ cartItems, total }) => {
  const handlePayment = async () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/payments/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Stripe error response:", errorText);
        alert("Payment failed. Please try again.");
        return;
      }

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("No payment link returned. Please try again later.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="checkout-container">
      {cartItems.map((item, index) => (
        <div className="checkout-item" key={index}>
          <img src={item.imageUrl} alt={item.name} className="checkout-img" />
          <div className="details">
            <h3>{item.name}</h3>
            <p>Quantity ({item.quantity})</p>
          </div>
          <div className="item-price">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}

      <div className="checkout-summary">
        <div className="row">
          <span>Subtotal</span>
          <span>${(total ?? 0).toFixed(2)}</span>
        </div>
        <div className="row">
          <span>Shipping</span>
          <span className="note">Calculated at next step</span>
        </div>
        <div className="row total">
          <strong>Total</strong>
          <strong>${(total ?? 0).toFixed(2)}</strong>
        </div>
        <div className="secure-checkout">
          <FaLock className="lock-icon" />
          <span>Secure Checkout</span>
        </div>
        <button className="pay-btn" onClick={handlePayment}>
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
