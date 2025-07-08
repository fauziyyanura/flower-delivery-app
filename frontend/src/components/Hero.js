import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.css';

import floristImg from '../assets/florist.png';
import flowerFresh from '../assets/flower-fresh.png';
import flowerDried from '../assets/flower-dried.png';
import flowerLive from '../assets/flower-live.png';
import flowerCandle from '../assets/flower-candle.png';
import flowerFreshener from '../assets/flower-freshener.png';

const categories = [
  { image: flowerFresh, label: 'Fresh Flowers', path: '/shop/fresh-flowers' },
  { image: flowerDried, label: 'Dried Flowers', path: '/shop/dried-flowers' },
  { image: flowerLive, label: 'Live Plants', path: '/shop/live-plants' },
  { image: flowerCandle, label: 'Aroma Candles', path: '/shop/aroma-candles' },
  { image: flowerFreshener, label: 'Fresheners', path: '/shop/fresheners' },
];

// This define the layout pattern manually to match the Figma
const layoutPattern = ['text-first', 'image-first', 'text-first', 'image-first', 'text-first'];

const Hero = () => {
  return (
    <div className='home-a'>

    <section className="hero-section">
      {/* Left Column */}
      <div className="hero-left">
        <h1><strong>Kyiv <br /> LuxeBouquets<sup>®</sup></strong></h1>
        <p className="subheading">
          Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our <i>Online Flower Delivery Service</i>.
        </p>

        <div className="florist-info">
          <img src={floristImg} alt="Florist" className='flo-image' />
          <p className='flow-text'>
            Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="hero-right">
        {categories.map((cat, index) => (
          <div key={index} className={`category-pair ${index === 4 ? 'centered' : ''}`}>
            {layoutPattern[index] === 'text-first' ? (
              <>
                <div className="text-card">
                  <h4>{cat.label}</h4>
                  <Link to={cat.path} className="shop-now-btn">Shop now →</Link>
                </div>
                <div className="image-card">
                  <img src={cat.image} alt={cat.label} />
                </div>
              </>
            ) : (
              <>
                <div className="image-card">
                  <img src={cat.image} alt={cat.label} />
                </div>
                <div className="text-card">
                  <h4>{cat.label}</h4>
                  <Link to={cat.path} className="shop-now-btn">Shop now →</Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Hero;
