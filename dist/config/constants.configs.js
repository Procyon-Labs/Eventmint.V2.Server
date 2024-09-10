"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = exports.DATABASES = exports.basePath = exports.BlinkSights = exports.DEFAULT_SOL_AMOUNT = exports.DEFAULT_SOL_ADDRESS = exports.BASE_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const web3_js_1 = require("@solana/web3.js");
dotenv_1.default.config();
exports.PORT = process.env.PORT || 3000;
exports.BASE_URL = process.env.BASE_URL || `http://localhost:${exports.PORT}`;
exports.DEFAULT_SOL_ADDRESS = new web3_js_1.PublicKey('HgbrurVvvFNjyGZr21b6v7jRD3r1LR8ZTsTB3b5kv7MW');
exports.DEFAULT_SOL_AMOUNT = 0.1; // Replace with the default SOL amount
exports.BlinkSights = '270562cb6807044cf9a21f605a1ddfc5efb265778831aaa390ec55fec09ced4a';
exports.basePath = '/api/v1';
exports.DATABASES = {
    USER: 'User',
    POINTS: 'point',
    EVENT: 'event',
    TRANSACTION: 'transaction',
    SPONSORSHIP_AD: 'sponsorship_ad',
    SPONSORSHIP_APPLICATION: 'sponsorship_application',
};
exports.MESSAGES = {
    DATABASE: {
        CONNECTED: 'Database connection established successfully.',
        ERROR: 'Failed to connect to the database.',
    },
    PROFILE: {
        CREATED: 'Profile created successfully.',
        FETCHED: 'Profile retrieved successfully.',
        INVALID_ID: 'User ID does not exist.',
        DUPLICATE_EMAIL: 'Email already exists.',
        UPDATED: 'Profile updated successfully.',
        NOT_FOUND: 'Profile not found.',
    },
    FETCHED: 'Resource retrieved successfully.',
    COMING_SOON: 'This feature will be available in a future update.',
    UNEXPECTED_ERROR: 'An unexpected error occurred.',
    UPDATED: 'Resource updated successfully.',
    ERROR: 'An error occurred while processing the resource.',
    CREATED: 'Resource created successfully.',
    DELETED: 'Resource deleted successfully.',
    SUCCESSFUL: 'Operation completed successfully.',
    ASSIGNED: 'Resource assigned successfully.',
    NOT_FOUND: 'The requested resource was not found.',
    DEFAULT: 'Request received and acknowledged.',
    ALREADY_EXISTS: 'Resource already exists.',
    USER_ALREADY_EXISTS: 'User already exists.',
    AUTH_DEFAULT: 'Authentication is required for this action.',
    LOGOUT: 'Logged out successfully.',
    LOGIN_FIRST: 'Please log in to continue.',
    LOGGED_IN: 'Login successful.',
    LOGIN_FAILURE: 'Login failed. Check your credentials.',
    USER_UNAUTHORIZED: 'You are not authorized for this action.',
    USER_NOT_FOUND: 'User not found.',
    MAIL_SENT: 'Email sent. Check your inbox.',
    INVALID_UNIQUE_ID: 'Invalid unique ID provided.',
    UNKNOWN_ERROR: 'An unknown error occurred.',
    AUTH_FAILURE: 'Authentication failed. Check your credentials.',
    FORBIDDEN: 'Access denied.',
    AUTHENTICATION_FAILURE: 'Authentication failed. Please log in again.',
    NOT_AUTHENTICATED: 'Authentication is required for this action.',
    BAD_PARAMETERS: 'Invalid parameters provided.',
    INTERNAL_ERROR: 'An internal error occurred.',
    SUCCESS_MSG_RESPONSE: 'Operation completed successfully.',
    FAILURE_MSG_RESPONSE: 'Operation failed.',
    ACCESS_TOKEN_ERROR_RESPONSE: 'Invalid access token. Please log in again.',
    TOKEN_REFRESH_RESPONSE: 'Access token refreshed successfully.',
    ROUTE_NOT_FOUND: 'The requested page does not exist.',
    WELCOME_V1: 'Welcome to Version 1.',
};
