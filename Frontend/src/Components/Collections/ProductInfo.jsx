import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./styles.css";
const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://shop-ecommerce-3ryq.onrender.com/product/productinfo/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error Fetching Product Data", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-info-page">
      <img
        className="product-image"
        src={product.image}
        alt="Product Image"
      />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span className="product-price">${product.price}</span>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductInfo;
