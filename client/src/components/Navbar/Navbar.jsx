import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <Link to="/">
        <img src={assets.navLogo} alt="Logo" className='logo' />
      </Link>

      <ul className='navbar-menu'>
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
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.UfFXoK9ihlF0CPfVb8fcVAAAAA?pid=Api&P=0&h=40"
          alt="Profile"
        />
        <div className="navbar-serch-icon">
          <Link to="/cart">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.gHh0frdPvHBtKsSNhQiLMgHaEf?pid=Api&P=0&h=20"
              alt="Cart"
            />
          </Link>
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
