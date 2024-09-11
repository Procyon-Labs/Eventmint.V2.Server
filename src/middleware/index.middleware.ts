import cors from 'cors';
import helmet from 'helmet';
import indexRoutes from '../routes/index.routes';
import morgan from 'morgan';
import { Express, json, urlencoded } from 'express';
import { setupSwagger } from '../config/swagger.config';

export default (app: Express) => {
  app.use(morgan('combined'));
  app.use(
    cors({
      origin: '*', // Replace with your client URL
      methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    }),
  );
  app.use(json());
  app.use(helmet());
  app.use(urlencoded({ extended: true }));
  setupSwagger(app);
  indexRoutes(app);
};
