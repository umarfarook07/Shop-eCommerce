import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/products', { name, price });
      console.log(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form id='add-product-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product name"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
