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
  USER: 'User',
  POINTS: 'point',

  EVENT: 'event',
  SPONSOR: 'sponsor',
  TRANSACTION: 'transaction',

  SPONSORSHIP_AD: 'sponsorship_ad',
  SPONSORSHIP_APPLICATION: 'sponsorship_application',
};

export const MESSAGES = {
  DATABASE: {
    CONNECTED: 'Connection to database has been established successfully',
    ERROR: 'Unable to connect to database.',
  },
  PRODUCT: {
    CREATED: 'Product added successfully.',
    FETCHED: "Product's info fetched successfully.",
    PRODUCT_NOT_FOUND: 'Product not found.',
    NO_QUERY: 'Please provide the needed query.',
  },
  USER: {
    CREATED: 'User waitlisted successfully.',
    UPDATED: 'User profile updated successfully.',
    FETCHED: "User's info fetched successfully.",
    USER_NOT_FOUND: 'User not found.',
    NO_QUERY: 'Please provide the needed query.',
  },
  TRANSACTION: {
    FETCHED: "Transaction's info fetched successfully.",
    TRANSACTION_NOT_FOUND: 'Transaction not found.',
  },
  INVALID_ID: "Id doesn't exists.",
  NOT_ID: 'Not a valid object Id.',
  UNEXPECTED_ERROR: 'An unexpected error occured',
};

export const ACTIONS_CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
  'Access-Control-Allow-Headers':
    'Content-Type, Authorization, Content-Encoding, Accept-Encoding, X-Accept-Action-Version, X-Accept-Blockchain-Ids',
  'Access-Control-Expose-Headers': 'X-Action-Version, X-Blockchain-Ids',
  'Content-Type': 'application/json',
  'X-Action-Version': '2.1.3',
  'X-Blockchain-Ids': 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
};
