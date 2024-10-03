"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sponsor_model_1 = __importDefault(require("../models/sponsor.model"));
const cloudinary_configs_1 = __importDefault(require("../config/cloudinary.configs"));
class SponsorService {
    create(sponsor) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sponsor_model_1.default.create(sponsor);
        });
    }
    getSponsorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sponsor = yield sponsor_model_1.default.findById(id);
            if (!sponsor)
                throw new Error('invalid sponsorID');
            return sponsor;
        });
    }
    getSponsorByQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const sponsor = yield sponsor_model_1.default.findOne(query);
            return sponsor;
        });
    }
    getSponsors(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const sponsor = yield sponsor_model_1.default.find(query).lean().maxTimeMS(5000);
            return sponsor;
        });
    }
    uploadImage(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Upload file to Cloudinary
                const result = yield cloudinary_configs_1.default.uploader.upload(filePath, { folder: 'Eventmint' });
                const imageUrl = result.secure_url;
                if (!imageUrl) {
                    throw new Error('File upload failed');
                }
                return imageUrl;
            }
            catch (error) {
                throw new Error(`Image upload error: ${error.message}`);
            }
        });
    }
}
exports.default = SponsorService;
