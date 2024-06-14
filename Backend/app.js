// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const z = require('zod');
const jwt = require('jsonwebtoken');
const generateToken = require('./utils/jwt');
const User = require('./models/User');
const {signUpSchema, loginSchema} = require('./Schemas/userSchema');
const productSchema = require('./Schemas/productSchema');
const Product = require('./models/Product');
const app = express();
const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
}

// Route handling
app.get('/', (req, res) => {
    console.log('hello world');
    res.send('hello world');
});

// Signup Route
app.post('/signup', async (req, res) => {
    try {
        // Validate request body using Zod
        const { email, username, password } = signUpSchema.parse(req.body);

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }
       
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            email,
            username,
            password: hashedPassword
        });

        // Save user to database
        await user.save();

        const token = generateToken(user);
        
        res.status(201).send({
            message: `Welcome User ${username}`,
            token
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).send(error.errors);
        }
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = loginSchema.parse(req.body);

        // Find user by email
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // Compare passwords
            const passwordMatch = await bcrypt.compare(password, existingUser.password);
            if (passwordMatch) {
                const token = generateToken(existingUser);
                return res.status(200).send({
                    msg: 'Welcome Back User',
                    token
            });
            } else {
                return res.status(400).send('Invalid password');
            }
        }
        // User not found or password doesn't match
        return res.status(400).send('Invalid email');
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).send(error.errors);
        }
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.post('/addproducts', async (req, res) =>{
    try {
        const { name,price, description, category, imageURL, gender } = productSchema.parse(req.body);
        
        const product = new Product({
            name,
            price,
            description,
            category,
            imageURL,
            gender
        });
        // Save user to database
        await product.save();

        res.status(201).send({
            message: `New Product Added Sucuessfully`
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).send(error.errors);
        }
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.get('/Collections', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
