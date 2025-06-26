import React, { useEffect, useState } from 'react';
import axios from 'axios';
import freshBanner from '../assets/freshBanner.png';

import './FreshFlowersPage.css';

const freshFlowerIds = [
  '67db3c72e2f589125d1b94ed',
  '67db3fbce2f589125d1b94ef',
  '67db4063e2f589125d1b94f1',
  '67db4544e2f589125d1b94f5',
  '682bac84474321f8f20d56f4',
  '682fa1eed4428c990f757894',
  '683f9845c75fe331b7003b20',
  '684e20f90f7e9f19147263f4',
  '684ec3cf8984e8ed69783135',
  '684ec45f8984e8ed69783137'
];

const FreshFlowersPage = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlowersByIds = async () => {
      try {
        const requests = freshFlowerIds.map(id =>
          axios.get(`https://flower-delivery-app.onrender.com/api/flowers/${id}`)
        );
        const responses = await Promise.all(requests);
        setFlowers(responses.map(res => res.data));
      } catch (error) {
        console.error('Failed to fetch fresh flower items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlowersByIds();
  }, []);

  return (
    <section className="fresh-flowers-wrapper">
      <h1 className="section-title">Fresh Flowers</h1>

      {loading ? (
        <p className="loading-text">Loading flowers...</p>
      ) : (
        <>
          <div className="banner-flower-wrapper">
  <div className="banner-container">
    <img src={freshBanner} alt="Fresh Flowers" className="banner-image" />
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

        </>
      )}
    </section>
  );
};

export default FreshFlowersPage;
