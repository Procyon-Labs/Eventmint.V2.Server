"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_configs_1 = require("../config/constants.configs");
const sponsorSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
        ref: 'profile',
    },
    keymessage: {
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
    industry: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    campaign: {
        type: String,
        required: true,
        trim: true,
    },
    budget: {
        type: Number,
        required: false,
        min: 0,
    },
}, {
    strict: true,
    timestamps: true,
    versionKey: false,
});
sponsorSchema.index({ date: 1 });
const SPONSOR = (0, mongoose_1.model)(constants_configs_1.DATABASES.SPONSOR, sponsorSchema);
exports.default = SPONSOR;
