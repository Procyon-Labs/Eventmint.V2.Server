import asyncError from './errors.middlewares';
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
      origin: '*',
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Encoding'],
      methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    })
  );
  app.use(json());
  app.use(helmet());
  app.use(urlencoded({ extended: true }));
  app.use(asyncError);
  setupSwagger(app);
  indexRoutes(app);
};
