import React from "react";
import "./CategoryGrid.css";

const categories = [
  {
    title: "Fresh Flowers",
    image: "/assets/fresh-flowers.jpg",
    buttonLabel: "Shop Now",
  },
  {
    title: "Dried Flowers",
    image: "/assets/dried-flowers.jpg",
    buttonLabel: "Shop Now",
  },
  {
    title: "Live Plants",
    image: "/assets/live-plants.jpg",
    buttonLabel: "Shop Now",
  },
  {
    title: "Aroma Candles",
    image: "/assets/aroma-candels.jpg",
    buttonLabel: "Shop Now",
  },
  {
    title: "Fresheners",
    image: "/assets/fresheners.jpg",
    buttonLabel: "Shop Now",
  },
];

const CategoryGrid = () => {
  return (
<div className="hero-right">
  {categories.map((cat, index) => (
    <div className="image-card" key={index}>
      <img src={cat.image} alt={cat.title} />
      <div className="overlay">
        <h3>{cat.title}</h3>
        <button>{cat.buttonLabel}</button>
      </div>
    </div>
  ))}
</div>
);
};

export default CategoryGrid;
