import express from 'express';
import indexMiddleware from './middleware/index.middleware';

const app = express();
indexMiddleware(app);

export default app;
