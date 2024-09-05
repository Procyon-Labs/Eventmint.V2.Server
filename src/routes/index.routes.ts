import actionRouter from './action.routes';
import eventRouter from './event.routes';
import usereRouter from './user.routes';
import { basePath } from '../config/constants.configs';
import { Request, Response } from 'express';

export default (app: any) => {
  app.get('/', (req: Request, res: Response) => {
    return res.send({ success: true, message: 'API is Live!!!' });
  });
  app.use(`${basePath}/user`, usereRouter);
  app.use(`${basePath}/event`, eventRouter);
  app.use(`${basePath}/action`, actionRouter);

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
