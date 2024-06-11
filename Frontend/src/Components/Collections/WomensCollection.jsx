import React from 'react';
import DataCollection from './data/data';
import './styles.css';
const Item = ({product}) => {
  return (
    <div className='product-container'>
      <div>
      <img className='product-image' src = {product.image} alt="image loading" />
      </div>
      <div className="product-details">
        <h2 className='product-title'>{product.name}</h2> 
        <spam className= 'product-price'>${product.price}</spam>
        <p className='product-description'>{product.description}</p>
        <p className='product-category'> {product.category}</p>
      </div>
    </div>
  );
}

const WomensCollection = () => {

  const WomenCollection = DataCollection.filter(collectionItem => collectionItem.gender === 'Female' || collectionItem.gender === 'Unisex');
  return (
    <div className='collection-page'>
      <h1>Shop By Category</h1>
      <div className='products-grid'>
      <ul>
        {WomenCollection.map(collectionItem => (
          <li key={collectionItem.name}><Item product = {collectionItem}/></li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default WomensCollection;
