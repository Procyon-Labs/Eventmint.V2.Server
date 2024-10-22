"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sponsor_controller_1 = __importDefault(require("../controllers/sponsor.controller"));
const multer_config_1 = __importDefault(require("../config/multer.config"));
const router = (0, express_1.Router)();
const sponsorController = new sponsor_controller_1.default();
router.get('/getsponsors', sponsorController.getAllSponsors);
router.post('/:userId', sponsorController.createSponsor);
router.get('/user/:userId/sponsors', sponsorController.getSponsorByUserId);
router.get('/user/:userId/sponsors', sponsorController.getSponsorEvents);
//upload profile image
router.post('/upload', multer_config_1.default.single('image'), sponsorController.uploadImage);
exports.default = router;
