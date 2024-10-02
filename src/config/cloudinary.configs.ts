import { v2 as cloudinary } from 'cloudinary';
import { configDotenv } from 'dotenv';

configDotenv();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUD,
  api_secret: process.env.API_KEY_SECRET,
  secure: true,
});

export default cloudinary;
