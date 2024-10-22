"use strict";
// src/utils/logger.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = exports.Logger = void 0;
const winston_1 = require("winston");
var LogLevel;
(function (LogLevel) {
    LogLevel["ERROR"] = "error";
    LogLevel["WARN"] = "warn";
    LogLevel["INFO"] = "info";
    LogLevel["HTTP"] = "http";
    LogLevel["VERBOSE"] = "verbose";
    LogLevel["DEBUG"] = "debug";
    LogLevel["SILLY"] = "silly";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class Logger {
    constructor(context) {
        this.context = context;
        this.logger = (0, winston_1.createLogger)({
            level: process.env.LOG_LEVEL || 'info',
            format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.json()),
            defaultMeta: { service: 'sponsor-service' },
            transports: [
                new winston_1.transports.Console({
                    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf((info) => `${info.timestamp} ${info.level}: [${this.context}] ${info.message}`)),
                }),
                new winston_1.transports.File({ filename: 'error.log', level: 'error' }),
                new winston_1.transports.File({ filename: 'combined.log' }),
            ],
        });
    }
    error(message, meta) {
        this.logger.error(message, Object.assign({ context: this.context }, meta));
    }
    warn(message, meta) {
        this.logger.warn(message, Object.assign({ context: this.context }, meta));
    }
    info(message, meta) {
        this.logger.info(message, Object.assign({ context: this.context }, meta));
    }
    http(message, meta) {
        this.logger.http(message, Object.assign({ context: this.context }, meta));
    }
    verbose(message, meta) {
        this.logger.verbose(message, Object.assign({ context: this.context }, meta));
    }
    debug(message, meta) {
        this.logger.debug(message, Object.assign({ context: this.context }, meta));
    }
    silly(message, meta) {
        this.logger.silly(message, Object.assign({ context: this.context }, meta));
    }
}
exports.Logger = Logger;
