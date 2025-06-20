import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-logo">Kyiv LuxeBouquets<sup>®</sup></div>

      <div className="hero-content">
        <div className="hero-left">
          <h1>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion</h1>
          <p>Spread Joy with Our Online Flower Delivery Service</p>
          <div className="hero-description">
            Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
          </div>
        </div>

        <div className="hero-right">
  {categories.map((cat, index) => (
    <div className="image-card" key={index}>
      <img src={cat.image} alt={cat.title} />
      <div className="overlay">
        <h3>{cat.title}</h3>
        <button>Shop Now</button>
      </div>
    </div>
  ))}
</div>

    </div>
    </section>
);
};

export default Hero;
