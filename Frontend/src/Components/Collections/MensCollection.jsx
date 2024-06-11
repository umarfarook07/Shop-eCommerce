import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

const MensCollections = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/mensCollections');
        setData(response.data);
      } catch (error) {
        console.error('Error Fetching Data', error);
      }
    };
    fetchProducts();
  }, []);

  const mensCollection = data.filter(
    collectionItem => collectionItem.gender === 'Male' || collectionItem.gender === 'Unisex'
  );

  return (
    <div className='collection-page'>
      <div className='products-grid'>
        <ul>
          {mensCollection.map(collectionItem => (
            <li key={collectionItem.name}>
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

export default MensCollections;
