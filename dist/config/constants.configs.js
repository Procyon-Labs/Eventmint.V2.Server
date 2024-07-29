"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASES = exports.MESSAGES = void 0;
const basePath = "/api/v1";
const DATABASES = {
    PRODUCT: "Product",
    EVENT: "Event",
    TRANSACTION: "transaction",
};
exports.DATABASES = DATABASES;
const MESSAGES = {
    DATABASE: {
        CONNECTED: "Connection to database has been established successfully",
        ERROR: "Unable to connect to database:",
    },
    UNEXPECTED_ERROR: "An unexpected error occured.",
};
exports.MESSAGES = MESSAGES;
