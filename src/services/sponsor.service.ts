// services/event.service.ts
import { ISponsor } from '../interfaces';

import SPONSOR from '../models/sponsor.model';
import cloudinary from '../config/cloudinary.configs';
export default class SponsorService {
  async create(event: Partial<ISponsor>) {
    return await SPONSOR.create(event);
  }

  async getEventById(id: string) {
    const event = await SPONSOR.findById(id);
    if (!event) throw new Error('invalid sponsorID');
    return event;
  }

  async getEventByQuery(query: Partial<ISponsor>) {
    const event = await SPONSOR.findOne(query);
    return event;
  }

  async getEvents(query: Partial<ISponsor>) {
    const event = await SPONSOR.find(query).lean().maxTimeMS(5000);
    return event;
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
