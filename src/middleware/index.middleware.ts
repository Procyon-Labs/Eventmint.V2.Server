import cors from 'cors';
import helmet from 'helmet';
import indexRoutes from '../routes/index.routes';
import morgan from 'morgan';
import { Express, json, urlencoded } from 'express';
import { setupSwagger } from '../config/swagger.config';

export default (app: Express) => {
  const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  };
  app.use(morgan('combined'));
  app.options('*', cors());
  app.use('*', cors(corsOptions));
  app.use(json());
  app.use(helmet());
  app.use(urlencoded({ extended: true }));
  setupSwagger(app);
  indexRoutes(app);
};
