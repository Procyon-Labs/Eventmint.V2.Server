"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const action_routes_1 = __importDefault(require("./action.routes"));
const event_routes_1 = __importDefault(require("./event.routes"));
const sponsor_action_routes_1 = __importDefault(require("./sponsor.action.routes"));
const sponsor_routes_1 = __importDefault(require("./sponsor.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const constants_configs_1 = require("../config/constants.configs");
exports.default = (app) => {
    app.get('/', (req, res) => {
        return res.send({
            success: true,
            message: 'Welcome to Eventmint API. Ensure to go through the API docs before using this service: https://documenter.getpostman.com/view/24549149/2sA3kbgdzd',
        });
    });
    app.use(`${constants_configs_1.basePath}/sponsoraction`, sponsor_action_routes_1.default);
    app.use(`${constants_configs_1.basePath}/sponsor`, sponsor_routes_1.default);
    app.use(`${constants_configs_1.basePath}/user`, user_routes_1.default);
    app.use(`${constants_configs_1.basePath}/event`, event_routes_1.default);
    app.use(`${constants_configs_1.basePath}/action`, action_routes_1.default);
    /**
     * @swagger
     * /:
     *   get:
     *     summary: API Health check
     *     description: Returns an object containing demo content
     *     tags: [Default]
     *     responses:
     *       '200':
     *         description: Successful.
     *       '400':
     *         description: Bad request.
     */
    app.use(`${constants_configs_1.basePath}/`, (_req, res) => {
        res.send('Welcome to Eventmint API');
    });
};
