import React, { useState } from 'react';
import './styles.css';

import axios from 'axios';
function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [gender, setGender] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://shop-ecommerce-3ryq.onrender.com/addproduct');
      console.log(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form className='add-product-form' id='add-product-form' onSubmit={handleSubmit}>
      <div className='input-div'>
      <label htmlFor="">Product Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product name"
      />
      </div>
      <div className='input-div'>
      <label htmlFor="">Image URL: </label>
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        placeholder="image URL"
      />
      </div>
      <div className='input-div'>
      <label htmlFor="">Price: </label>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      </div>
      <div className='input-div'>
      <label htmlFor="">Description: </label>
      <input
       value={description} 
       type="text"
       onChange={(e) => setDescription(e.target.value)}
       placeholder='description'
       />
      </div>
      <div className='input-div'>
      <label htmlFor="">Category: </label>
      <input 
      value={category} 
      type="text"
      onChange={ (e) => setCategory(e.target.value) }
      placeholder='Category'
      />
      </div>
      <div className='input-div'>
      <label htmlFor="gender">Gender: </label>
      <div className='radio-input'>
        <label>
          Male:
          <input 
            value="mens" 
            type="radio" 
            name="gender" 
            onChange={(e) => setGender(e.target.value)} 
          />
        </label>
        <label>
          Female:
          <input 
            value="womens" 
            type="radio" 
            name="gender" 
            onChange={(e) => setGender(e.target.value)} 
          />
        </label>
        <label>
          Unisex:
          <input 
            value="unisex" 
            type="radio" 
            name="gender" 
            onChange={(e) => setGender(e.target.value)} 
          />
        </label>
      </div>
    </div>
      <div className='input-div'>
      <button type="submit">Add Product</button>
      </div>
    </form>
  );
}

export default AddProductForm;
