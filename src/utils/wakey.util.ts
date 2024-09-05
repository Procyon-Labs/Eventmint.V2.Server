import axios from 'axios';
import { winstonLogger } from './logger.util';
import { SITE_LINK } from '../constants';

export async function pingSelf() {
  try {
    const { data } = await axios.get(<string>`${SITE_LINK}`);

    winstonLogger.info(
      `Server pinged successfully: ${data.message}! Status code is ${data.statusCode}`,
    );
    return true;
  } catch (e: any) {
    winstonLogger.info(`this the error message: ${e.message}`);
    return;
  }
}
