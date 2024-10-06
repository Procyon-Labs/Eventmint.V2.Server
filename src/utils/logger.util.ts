// src/utils/logger.ts

import { createLogger, format, transports, Logger as WinstonLogger } from 'winston';

enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  HTTP = 'http',
  VERBOSE = 'verbose',
  DEBUG = 'debug',
  SILLY = 'silly',
}

class Logger {
  private logger: WinstonLogger;
  private context: string;

  constructor(context: string) {
    this.context = context;
    this.logger = createLogger({
      level: process.env.LOG_LEVEL || 'info',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
      ),
      defaultMeta: { service: 'sponsor-service' },
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.printf(
              (info) => `${info.timestamp} ${info.level}: [${this.context}] ${info.message}`,
            ),
          ),
        }),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
      ],
    });
  }

  error(message: string, meta?: any): void {
    this.logger.error(message, { context: this.context, ...meta });
  }

  warn(message: string, meta?: any): void {
    this.logger.warn(message, { context: this.context, ...meta });
  }

  info(message: string, meta?: any): void {
    this.logger.info(message, { context: this.context, ...meta });
  }

  http(message: string, meta?: any): void {
    this.logger.http(message, { context: this.context, ...meta });
  }

  verbose(message: string, meta?: any): void {
    this.logger.verbose(message, { context: this.context, ...meta });
  }

  debug(message: string, meta?: any): void {
    this.logger.debug(message, { context: this.context, ...meta });
  }

  silly(message: string, meta?: any): void {
    this.logger.silly(message, { context: this.context, ...meta });
  }
}

export { Logger, LogLevel };
