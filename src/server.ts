import app from './app';
import connectToMongo from '../src/config/database.configs';
import { BASE_URL, PORT } from './config';
import { logger } from '../src/middleware/errors.middlewares';
import { pingSelf } from './utils/ping.util';
import 'express-async-errors';

(async () => {
  logger.info(`Attempting to run server on port ${PORT}`);
  await connectToMongo();

  app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
  });

  // (for render services) Keep the API awake by pinging it periodically
  setInterval(
    () => {
      pingSelf(BASE_URL);
    },
    7 * 60 * 1000,
  ); //ping every 7 minutes
})();
