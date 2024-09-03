import { Request, Response } from "express";
import EventService from "../services/event.service";

const { create, getEventById, getEvents, getEventByQuery } = new EventService();

const deployedLink = "https://eventmint.onrender.com";
// const deployedLink = "http://localhost:5500.com";

export default class EventController {
  async createEvent(req: Request, res: Response) {
    try {
      const foundEvent = await getEventByQuery({ name: req.body.name });
      if (foundEvent) {
        return res.status(409).send({
          success: false,
          message: "Event name already exists",
        });
      }

      const event = await create({ ...req.body, userId: req.params.userId });

      return res.status(200).send({
        success: true,
        message: "Event created successfully",
        event,
        blink: `${deployedLink}/api/v1/action/${encodeURIComponent(
          event.name
        )}`,
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error occurred while creating event: ${error.message}`,
      });
    }
  }

  async getEventById(req: Request, res: Response) {
    try {
      const event = await getEventById(req.params.id);

      if (!event) {
        return res.status(404).send({
          success: false,
          message: "Event with the given ID not found",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Event fetched successfully",
        event,
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error occurred while fetching event: ${error.message}`,
      });
    }
  }

  async getUserEvents(req: Request, res: Response) {
    try {
      const events = await getEvents({ userId: req.params.userId });

      if (events.length === 0) {
        return res.status(404).send({
          success: false,
          message: "Events with the given userId not found",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Events fetched successfully",
        events,
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error occurred while fetching events: ${error.message}`,
      });
    }
  }
}
