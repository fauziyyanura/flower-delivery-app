import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductAndFresheners = async () => {
      try {
        // Fetch selected product
        const productRes = await axios.get(`https://flower-delivery-app.onrender.com/api/flowers/${id}`);
        setProduct(productRes.data);

        // Fetch all products and filter for fresheners
        const allRes = await axios.get('https://flower-delivery-app.onrender.com/api/flowers');
        const fresheners = allRes.data.filter(item => item.category === 'Fresheners');
        setRelated(fresheners.slice(0, 4));
      } catch (error) {
        console.error('Error fetching product or related items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndFresheners();
  }, [id]);

  const handleQuantityChange = (type) => {
    setQuantity(prev =>
      type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  const handleAddToBasket = () => {
    alert(`Added ${quantity} of ${product.name} to basket!`);
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (!product) return <div className="error">Product not found.</div>;

  return (
    <div className="productpage-wrapper">
      <section className="product-section">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">₦{product.price.toLocaleString()}</p>
          <p className="product-desc">{product.description}</p>

          <div className="quantity-controls">
            <button onClick={() => handleQuantityChange('dec')}>–</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange('inc')}>+</button>
          </div>

          <button className="add-to-basket" onClick={handleAddToBasket}>
            Add to Basket
          </button>
        </div>
      </section>

      <section className="related-section">
        <h2 className="related-title">You may also like...</h2>
        <div className="related-grid">
          {related.map(item => (
            <div key={item._id} className="related-item">
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
