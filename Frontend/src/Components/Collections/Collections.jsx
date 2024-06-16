import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

const Collections = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://shop-ecommerce-3ryq.onrender.com/product/Collections`);
        setData(response.data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchProducts();
  }, [props.gender]);

  const categories = [
    { name: "Clothing", filter: "Clothing" },
    { name: "Accessories", filter: "Accessories" },
    { name: "Electronics", filter: "Electronics" },
    { name: "Sports", filter: "Sports" },
    { name: "Footwear", filter: "Footwear" },
    { name: "Furniture", filter: "Furniture" },
  ];

  const filteredCollections = categories.map(category => ({
    name: category.name,
    items: data.filter(collectionItem =>
      (collectionItem.gender === "Unisex" || collectionItem.gender === props.gender) &&
      collectionItem.category === category.filter
    )
  }));

  return (
    <div id="collection-page" className="collection-page">
      <div className="products-grid">
        {filteredCollections.map(category => (
          <div key={category.name}>
            <h1 className="product-category-heading">{category.name} - Section</h1>
            <ul>
              {category.items.map(collectionItem => (
                <li key={collectionItem._id}>
                  <Item product={collectionItem} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const Item = ({ product }) => {
  return (
    <div className="product-container">
      <div>
        <img
          className="product-image"
          src={product.image}
          alt="image loading"
        />
      </div>
      <div className="product-details">
        <Link to={`/ProductInfo/${product._id}`}>
          <h2 className="product-title">{product.name}</h2>
        </Link>
        <span className="product-price">${product.price}</span>
      </div>
      <div className="btn-div">
        <button className="buy-btn">Buy Now</button>
        <button className="cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Collections;
