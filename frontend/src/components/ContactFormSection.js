import React from 'react';
import './ContactFormSection.css';
import storefrontImg from '../assets/storefront.png'; // Replace with your actual image path
import { FaInstagram, FaPinterestP, FaFacebookF, FaTwitter, FaTelegram } from 'react-icons/fa';

const ContactFormSection = () => {
  return (
        <section className="contact-form-section">
      {/* Left Column */}
      <div className="form-left">
  <h2>To Contact Us</h2>
  <p className="form-description">Leave your number and we’ll get back to you shortly</p>
  
  <form className="phone-form">
  <input type="tel" placeholder="+380 XX XXX XX XX" required />
  <button type="submit">BOOK A CALL</button>
</form>


  <div className="contact-details">
    <div className="detail-block">
      <h4>Phone</h4>
      <p>+380980099777</p>
      <p>+380980099111</p>
    </div>
    
    <div className="detail-block">
      <h4>Address</h4>
      <p>8 to 11 P.M.</p>
      <p>15/4 Khreshchatyk Street, Kyiv</p>
    </div>
  </div>
</div>


      {/* Right Column */}
      <div className="form-right">
        <img src={storefrontImg} alt="Kyiv LuxeBouquets storefront" />
        <h3>Kyiv LuxeBouquets</h3>
        <p>Arrangement by the best florists of the country</p>
        <h4>Follow us</h4>
        <div className="social-row">
          <button className="social-button" aria-label="Instagram"><FaInstagram /></button>
          <button className="social-button" aria-label="Pinterest"><FaPinterestP /></button>
          <button className="social-button" aria-label="Facebook"><FaFacebookF /></button>
          <button className="social-button" aria-label="Twitter"><FaTwitter /></button>
          <button className="social-button" aria-label="Telegram"><FaTelegram /></button>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;




