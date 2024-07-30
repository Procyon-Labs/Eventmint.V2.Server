import "express-async-errors";
import app from "./app";
import { logger } from "../src/middleware/errors.middlewares";

import connectToMongo from "../src/config/database.configs";
const PORT = process.env.PORT || 3000;
(async () => {
  logger.info(`Attempting to run server on port ${PORT}`);
  await connectToMongo();
  app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
  });
})();
