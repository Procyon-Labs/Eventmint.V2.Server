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
  FETCHED: 'Resource retrieved successfully',
  COMING_SOON: 'This feature will be available in a future update',
  UNEXPECTED_ERROR: 'An unexpected error occured.',
  UPDATED: 'Resource updated successfully',
  ERROR: 'Oops! An error occurred while processing the resource',
  CREATED: 'Resource created successfully',
  DELETED: 'Resource deleted successfully',
  SUCCESSFUL: 'Successful',
  ASSIGNED: 'Resource assignment completed successfully',
  NOT_FOUND: 'Sorry, the requested resource was not found',
  DEFAULT: "We've received your request and you've received ours",
  ALREADY_EXISTS: 'This resource already exists',
  USER_ALREADY_EXISTS: 'The user already exists',
  AUTH_DEFAULT: 'Authentication is required for this action',
  LOGOUT: "You've been successfully logged out. Have a wonderful day!",
  LOGIN_FIRST: 'Oops! Please log in first to proceed',
  LOGGED_IN: "You've been successfully logged in",
  LOGIN_FAILURE: 'Login failed. Please check your email and password',
  USER_UNAUTHORIZED: 'Sorry, you are not authorized to perform this operation',
  USER_NOT_FOUND: 'User not found',
  MAIL_SENT: 'Email sent successfully. Please check your inbox!',
  INVALID_UNIQUE_ID: 'Invalid unique identifier provided',
  UNKNOWN_ERROR: 'Oops! An unknown error occurred',
  AUTH_FAILURE: 'Authentication failed. Please check your credentials',
  FORBIDDEN: "Sorry, you don't have permission to access this resource",
  AUTHENTICATION_FAILURE: 'Authentication failed. Please log in again',
  NOT_AUTHENTICATED: 'Oops! You need to be authenticated for this action',
  BAD_PARAMETERS: 'Oops! Invalid parameters were provided',
  INTERNAL_ERROR: 'An internal error occurred. Our team is addressing it!',
  SUCCESS_MSG_RESPONSE: 'Success! The operation was completed successfully',
  FAILURE_MSG_RESPONSE: 'Oops! The operation failed to complete',
  ACCESS_TOKEN_ERROR_RESPONSE: 'Access token is invalid. Please log in again',
  TOKEN_REFRESH_RESPONSE: 'Success! The access token was refreshed successfully',
  ROUTE_NOT_FOUND: "Sorry, the page you're looking for doesn't exist.",
  WELCOME_V1: 'Welcome to Version 1',
};
