import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
const Collections = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://shop-ecommerce-3ryq.onrender.com/product/Collections`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchProducts();
  }, [props.gender]);

  const filteredCollection = data.filter(
    (collectionItem) =>
      (collectionItem.gender === "Unisex" ||
      collectionItem.gender === props.gender) && collectionItem.category === "Clothing"
  );

  return (
    <div className="collection-page">
      <h1 className="product-category-heading">Clothing</h1>
      <div className="products-grid">
        <ul>
          {filteredCollection.map((collectionItem) => (
            <li key={collectionItem._id}>
              <Item product={collectionItem} />
            </li>
          ))}
        </ul>
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
        <h2 className="product-title">{product.name}
        </h2>
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
