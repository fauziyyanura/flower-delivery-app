import React from 'react';
import { Link } from 'react-router-dom';

import './AboutSection.css';

const AboutSection = () => {
  return (
<div className="about">
      <section className="about-header">
        <h1>About us</h1>
      </section>

      <section className="about-content">
        <p className="story-title">OUR STORY</p>
        <h3>Kyiv LuxeBouquets</h3>
        <p>
          We are a modern local floral studio, which specializes in the design
          and delivery of unique bouquets. We have the best florists who
          carefully select each look. Our studio cooperates directly with farms
          for growing different flowers, so we always have fresh flowers...
        </p>
        <div className="Learn-more">
        <Link to="/AboutPage">
  <button>LEARN MORE</button>
</Link>
</div>
      </section>
    </div>

  );
};

export default AboutSection;
