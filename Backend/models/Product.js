// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    gender: String
  });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
