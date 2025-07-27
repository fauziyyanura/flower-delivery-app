import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

import floristImg from '../assets/florist.png';
import flowerFresh from '../assets/flower-fresh.png';
import flowerDried from '../assets/flower-dried.png';
import flowerLive from '../assets/flower-live.png';
import flowerCandle from '../assets/flower-candle.png';
import flowerFreshener from '../assets/flower-freshener.png';

const Hero = () => {
  return (
    <div className="home-container">
      <div className="container-of-desk">
        <section className="hero">
         <div className="top"> 
          <h1>Kyiv <br /><strong>LuxeBouquets®</strong></h1>
          <p>
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: 
            Spread Joy with Our <i>Online Flower Delivery Service</i>
          </p>
          </div>
          <div className="hero-content">
            <img src={floristImg} alt="florist" className="flo-img" />
            <div className="vertical-line"></div>
            <div className="hero-text">
             <p>Experience the joy of giving with our modern floral studio. Order online 
              and send fresh flowers, plants, and gifts today.</p> 
            </div>
          </div>
        </section>

        <section className="categories">
          <div className="category">
            <p>Fresh Flowers</p>
            <Link to="/shop/fresh-flowers" className="shop-cat">Shop now →</Link>
          </div>
          <div className="category">
            <img src={flowerFresh} alt="Fresh Flowers" />
          </div>

          <div className="category">
            <img src={flowerDried} alt="Dried Flowers" />
          </div>
          <div className="category">
            <p>Dried Flowers</p>
            <Link to="/shop/dried-flowers" className="shop-cat">Shop now →</Link> 
          </div>
        </section>
      </div>

      <div className="container-of-desk-2">
        <section className="empty-card"></section>
        <section className="categories">
          <div className="category">
            <p>Live Plants</p>
            <Link to="/shop/live-plants" className="shop-cat">Shop now →</Link> 
          </div>
          <div className="category">
            <img src={flowerLive} alt="Live Plants" />
          </div>

          <div className="category">
            <img src={flowerCandle} alt="Aroma Candles" />
          </div>
          <div className="category">
            <p>Aroma Candles</p>
            <Link to="/shop/aroma-candles" className="shop-cat">Shop now →</Link> 
          </div>

          <div className="category">
            <p>Fresheners</p>
            <Link to="/shop/fresheners" className="shop-cat">Shop now →</Link> 
          </div>
          <div className="category">
            <img src={flowerFreshener} alt="Fresheners" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
