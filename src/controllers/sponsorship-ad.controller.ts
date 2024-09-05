// import { Request, Response } from 'express';
import { ISponsorshipAd } from '../interfaces';
import { SponsorshipAdModel } from '../models';
import { GeneralController } from '../helpers';
// import { InternalErrorResponse, SuccessResponse } from '../utils';

class SponsorshipAdController extends GeneralController<ISponsorshipAd> {
  constructor() {
    super(SponsorshipAdModel);
  }
}

export const sponsorshipAdController = new SponsorshipAdController();
