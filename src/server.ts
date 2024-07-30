import "express-async-errors";
import app from "./app";
import { logger } from "../src/middleware/errors.middlewares";
import { PORT } from "../src/config/constants.configs";
import connectToMongo from "../src/config/database.configs";

(async () => {
  logger.info(`Attempting to run server on port ${PORT}`);
  await connectToMongo();
  app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
  });
})();
