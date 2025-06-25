import React from 'react';
import './ServiceSection.css';
import subscriptionImg from '../assets/subscription.png';

const ServiceSection = () => {
  return (
    <>
      {/* Flower Subscription Block */}
      <section className="service-section">
        <div className="service-left">
          <img src={subscriptionImg} alt="Flower subscription visual" />
        </div>

        <div className="service-right">
          <h2>Our Service</h2>
          <h3>Flower Subscriptions</h3>
          <p>
            Experience the convenience and savings of regular flower deliveries with our
            flexible subscription service – up to 30% more profitable than one-time purchases.
          </p>
          <button>SUBSCRIBE NOW</button>
        </div>
      </section>

      {/* Wedding & Event Decor Block */}

        <section className="event-hero">
  <div className="event-overlay">
    <h2>Wedding & Event Decor</h2>
    <p>
      Let our team of expert florists and designers create stunning, on-trend floral décor 
      for your special day. Trust us to bring your vision to life.
    </p>
    <button>INQUIRE NOW</button>
  </div>
</section>
    </>
  );
};

export default ServiceSection;
