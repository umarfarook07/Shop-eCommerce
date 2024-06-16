const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
}

app.get('/', (req, res) => {
    res.send('hello world');
});

// Use routes
app.use('/user', userRoutes);
app.use('/product', productRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
