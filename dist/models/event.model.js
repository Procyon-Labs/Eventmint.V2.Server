"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_configs_1 = require("../config/constants.configs");
const eventSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
        ref: 'profile',
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    payAnyPrice: {
        type: Boolean,
        required: false,
        default: false,
    },
    unlimited: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: false,
        min: 0,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    productFile: {
        type: String,
        required: true,
        trim: true,
    },
    sales: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
    },
    revenue: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
    },
}, {
    strict: true,
    timestamps: true,
    versionKey: false,
});
eventSchema.index({ date: 1 });
const Event = (0, mongoose_1.model)(constants_configs_1.DATABASES.EVENT, eventSchema);
exports.default = Event;
