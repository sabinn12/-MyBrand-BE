import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  console.error('Please define the MONGODB_URL environment variable');
  process.exit(1);
}

mongoose.set("strictQuery", false)
mongoose.connect(MONGODB_URL)
.then(() => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error)
});

export const db = mongoose.connection;

