import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import liveBanner from '../assets/flower-live.png';
import './LivePlantsPage.css';

const livePlantIds = [
  '685cac7c3c00c4412661b26e',
  '685cace13c00c4412661b270',
  '685cad503c00c4412661b272',
  '685cadc43c00c4412661b274',
  '685cae293c00c4412661b276',
  '685caeaf3c00c4412661b278',
  '685caef63c00c4412661b27a',
  '685cafd23c00c4412661b27c',
  '685cb12b3c00c4412661b280',
  '685cb16c3c00c4412661b282'
];

const LivePlantPage  = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const responses = await Promise.all(
          livePlantIds.map(id =>
            axios.get(`https://flower-delivery-app.onrender.com/api/flowers/${id}`)
          )
        );
        setFlowers(responses.map(res => res.data));
      } catch (error) {
        console.error('Error fetching live plants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlowers();
  }, []);

  return (
    <section className="liveplants-wrapper">
      <h1 className="section-title">Live Plants</h1>

      {loading ? (
        <p className="loading-text">Loading live plants...</p>
      ) : (
        <div className="content-layout">
          <div className="banner-container">
            <img src={liveBanner} alt="Live Plant Banner" className="banner-image" />
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

export default LivePlantPage;
