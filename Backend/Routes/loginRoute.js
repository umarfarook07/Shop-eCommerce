const express = require('express');
const bcrypt = require('bcrypt');
const z = require('zod');
const generateToken = require('./utils/jwt');
const User = require('./models/User');
const {loginSchema} = require('./schemas/userSchema');
const app = express();

const loginRoute = app.post('/login', async (req, res) => {
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

module.exports = loginRoute;