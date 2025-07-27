import React from 'react';
import './ReviewSection.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import googleLogo from '../assets/google-logo.svg'; 

const ReviewSection = () => {
  return (
    <div className="section">
    <section className="review-section">
      <img src={googleLogo} alt="Google logo" className="google-logo" />
      <h2 className="review-heading">REVIEWS</h2>

      <div className="review-box">
        <FaChevronLeft className="arrow" />

        <div className="review-content">
          <p className="quote top-line">
  “Ordered flowers online and they were the best bouquet! Impressed everyone around.
</p>
<p className="quote bottom-line">
  Highly recommend this flower shop!"
</p>

          <p className="author">Ronald Richards, via Google Reviews</p>
          <button className="review-button">READ REVIEWS</button>
        </div>

        <FaChevronRight className="arrow" />
    </div>
    </section>
    </div>
);
};

export default ReviewSection;
