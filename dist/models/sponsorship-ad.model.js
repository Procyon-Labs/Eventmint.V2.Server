"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsorshipAdModel = void 0;
const mongoose_autopopulate_1 = __importDefault(require("mongoose-autopopulate"));
const config_1 = require("../config");
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
const sponsorshipAdSchema = new mongoose_1.Schema({
    user: {
        // type: Schema.Types.ObjectId,
        type: String,
        required: true,
        ref: config_1.DATABASES.USER,
        autopopulate: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    quantity: { type: Number, required: false },
    image: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.__v;
            return ret;
        },
    },
});
sponsorshipAdSchema.plugin(mongoose_autopopulate_1.default);
sponsorshipAdSchema.plugin(utils_1.paginatePlugin);
exports.SponsorshipAdModel = (0, mongoose_1.model)(config_1.DATABASES.SPONSORSHIP_AD, sponsorshipAdSchema);
