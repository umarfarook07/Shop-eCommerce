
// SearchBox.jsx
import React from 'react';

function SearchBox({ show, onClose }) {
  if (!show) {
    return null;
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Execute search using the input's value
  }
  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." autoFocus />
      <div className="close-btn" onClick={onClose}>X</div>
    </div>
  );
}

export default SearchBox;