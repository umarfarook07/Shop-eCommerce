import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

const Collections = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://shop-ecommerce-3ryq.onrender.com/Collections`);
        setData(response.data);
      } catch (error) {
        console.error('Error Fetching Data', error);
      }
    };
    fetchProducts();
  }, [props.gender]); 


  const filteredCollection = data.filter( collectionItem => collectionItem.gender === 'Unisex' || collectionItem.gender === props.gender)

  return (
    <div className='collection-page'>
      <div className='products-grid'>
        <ul>
          {filteredCollection.map(collectionItem => (
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
    <div className='product-container'>
      <div>
        <img className='product-image' src={product.image} alt='image loading' />
      </div>
      <div className='product-details'>
        <h2 className='product-title'>{product.name}</h2>
        <span className='product-price'>${product.price}</span>
        <p className='product-description'>{product.description}</p>
        <p className='product-category'> {product.category}</p>
      </div>
    </div>
  );
};

export default Collections;
