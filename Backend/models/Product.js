const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewerName: { type: String, required: true },
    reviewText: { type: String, required: true },
    reviewRating: { type: Number, required: true, min: 1, max: 5 } 
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    gender: { type: String, required: true },
    colors: [{ type: String, required: true }],
    sizes: [{ type: String, required: true }], 
    reviews: [reviewSchema],
    dateAdded: { type: Date, default: Date.now }, 
    brand: { type: String, required: true }, 
    stock: { type: Number, required: true, min: 0 },
    isFeatured: { type: Boolean, default: false }, 
    discount: { type: Number, min: 0, max: 100 }, 
    ratingsAverage: { type: Number, min: 0, max: 5, default: 0 }, 
    tags: [{ type: String }] 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
