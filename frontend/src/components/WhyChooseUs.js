import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    title: 'Stylish bouquets by florists',
    description: 'We create elegant floral arrangements using only premium-quality materials and the latest trends in floral design.',
  },
  {
    title: 'On-time delivery',
    description: 'Enjoy personal delivery by our couriers, without boxes. Your bouquet arrives just like a gift from a friend.',
  },
  {
    title: 'Safe payment',
    description: 'Pay online with confidence. Our secure checkout protects your information every step of the way.',
  },
  {
    title: 'Subscription by your needs',
    description: 'Set your delivery schedule and preferences. Choose the format, frequency, and flowers that suit you best.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      {/* Left Column */}
      <div className="why-left">
        <h2>WHY CHOOSE US</h2>
      </div>

      {/* Right Column */}
      <div className="why-right">
        {features.map((item, idx) => (
          <div key={idx} className="why-feature">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
