import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.navLogo} alt="logo" />
          <p>Delivering quality products with care — fast, reliable, and crafted to meet your every need.</p>

          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="fb" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
            <img src={assets.instagram_icon} alt="insta" />
          </div>
        </div>
        <div className="footer-content-center">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Explore Menu</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h3>Contact Us</h3>
          <p>Email: support@faststore.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Masai Road, Bengaluru, India</p>
        </div>
      </div>
      <p className="footer-bottom">© 2025 FastStore. All rights reserved.</p>
    </div>
  )
}

export default Footer
