// Menu.jsx

import { Link } from 'react-router-dom';
import './MenuStyles.css';
import React, { useState } from 'react';
const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <section className="menu-row">
      <div className="menu-div">
        <button className="menu-btn" onClick={toggleMenu}>
          MENU<i className='bx bx-menu'></i>
        </button>
      </div>
      {isMenuVisible && (
        <ul className="menu-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/MensCollection">Men</Link></li>
        <li><Link to="/WomensCollection">Women</Link></li>
        <li><Link to="/BabyCollection">Baby Collection</Link></li>
        <li><Link to="/">Pages</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Contact</Link></li>
        </ul>
      )}
    </section>
  );
};

export default Menu;