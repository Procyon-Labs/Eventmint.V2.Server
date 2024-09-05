import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { BASE_URL, basePath } from './constants.configs';
import { Express } from 'express';
import { sponsorshipAdSwaggerSchema } from '../swagger-schemas';

export function setupSwagger(app: Express) {
  const SWAGGER_OPTIONS = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Eventmint',
        version: '1.0.0',
        description:
          'The Eventmint Backend API. It contains tests, one demo root API call, basic async error handling, one demo axios call and .env support.',
        contact: {
          name: 'Orji Michael',
          email: 'orjimichael4886@gmail.com',
        },
      },
      components: {
        schemas: {
          ...sponsorshipAdSwaggerSchema,
        },
      },
      servers: [
        {
          url: `${BASE_URL}${basePath}`,
        },
      ],
    },
    apis: ['src/routes/*.ts'],
  };
  const swaggerSpec = swaggerJSDoc(SWAGGER_OPTIONS);

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
