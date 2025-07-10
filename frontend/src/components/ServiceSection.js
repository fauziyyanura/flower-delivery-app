import React from 'react';
import './ServiceSection.css';
import eventDecorImg from '../assets/event-decor.png';

import subscriptionImg from '../assets/subscription.png';

const ServiceSection = () => {
  return (
    <>
      {/* Flower Subscription Block */}
      <div className="sub-section">
      <section className="service-section">
        <div className="service-left">
          <img src={subscriptionImg} alt="Flower subscription visual" />
        </div>

        <div className="service-right">
          <h2>Our Service</h2>
          <h3>Flower Subscriptions</h3>
          <p>
            Experience the convenience and savings of regular flower deliveries with our
            flexible subscription service - up to 30% more profitable than one-time purchases.
          </p>
          <button>SUBSCRIBE NOW</button>
        </div>
      </section>

      {/* Wedding & Event Decor Block */}

        <section className="event-hero">
       <img src={eventDecorImg} alt="Wedding & Event decor visual" />
</section>
</div>
    </>
  );
};

export default ServiceSection;
