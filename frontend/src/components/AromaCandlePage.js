import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import aromaBanner from '../assets/flower-candle.png';
import './AromaCandlePage.css';

const aromaCandleIds = [
  '685d85aa9a54d95caf594825',
  '685d89539a54d95caf594835',
  '685d874f9a54d95caf59482d',
  '685ed8d9ff5fda2ee84c8162',
  '685d87d49a54d95caf59482f',
  '685d87059a54d95caf59482b',
  '685d889d9a54d95caf594831',
  '685d86189a54d95caf594827',
  '685d869f9a54d95caf594829',
  '685d85559a54d95caf594823'
];

const AromaCandlePage = () => {
  const [candles, setCandles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandles = async () => {
      try {
        const responses = await Promise.all(
          aromaCandleIds.map(id =>
            axios.get(`https://flower-delivery-app.onrender.com/api/flowers/${id}`)
          )
        );
        setCandles(responses.map(res => res.data));
      } catch (error) {
        console.error('Failed to fetch aroma candles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandles();
  }, []);

  return (
    <section className="aroma-candle-wrapper">
      <h1 className="section-title">Aroma Candles</h1>

      {loading ? (
        <p className="loading-text">Loading candles...</p>
      ) : (
        <div className="banner-flower-wrapper">
          <div className="banner-container">
            <img src={aromaBanner} alt="Aroma Candle Banner" className="banner-image" />
          </div>

          <div className="all-flowers-grid">
            {candles.map(candle => (
              <Link
                to={`/product/${candle._id}`}
                key={candle._id}
                className="flower-card"
              >
                <img src={candle.image} alt={candle.name} className="flower-image" />
                
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AromaCandlePage;
