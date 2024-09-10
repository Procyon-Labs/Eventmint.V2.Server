"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const interfaces_1 = require("../interfaces");
const config_1 = require("../config");
const userSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        trim: true,
    },
    bio: {
        type: String,
        trim: true,
    },
    userType: {
        type: String,
        default: interfaces_1.UserType.USER,
    },
    role: {
        type: String,
        default: interfaces_1.Roles.CUSTOMER,
    },
}, {
    timestamps: true,
    strict: false,
});
exports.UserModel = (0, mongoose_1.model)(config_1.DATABASES.USER, userSchema);
