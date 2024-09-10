"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorshipAdController = void 0;
const models_1 = require("../models");
const helpers_1 = require("../helpers");
// import { InternalErrorResponse, SuccessResponse } from '../utils';
class SponsorshipAdController extends helpers_1.GeneralController {
    constructor() {
        super(models_1.SponsorshipAdModel);
    }
}
exports.sponsorshipAdController = new SponsorshipAdController();
