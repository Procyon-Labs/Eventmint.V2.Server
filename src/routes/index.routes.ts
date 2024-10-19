import actionRouter from './action.routes';
import eventRouter from './event.routes';
import sponsorRouter from './sponsor.routes';
import userRouter from './user.routes';
import sponsorshipAdRouter from './sponsorship-ad.route';
import sponsorshipApplicationRouter from './sponsorship-application.route';
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
  app.use(`${basePath}/user`, userRouter);
  app.use(`${basePath}/event`, eventRouter);
  app.use(`${basePath}/sponsor`, sponsorRouter);
  app.use(`${basePath}/action`, actionRouter);
  app.use(`${basePath}/sponsor`, actionRouter);
  app.use(`${basePath}/sponsorship-ad`, sponsorshipAdRouter);
  app.use(`${basePath}/sponsorship-application`, sponsorshipApplicationRouter);

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
