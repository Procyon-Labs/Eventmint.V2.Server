import usereRouter from './user.routes';
import eventRouter from './event.routes';
import actionRouter from './action.routes';

import { basePath } from '../config/constants.configs';
import { Request, Response } from 'express';

export default (app: { use: (arg0: string, arg1: any) => void }) => {
  app.use('/', (req: Request, res: Response) => {
    return res.send({ success: true, message: 'API is Live!!!' });
  });
  app.use(`${basePath}/user`, usereRouter);
  app.use(`${basePath}/event`, eventRouter);
  app.use(`${basePath}/action`, actionRouter);

  app.use(`${basePath}/`, (_req: Request, res: Response) => {
    res.send('Welcome to Eventmint API');
  });
};
