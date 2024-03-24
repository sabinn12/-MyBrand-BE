const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err: Error) => console.error('Error connecting to MongoDB:', err));
