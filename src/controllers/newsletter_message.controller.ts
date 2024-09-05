// import { Request, Response } from 'express';
// import { INewsLetterMessage } from '../interfaces';
// import { NewsLetterMessageModel } from '../models';
// import { GeneralController } from './general.controller';
// import { InternalErrorResponse, SuccessResponse } from '../utilsf';
// import { mailController } from './mail.controller';

// class NewsletterMessageController extends GeneralController<INewsLetterMessage> {
//   constructor() {
//     super(NewsLetterMessageModel);
//   }

//   async create(req: Request, res: Response) {
//     const loggedInUser = res.locals.user._id;
//     req.body.author = loggedInUser;

//     const data = await this.generalService.create(req.body);
//     if (!data) return InternalErrorResponse(res);

//     await mailController.sendNewsletterToAllSubscribers(data.title, data.body);

//     return SuccessResponse(res, data);
//   }
// }

// export const newsletterMessageController = new NewsletterMessageController();
