// import { Request, Response } from 'express';
import { ISponsorshipApplication } from '../interfaces';
import { SponsorshipApplicationModel } from '../models';
import { GeneralController } from '../helpers';
// import { InternalErrorResponse, SuccessResponse } from '../utils';

class SponsorshipApplicationController extends GeneralController<ISponsorshipApplication> {
  constructor() {
    super(SponsorshipApplicationModel);
  }
}

export const sponsorshipApplicationController = new SponsorshipApplicationController();
