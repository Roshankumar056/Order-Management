import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LogInPopup from '../LogInPopup/LogInPopup';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({}) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount} = useContext(StoreContext);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo-container">
          <img src={assets.navLogo} alt="Logo" className="logo" />
        </Link>

       

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li onClick={() => setMenu("home")} className={menu === 'home' ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMenu("products")} className={menu === 'products' ? "active" : ""}>
            <a href="#product-display">Products</a>
          </li>
          <li onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? "active" : ""}>
            <a href="#app-download">Mobile-App</a>
          </li>
          <li onClick={() => setMenu("contact us")} className={menu === 'contact us' ? "active" : ""}>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        <div className="navbar-right">
          <img width="30" height="25" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
          <div className="navbar-search-icon">
            <Link to="/cart">
             <img width="30" height="30" src="https://img.icons8.com/sf-regular-filled/48/shopping-cart.png" alt="shopping-cart"/>
            </Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={() => setShowLoginPopup(true)}>Sign In</button>
        </div>
      </div>

      {showLoginPopup && (
        <LogInPopup onClose={() => setShowLoginPopup(false)} />
      )}
    </>
  );
};

export default Navbar;
