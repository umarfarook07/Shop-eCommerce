import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Collections from "./Collections";
import "./styles.css";
import "./InfoPage.css"
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
      <div className="product-info">
        <div className="product-preview">
          <div className="image-preview">
            <img src={product.image} alt="image Loading..." />
          </div>
          <div className="more-images"></div>
        </div>
        <div className="product-details">
          <h1 className="p-title">{product.name}</h1>
          <p className="p-category">{product.category}</p>
          <label htmlFor="p-colors" className="p-colors-label">Colors</label>
          <div id="p-colors" className="p-colors">

          </div>
          <div className="size-options"></div>
          <h2 className="p-price">$ {product.price}</h2>
          <button className="add-to-cart-btn">Add To cart</button>
          <p className="p-description">{product.description}</p>
        </div>
      </div>
      <div className="more-products">
        <Collections />
      </div>
    </div>
    
  );
};

export default ProductInfo;
