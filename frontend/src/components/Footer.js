import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaPinterestP, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Column 1 */}
        <div className="footer-col reminder-col">
          <p>
            Remember to offer beautiful flowers from KYIV LuxeBouquets Valentines Day,
            Mothers Day, Christmas... Reminds you seven days before. No spam or sharing your address.
          </p>
          <div className="reminder-form">
            <input type="email" placeholder="Enter your email address" />
            <button>REMIND</button>
          </div>
        </div>

<div className="footer-col">
    <h4>Contact Us</h4>
          <p>15/4 Khreshchatyk Street, Kyiv</p>
          <p>+380980099777</p>
          <p>Kiev.Florist.Studio@gmail.com</p>
          <div className="footer-social">
            <FaInstagram />
            <FaFacebookF />
            <FaPinterestP />
            <FaTelegramPlane />
          </div>
        </div>


        {/* Column 3 – Shop & Service together */}
<div className="footer-col">
  <h4>Shop</h4>
  <ul>
    <li>All Products</li>
    <li>Fresh Flowers</li>
    <li>Dried Flowers</li>
    <li>Live Plants</li>
    <li>Designer Vases</li>
    <li>Aroma Candles</li>
    <li>Freshener Diffuser</li>
  </ul>

  <h4>Service</h4>
  <ul>
    <li>Flower Subscription</li>
    <li>Wedding & Event Decor</li>
  </ul>
</div>

        {/* Column 4 – About Us */}
        <div className="footer-col">
          <h4>About Us</h4>
          <ul>
            <li>Our story</li>
            <li>Blog</li>
            <li>Shipping & returns</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
