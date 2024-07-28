// services/event.service.ts

import IEvent from "../interface/event.interface";
import Event from "../models/event.model";

export default class EventService {
  async create(event: Partial<IEvent>) {
    return await Event.create(event);
  }

  async getEventById(id: string) {
    const event = await Event.findById(id);
    if (!event) throw new Error("invalid eventID");
    return event;
  }

  async getEventByQuery(query: Partial<IEvent>) {
    const event = await Event.findOne(query);
    return event;
  }

  async getEvents(query: Partial<IEvent>) {
    const event = await Event.find(query);
    return event;
  }
}
