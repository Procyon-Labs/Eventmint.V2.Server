// import { Request, Response } from 'express';
import { ISponsorshipAd } from '../interfaces';
import { SponsorshipAdModel } from '../models';
import { GeneralController } from '../helpers';
// import { InternalErrorResponse, SuccessResponse } from '../utils';

class SponsorshipAdController extends GeneralController<ISponsorshipAd> {
  constructor() {
    super(SponsorshipAdModel);
  }

  // async create(req: Request, res: Response) {
  //   // const loggedInUser = req.params.userId;
  //   // req.body.user = loggedInUser;

  //   const data = await this.generalService.create(req.body);
  //   if (!data) return InternalErrorResponse(res);

  //   return SuccessResponse(res, data);
  // }
}

export const sponsorshipAdController = new SponsorshipAdController();
