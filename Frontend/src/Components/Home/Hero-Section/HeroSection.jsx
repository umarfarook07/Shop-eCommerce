import React from "react";
import { Link } from "react-router-dom";

import mensCollectionImg from "./Images/items1.jpg.webp";
import womensCollectionImg from "./Images/items2.jpg.webp";
import babysCollectionImg from "./Images/items3.jpg.webp";

import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="collection-grid">
        <div className="mens-collection">
          <Link to="/MensCollection">
            <img
              className="collection-img"
              src={mensCollectionImg}
              alt="Men's Collection"
            />
            <span>Men's Collection</span>
          </Link>
        </div>
        <div className="womens-collection">
          <Link to="/WomensCollection">
            <img
              className="collection-img"
              src={womensCollectionImg}
              alt="Women's Collection"
            />
            <span>Women's Collection</span>
          </Link>
        </div>
        <div className="baby-collection">
          <Link to="/BabyCollection">
            <img
              className="collection-img"
              src={babysCollectionImg}
              alt="Baby's Collection"
            />
            <span>Baby's Collection</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
