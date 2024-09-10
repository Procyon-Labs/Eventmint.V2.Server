"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const index_routes_1 = __importDefault(require("../routes/index.routes"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = require("express");
const swagger_config_1 = require("../config/swagger.config");
exports.default = (app) => {
    app.use((0, morgan_1.default)('combined'));
    app.use((0, cors_1.default)({
        origin: '*',
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Encoding'],
        methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    }));
    app.use((0, express_1.json)());
    app.use((0, helmet_1.default)());
    app.use((0, express_1.urlencoded)({ extended: true }));
    (0, swagger_config_1.setupSwagger)(app);
    (0, index_routes_1.default)(app);
};
