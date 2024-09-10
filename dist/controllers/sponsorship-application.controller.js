"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorshipApplicationController = void 0;
const models_1 = require("../models");
const helpers_1 = require("../helpers");
// import { InternalErrorResponse, SuccessResponse } from '../utils';
class SponsorshipApplicationController extends helpers_1.GeneralController {
    constructor() {
        super(models_1.SponsorshipApplicationModel);
    }
}
exports.sponsorshipApplicationController = new SponsorshipApplicationController();
