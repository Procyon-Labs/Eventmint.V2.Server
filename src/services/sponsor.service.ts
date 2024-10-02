// services/event.service.ts
import { ISponsor } from '../interfaces';

import SPONSOR from '../models/sponsor.model';
import cloudinary from '../config/cloudinary.configs';

export default class SponsorService {
  async create(sponsor: Partial<ISponsor>) {
    return await SPONSOR.create(sponsor);
  }

  async getSponsorById(id: string) {
    const sponsor = await SPONSOR.findById(id);
    if (!sponsor) throw new Error('invalid sponsorID');
    return sponsor;
  }

  async getSponsorByQuery(query: Partial<ISponsor>) {
    const sponsor = await SPONSOR.findOne(query);
    return sponsor;
  }

  async getSponsors(query: Partial<ISponsor>) {
    const sponsor = await SPONSOR.find(query).lean().maxTimeMS(5000);
    return sponsor;
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
