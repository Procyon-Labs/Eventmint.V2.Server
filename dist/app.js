'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const index_middleware_1 = __importDefault(require('./middleware/index.middleware'));
const cors_1 = __importDefault(require('cors')); // Import CORS

const app = (0, express_1.default)();

// Use CORS with appropriate settings
app.use(
  (0, cors_1.default)({
    origin: '*', // You can change this to specific domains as needed
    methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Encoding'],
    credentials: true, // Include this if your API requires credentials (like cookies)
  }),
);

(0, index_middleware_1.default)(app);

exports.default = app;
