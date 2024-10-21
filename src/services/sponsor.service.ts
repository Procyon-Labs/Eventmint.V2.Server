// services/event.service.ts
import { ISponsor } from '../interfaces';
import HttpException from '../utils/helpers/httpException.util';
import SPONSOR from '../models/sponsor.model';
import { MESSAGES } from '../config/constants.configs';
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from '../utils/statusCodes.util';
import cloudinary from '../config/cloudinary.configs';

export default class SponsorService {
  async create(sponsor: Partial<ISponsor>) {
    try {
      return await SPONSOR.create(sponsor);
    } catch (error: any) {
      throw new HttpException(INTERNAL_SERVER_ERROR, error.message);
    }
  }

  async getSponsorByUserId(userId: string) {
    try {
      const sponsor = await SPONSOR.findOne({ userId });
      if (!sponsor) throw new Error('Sponsor not found');
      return sponsor;
    } catch (error: any) {
      if (error.status === NOT_FOUND || error.status === MESSAGES.NOT_ID) throw error;

      throw new HttpException(INTERNAL_SERVER_ERROR, error.message);
    }
  }

  async getSponsorByQuery(query: Partial<ISponsor>) {
    const sponsor = await SPONSOR.findOne(query);
    return sponsor;
  }

  async getSponsors(query: Partial<ISponsor>) {
    try {
      const sponsor = await SPONSOR.find(query).lean().maxTimeMS(5000);
      return sponsor;
    } catch (error: any) {
      if (error.status === NOT_FOUND || error.status === MESSAGES.NOT_ID) throw error;

      throw new HttpException(INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async uploadImage(filePath: string) {
    try {
      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, { folder: 'Eventmint' });
      const imageUrl = result.secure_url;

      if (!imageUrl) {
        throw new Error('File upload failed');
      }

      return imageUrl;
    } catch (error: any) {
      throw new Error(`Image upload error: ${error.message}`);
    }
  }
}
