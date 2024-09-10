"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    buyerId: {
        type: String,
        required: true,
        ref: 'user',
    },
    eventId: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: false,
    },
}, {
    strict: true,
    timestamps: false,
    versionKey: false,
});
const Transaction = (0, mongoose_1.model)('transaction', transactionSchema);
exports.default = Transaction;
