// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    gender: String
  });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
