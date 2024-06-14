const express = require('express');
const bcrypt = require('bcryptjs');
const z = require('zod');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/jwt');
const User = require('../models/User');
const { signUpSchema, loginSchema } = require('../Schemas/userSchema');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        const { email, username, password } = signUpSchema.parse(req.body);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            username,
            password: hashedPassword
        });

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

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = loginSchema.parse(req.body);

        const existingUser = await User.findOne({ email });

        if (existingUser) {
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
        return res.status(400).send('Invalid email');
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).send(error.errors);
        }
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
