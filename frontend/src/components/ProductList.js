// src/pages/ProductList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://flower-delivery-app.onrender.com/api/flowers")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="product-list">
      <h2>🌸 Browse All Bouquets</h2>
      <div className="products-grid">
        {products.map((flower) => (
          <div key={flower._id} className="product-card">
            <img src={flower.image} alt={flower.name} />
            <h3>{flower.name}</h3>
            <p> ${flower.price.toLocaleString()}</p>
            <Link to={`/product/${flower._id}`}>
              <button>View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
