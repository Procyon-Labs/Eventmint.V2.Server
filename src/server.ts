import 'express-async-errors';
import app from './app';
import { logger } from '../src/middleware/errors.middlewares';

import connectToMongo from '../src/config/database.configs';
import { pingSelf } from './utils/ping.util';

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

(async () => {
  logger.info(`Attempting to run server on port ${PORT}`);
  await connectToMongo();

  app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
  });

  // (for render services) Keep the API awake by pinging it periodically
  setInterval(() => {
    pingSelf(BASE_URL);
  }, 7 * 60 * 1000); //ping every 7 minutes
})();
