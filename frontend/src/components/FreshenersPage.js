import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import freshenerBanner from '../assets/flower-freshener.png'; 
import './FreshenersPage.css';

const freshenerIds = [
  '685e7c2ee2dedb0fe94f4078',
  '685e7c9de2dedb0fe94f407a',
  '685e7d25e2dedb0fe94f407c',
  '685e7d93e2dedb0fe94f407e',
  '685fe2f03e2a2fca944558d7',
  '685fe3923e2a2fca944558d9',
  '685fe41f3e2a2fca944558db',
  '685fe5c93e2a2fca944558dd',
  '685fe6923e2a2fca944558df',
  '685fe7513e2a2fca944558e1'
];

    
const FreshenersPage = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const responses = await Promise.all(
          freshenerIds.map(id =>
            axios.get(`https://flower-delivery-app.onrender.com/api/flowers/${id}`)
          )
        );
        setFlowers(responses.map(res => res.data));
      } catch (error) {
        console.error('Error fetching freshener:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlowers();
  }, []);

  return (
    <section className="freshener-wrapper">
      <h1 className="section-title">Fresh Flowers</h1>

      {loading ? (
        <p className="loading-text">Loading fresheners...</p>
      ) : (
        <div className="content-layout">
          <div className="banner-container">
            <img src={freshenerBanner} alt="Freshener Banner" className="banner-image" />
          </div>

          <div className="flower-grid">
            {flowers.map(flower => (
              <Link to={`/product/${flower._id}`} key={flower._id} className="flower-card">
                <img src={flower.image} alt={flower.name} className="flower-image" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FreshenersPage;
