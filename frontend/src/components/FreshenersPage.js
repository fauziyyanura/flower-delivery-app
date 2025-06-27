import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import freshenerBanner from '../assets/flower-freshener.png'; 
import './FreshenersPage.css';

const FreshenersPage = () => {
  const [fresheners, setFresheners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFresheners = async () => {
      try {
        const res = await axios.get('https://flower-delivery-app.onrender.com/api/flowers');
        const filtered = res.data.filter(item => item.category === 'Fresheners');
        setFresheners(filtered);
      } catch (error) {
        console.error('Failed to fetch fresheners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFresheners();
  }, []);

  return (
    <section className="fresheners-wrapper">
      <h1 className="section-title">Fresheners</h1>

      {loading ? (
        <p className="loading-text">Loading fresheners...</p>
      ) : (
        <div className="banner-flower-wrapper">
          <div className="banner-container">
            <img src={freshenerBanner} alt="Fresheners" className="banner-image" />
          </div>

          <div className="all-flowers-grid">
            {fresheners.map(item => (
              <Link to={`/product/${item._id}`} key={item._id} className="flower-card">
                <img src={item.image} alt={item.name} className="flower-image" />
                <div className="flower-details">
                  <h3 className="flower-name">{item.name}</h3>
                  <p className="flower-price">₦{item.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FreshenersPage;
