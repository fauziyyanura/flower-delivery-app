import React, { useEffect, useState } from 'react';
import axios from 'axios';
import liveBanner from '../assets/flower-live.png'; // Replace with your actual banner image path
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

const LivePlantsPage = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLivePlants = async () => {
      try {
        const responses = await Promise.all(
          livePlantIds.map(id =>
            axios.get(`http://localhost:5000/api/flowers/${id}`)
          )
        );
        setPlants(responses.map(res => res.data));
      } catch (error) {
        console.error('Failed to fetch live plants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLivePlants();
  }, []);

  return (
    <section className="live-plants-wrapper">
      <h1 className="section-title">Live Plants</h1>

      {loading ? (
        <p className="loading-text">Loading plants...</p>
      ) : (
        <div className="banner-flower-wrapper">
          <div className="banner-container">
            <img src={liveBanner} alt="Live Plants Banner" className="banner-image" />
          </div>

          <div className="all-flowers-grid">
            {plants.map(plant => (
              <div key={plant._id} className="flower-card">
                <img src={plant.image} alt={plant.name} className="flower-image" />
                <div className="flower-details">
                  <h3 className="flower-name">{plant.name}</h3>
                  <p className="flower-price">₦{plant.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default LivePlantsPage;
