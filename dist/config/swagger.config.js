"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const constants_configs_1 = require("./constants.configs");
const swagger_schemas_1 = require("../swagger-schemas");
function setupSwagger(app) {
    const SWAGGER_OPTIONS = {
        swaggerDefinition: {
            openapi: '3.0.0',
            info: {
                title: 'EventMint',
                version: '1.0.0',
                description: 'The EventMint Backend API. It contains tests, numerous API routes, basic async error handling, and .env support.',
                contact: {
                    name: 'Orji Michael',
                    email: 'orjimichael4886@gmail.com',
                },
            },
            components: {
                schemas: Object.assign(Object.assign({}, swagger_schemas_1.sponsorshipAdSwaggerSchema), swagger_schemas_1.sponsorshipApplicationSwaggerSchema),
            },
            servers: [
                {
                    url: `${constants_configs_1.BASE_URL}${constants_configs_1.basePath}`,
                },
            ],
        },
        apis: ['src/routes/*.ts'],
    };
    const swaggerSpec = (0, swagger_jsdoc_1.default)(SWAGGER_OPTIONS);
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
}
