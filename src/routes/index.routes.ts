import actionRouter from './action.routes';
import eventRouter from './event.routes';
import sponsorRouter from './sponsor.action.routes';
import mainSponsor from './sponsor.routes';
import submissionRouter from './submission.routes';

import userRouter from './user.routes';
import { basePath } from '../config/constants.configs';
import { Express, Request, Response } from 'express';

export default (app: Express) => {
  app.get('/', (req: Request, res: Response) => {
    return res.send({
      success: true,
      message:
        'Welcome to Eventmint API. Ensure to go through the API docs before using this service: https://documenter.getpostman.com/view/24549149/2sA3kbgdzd',
    });
  });
  app.use(`${basePath}/sponsoraction`, sponsorRouter);
  app.use(`${basePath}/sponsor/details`, submissionRouter);
  app.use(`${basePath}/sponsor`, mainSponsor);
  app.use(`${basePath}/user`, userRouter);
  app.use(`${basePath}/event`, eventRouter);
  app.use(`${basePath}/action`, actionRouter);
  app.get("/actions.json", (_req: Request, res: Response) => {
    const payload = {
      rules: [
        { pathPattern: '/api/v1/actions/**', apiPath: '/api/v1/actions/**' },
        { pathPattern: '/api/v1/sponsoraction/**', apiPath: '/api/v1/sponsoraction/**' },
      ],
    };
    res.json(payload);
  });
  /**
   * @swagger
   * /:
   *   get:
   *     summary: API Health check
   *     description: Returns an object containing demo content
   *     tags: [Default]
   *     responses:
   *       '200':
   *         description: Successful.
   *       '400':
   *         description: Bad request.
   */
  app.use(`${basePath}/`, (_req: Request, res: Response) => {
    res.send('Welcome to Eventmint API');
  });
};
