"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTIONS_CORS_HEADERS = exports.MESSAGES = exports.DATABASES = exports.basePath = exports.BlinkSights = exports.DEFAULT_SOL_AMOUNT = exports.DEFAULT_SOL_ADDRESS = exports.BASE_URL = exports.PORT = void 0;
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
    SPONSOR: 'sponsor',
    TRANSACTION: 'transaction',
    SPONSORSHIP_AD: 'sponsorship_ad',
    SPONSORSHIP_APPLICATION: 'sponsorship_application',
};
exports.MESSAGES = {
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
exports.ACTIONS_CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Encoding, Accept-Encoding, X-Accept-Action-Version, X-Accept-Blockchain-Ids',
    'Access-Control-Expose-Headers': 'X-Action-Version, X-Blockchain-Ids',
    'Content-Type': 'application/json',
    'X-Action-Version': '2.1.3',
    'X-Blockchain-Ids': 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
};
