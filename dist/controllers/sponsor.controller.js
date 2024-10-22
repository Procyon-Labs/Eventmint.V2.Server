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
const sponsor_service_1 = __importDefault(require("../services/sponsor.service"));
const { create, uploadImage, getSponsorByUserId, getSponsorByQuery, getSponsors } = new sponsor_service_1.default();
const deployedLink = 'https://eventmint.fun';
// const deployedLink = "http://localhost:5500.com";
class SponsorController {
    createSponsor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundSponsor = yield getSponsorByQuery({ keymessage: req.body.keymessage });
                if (foundSponsor) {
                    return res.status(409).json({
                        success: false,
                        message: 'Sponsor name already exists',
                    });
                }
                const sponsor = yield create(Object.assign(Object.assign({}, req.body), { userId: req.params.userId }));
                return res.status(201).json({
                    success: true,
                    message: 'Sponsor created successfully',
                    sponsor,
                    blink: `${deployedLink}/api/v1/sponsoraction/${encodeURIComponent(sponsor.keymessage)}`,
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error instanceof Error ? error.message : 'Error occurred while creating sponsor',
                });
            }
        });
    }
    getSponsorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sponsor = yield getSponsorByUserId(req.params.id);
                if (!sponsor) {
                    return res.status(404).send({
                        success: false,
                        message: 'Sponsor with the given ID not found',
                    });
                }
                return res.status(200).send({
                    success: true,
                    message: 'Sponsor fetched successfully',
                    sponsor,
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error instanceof Error ? error.message : 'Error occurred while fetching sponsor',
                });
            }
        });
    }
    getSponsorEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sponsor = yield getSponsors({ userId: req.params.userId });
                if (sponsor.length === 0) {
                    return res.status(404).send({
                        success: false,
                        message: 'Sponsor with the given userId not found',
                    });
                }
                return res.status(200).send({
                    success: true,
                    message: 'Sponsor fetched successfully',
                    sponsor,
                });
            }
            catch (error) {
                return res.status(500).send({
                    success: false,
                    message: error instanceof Error ? error.message : 'Error occurred while fetching sponsors',
                });
            }
        });
    }
    getAllSponsors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sponsor = yield getSponsors({}); // Fetch all events without filtering
                if (sponsor.length === 0) {
                    return res.status(404).send({
                        success: false,
                        message: 'No sponsors found',
                    });
                }
                return res.status(200).send({
                    success: true,
                    message: 'All sponsors fetched successfully',
                    sponsor,
                });
            }
            catch (error) {
                return res.status(500).send({
                    success: false,
                    message: error instanceof Error ? error.message : `Error occurred while fetching sponsors`,
                });
            }
        });
    }
    getSponsorByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            try {
                const sponsor = yield getSponsorByUserId(userId);
                if (!sponsor) {
                    return res.status(404).json({ error: 'Sponsor not found' });
                }
                return res.status(200).json(sponsor);
            }
            catch (error) {
                return res.status(400).json({ error: 'Bad Request', message: error.message });
            }
        });
    }
    uploadImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.file) {
                    const imageUrl = yield uploadImage(req.file.path); // Call the uploadImage method in the service
                    return res.status(201).send({
                        success: true,
                        message: 'Image uploaded successfully',
                        imageUrl,
                    });
                }
                return res.status(409).send({
                    success: false,
                    message: 'Include an Image file',
                });
            }
            catch (error) {
                return res.status(500).send({
                    success: false,
                    message: error instanceof Error ? error.message : `Error occurred while uploading images`,
                });
            }
        });
    }
}
exports.default = SponsorController;
