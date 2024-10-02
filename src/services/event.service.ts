// services/event.service.ts

import { IEvent } from '../interfaces';
import Event from '../models/event.model';
import cloudinary from '../config/cloudinary.configs';
export default class EventService {
  async create(event: Partial<IEvent>) {
    return await Event.create(event);
  }

  async getEventById(id: string) {
    const event = await Event.findById(id);
    if (!event) throw new Error('invalid eventID');
    return event;
  }

  async getEventByQuery(query: Partial<IEvent>) {
    const event = await Event.findOne(query);
    return event;
  }

  async getEvents(query: Partial<IEvent>) {
    const event = await Event.find(query).lean().maxTimeMS(5000);
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
