import winston from 'winston';
import { APP_NAME } from '../constants';
import fs from 'fs';
import path from 'path';

// Winston logger
export const winstonLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: APP_NAME },
  transports: [
    // new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

export async function downloadLogs(fileToDownload = 'combined.log') {
  try {
    const rootFolderPath = process.cwd(); // Get the root folder path
    const filePath = path.join(rootFolderPath, fileToDownload);

    // Read the content of the file asynchronously
    const data = await fs.promises.readFile(filePath, 'utf8');

    return data;
  } catch (error: any) {
    // Handle errors
    winstonLogger.error(error.message);
    return false;
  }
}
