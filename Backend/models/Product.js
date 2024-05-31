// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: { 
        type: String, 
        required: true, 
        unique: true, 
        validate: {
            validator: function(v) {
                return /\.(jpeg|jpg|gif|png)$/.test(v);
            },
            message: props => `${props.value} is not a valid image URL!`
        }
    },
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true, min: [0, 'Price must be positive'] }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
