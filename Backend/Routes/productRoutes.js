const express = require('express');
const z = require('zod');
const Product = require('../models/Product');
const productSchema = require('../Schemas/productSchema');

const router = express.Router();

router.post('/addproduct', async (req, res) => {
    try {
        const { name, price, description, category, imageURL, gender } = req.body;

        const product = new Product({
            name,
            price,
            description,
            category,
            imageURL,
            gender
        });

        await product.save();

        res.status(201).send({
            message: `New Product Added Successfully`
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).send(error.errors);
        }
        console.error(error);
        res.status(500).send('Server error');
    }
});

router.get('/collections', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
