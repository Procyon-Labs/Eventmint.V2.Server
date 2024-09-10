"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsorshipApplicationModel = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
const mongoose_autopopulate_1 = __importDefault(require("mongoose-autopopulate"));
const utils_1 = require("../utils");
const sponsorshipApplicationSchema = new mongoose_1.Schema({
    sponsorshipAd: {
        type: String,
        required: true,
        ref: config_1.DATABASES.SPONSORSHIP_AD,
        autopopulate: true,
    },
    email: { type: String, required: true },
    pitchDeck: { type: String, required: true },
    verified: { type: Boolean, default: false },
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
sponsorshipApplicationSchema.plugin(mongoose_autopopulate_1.default);
sponsorshipApplicationSchema.plugin(utils_1.paginatePlugin);
exports.SponsorshipApplicationModel = (0, mongoose_1.model)(config_1.DATABASES.SPONSORSHIP_APPLICATION, sponsorshipApplicationSchema);
