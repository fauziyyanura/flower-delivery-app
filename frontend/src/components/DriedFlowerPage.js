import React, { useEffect, useState } from 'react';
import axios from 'axios';
import driedBanner from '../assets/flower-dried.png';
import './DriedFlowerPage.css';

const driedFlowerIds = [
  '685c98883c00c4412661b25a',
  '685c991c3c00c4412661b25c',
  '685c99bd3c00c4412661b25e',
  '685c9a9e3c00c4412661b260',
  '685c9b273c00c4412661b262',
  '685c9bad3c00c4412661b264',
  '685c9cbc3c00c4412661b266',
  '685c9eda3c00c4412661b268',
  '685c9f4c3c00c4412661b26a',
  '685c9fbc3c00c4412661b26c'
];

const DriedFlowersPage = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlowersByIds = async () => {
      try {
        const responses = await Promise.all(
          driedFlowerIds.map(id =>
            axios.get(`https://flower-delivery-app.onrender.com/api/flowers/${id}`)
          )
        );
        setFlowers(responses.map(res => res.data));
      } catch (error) {
        console.error('Failed to fetch dried flower items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlowersByIds();
  }, []);

  return (
    <section className="dried-flowers-wrapper">
      <h1 className="section-title">Dried Flowers</h1>

      {loading ? (
        <p className="loading-text">Loading flowers...</p>
      ) : (
        <div className="banner-flower-wrapper">
          <div className="banner-container">
            <img src={driedBanner} alt="Dried Flowers" className="banner-image" />
          </div>

          <div className="all-flowers-grid">
            {flowers.map(flower => (
              <div key={flower._id} className="flower-card">
                <img src={flower.image} alt={flower.name} className="flower-image" />
                <div className="flower-details">
                  <h3 className="flower-name">{flower.name}</h3>
                  <p className="flower-price">₦{flower.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default DriedFlowersPage;
