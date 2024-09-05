import dotenv from 'dotenv';
import { PublicKey } from '@solana/web3.js';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

export const DEFAULT_SOL_ADDRESS = new PublicKey('HgbrurVvvFNjyGZr21b6v7jRD3r1LR8ZTsTB3b5kv7MW');
export const DEFAULT_SOL_AMOUNT = 0.1; // Replace with the default SOL amount
export const BlinkSights = '270562cb6807044cf9a21f605a1ddfc5efb265778831aaa390ec55fec09ced4a';

export const basePath = '/api/v1';
export const DATABASES = {
  USER: 'user',
  POINTS: 'point',

  EVENT: 'event',
  TRANSACTION: 'transaction',

  SPONSORSHIP_AD: 'sponsorship_ad',
  SPONSORSHIP_APPLICATION: 'sponsorship_application',
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
