import React, { useState, useEffect } from 'react';

export const Item = ({ category, SrcImg }) => {
  return (
    <div>
      <div className='category-item'>Category: {category}</div>
      <img src={SrcImg} alt={category} />
    </div>
  );
};

function MensCollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) throw new Error('Data could not be fetched!');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Shop By Category</h2>
      <ul className='category-list'>
        {products.map(product => (
          <li key={product.id}>
            <Item category={product.category} SrcImg={product.img} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MensCollection;
