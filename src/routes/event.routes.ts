import { Router } from "express";
import EventController from "../controllers/event.controller";

const router = Router();
const eventController = new EventController();

router.post("/events/:userId", eventController.createEvent);
router.get("/events/:id", eventController.getEventById);
router.get("/user/:userId/events", eventController.getUserEvents);

export default router;
