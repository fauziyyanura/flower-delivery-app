import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchProductAndRelated = async () => {
      try {
        // Fetch single product
        const productRes = await axios.get(`https://flower-delivery-app.onrender.com/api/flowers/${id}`);
        setProduct(productRes.data);

        // Fetch all flowers
        const allProductsRes = await axios.get('https://flower-delivery-app.onrender.com/api/flowers');
        const allFlowers = allProductsRes.data;

        // Filter out the current flower and pick 3 suggestions
        const suggestions = allFlowers
          .filter(item => item._id !== id)
          .slice(0, 3);

        setRelated(suggestions);
      } catch (error) {
        console.error('Error fetching product or related items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndRelated();
  }, [id]);

  const handleQuantityChange = (type) => {
    setQuantity(prev =>
      type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  const handleAddToBasket = () => {
    const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingIndex = currentCart.findIndex(item => item._id === product._id);

    if (existingIndex !== -1) {
      currentCart[existingIndex].quantity += quantity;
    } else {
      currentCart.push({
        _id: product._id,
        name: product.name,
        imageUrl: product.image,
        price: product.price,
        quantity: quantity,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(currentCart));

    alert(`Added ${quantity} of ${product.name} to basket!`);
    navigate('/cart'); // 🔁 Redirect to cart after confirmation
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (!product) return <div className="error">Product not found.</div>;

  return (
    <div className="productpage-wrapper">
      <section className="product-section">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price"> ${product.price.toLocaleString()}</p>
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
