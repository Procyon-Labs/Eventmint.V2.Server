import 'express-async-errors';
import app from './app';
import connectToMongo from '../src/config/database.configs';
import { BASE_URL, PORT } from './config';
import { logger } from '../src/middleware/errors.middlewares';
import { NextFunction, Request, Response } from 'express';
import { pingSelf } from './utils/ping.util';

  logger.info(`Attempting to run server on port ${PORT}`);
  
  app.listen(PORT, async () => {
    await connectToMongo();
    logger.info(`Listening on port ${PORT}`);
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // throw Error('This is a sample error');
  
    console.log(`${'\x1b[31m'}${err.message}${'\x1b][0m]'} `);
    return res
      .status(500)
      .send({ success: false, status: 500, message: err.message });
  });

  // (for render services) Keep the API awake by pinging it periodically
  setInterval(
    () => {
      pingSelf(BASE_URL);
    },
    7 * 60 * 1000,
  ); //ping every 7 minutes
