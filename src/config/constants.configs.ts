import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

export const basePath = '/api/v1';
export const DATABASES = {
  USER: 'user',
  POINTS: 'point',

  EVENT: 'event',
  TRANSACTION: 'transaction',
};

export const MESSAGES = {
  DATABASE: {
    CONNECTED: 'Connection to database has been established successfully',
    ERROR: 'Unable to connect to database:',
  },
  PROFILE: {
    CREATED: 'Profile created successfully.',
    FETCHED: 'Profile fetched successfully.',
    INVALID_ID: "UserId doesn't exist.",
    DUPLICATE_EMAIL: 'Email already exist.',
    UPDATED: 'Profile details updated successfully.',
    NOT_FOUND: 'Profile not found.',
  },
  UNEXPECTED_ERROR: 'An unexpected error occured.',
  UPDATED: 'Resource updated successfully',
  ERROR: 'Oops! An error occurred while processing the resource',
  CREATED: 'Resource created successfully',
  DELETED: 'Resource deleted successfully',
};

