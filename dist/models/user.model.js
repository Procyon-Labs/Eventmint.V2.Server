"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
        default: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1719802304/event-logo_iyl1ec.png",
    },
    bio: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
    strict: false,
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
