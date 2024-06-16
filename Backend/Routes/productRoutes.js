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
router.get('/productinfo/:id', async (req, res) => {
    const pId = req.params.id;
    try {
      const product = await Product.findById(pId);
      if (!product) {
        return res.status(404).json({ msg: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  });

router.post('/products', async(req,res) => {
    const products = req.body;
    try {
        
        await Product.insertMany(products);

    res.status(201).json({
        msg: "products added sucuessfully"
    })
    } catch (error) {
        res.status(400).json({
            msg: "error",
            error
        })
    }
    
})
module.exports = router;
