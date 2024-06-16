import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Collections from "./Collections";
import { Link } from "react-router-dom";
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
      <Link className="return-link" to={`/${product.gender}sCollection`}> Back To {product.gender}s Collections</Link>
      <div className="product-info">
        <div className="product-preview">
          <div className="image-preview">
            <img src={product.image} alt="image Loading..." />
          </div>
          <div className="more-images"></div>
        </div>
        <div className="product-details">
          <h1 className="p-title">{product.name}</h1>
          <h3 className="p-rating">Ratings: {product.ratingsAverage} / 5</h3>
          <p className="p-category">{product.brand}</p> 
          {/* <p className="p-gender">{product.gender}</p> */}
          <label htmlFor="p-color" className="p-colors-label">Colors</label>
          <div id="p-color" className="p-color">
          {product.colors.map((color, index) => (
          <div
            key={index}
            className="p-colors"
            style={{ backgroundColor: color.toLowerCase() }}
            title={color}
          />
        ))}
          </div>
          <div className="size-options">
            { product.sizes.map((size,index) => (
              <div 
              key={index}
              className="size-option"
              title={size}
              >{size}</div >
            ))}
          </div>
          <h2 className="p-price">$ {product.price} (  {product.discount}% Discount )</h2>
          <p className="p-stock">{product.stock} - Left</p>
          <button className="add-to-cart-btn">Add To cart</button>
          
        </div>
      </div>
      <div className="more-products">
      <p className="p-description">{product.description}</p>
          <div className="reviews">
            <h1>Customer - Reviews  </h1>
            <ul className="reviews-list">
            {product.reviews.map((review,index) => (
              <li 
              key={index}
              className="review"
              >
                <h2 className="reviewer-name">{review.reviewerName}</h2>
                <span className="review-text">{review.reviewText}</span>
                <br />
                <h3 className="review-rating">Rating: {review.reviewRating} </h3>
              </li>
            )
              
            )}
            </ul>
          </div>
          {/* <Collections gender = {product.gender} /> */}
      </div>
    </div>
    
  );
};

export default ProductInfo;
