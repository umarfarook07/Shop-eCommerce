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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const product = {
      name,
      price,
      description,
      category,
      imageURL,
      gender,
    };

    try {
      const response = await axios.post('https://shop-ecommerce-3ryq.onrender.com/addproduct', product);
      console.log(response.data);
      setSuccess('Product added successfully!');
      setName('');
      setPrice('');
      setDescription('');
      setCategory('');
      setImageURL('');
      setGender('');
    } catch (error) {
      console.error("Error adding product:", error);
      setError('Failed to add product. Please try again.');
    } finally {
      setLoading(false);
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
          placeholder="Image URL"
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
          placeholder='Description'
        />
      </div>
      <div className='input-div'>
        <label htmlFor="">Category: </label>
        <input 
          value={category}
          type="text"
          onChange={(e) => setCategory(e.target.value)}
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
              checked={gender === 'mens'}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label>
            Female:
            <input 
              value="womens"
              type="radio"
              name="gender"
              checked={gender === 'womens'}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label>
            Unisex:
            <input 
              value="unisex"
              type="radio"
              name="gender"
              checked={gender === 'unisex'}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className='input-div'>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </div>
      {success && <div className='success-message'>{success}</div>}
      {error && <div className='error-message'>{error}</div>}
    </form>
  );
}

export default AddProductForm;
