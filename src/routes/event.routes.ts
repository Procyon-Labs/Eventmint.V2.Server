import { Router } from "express";
import EventController from "../controllers/event.controller";

const router = Router();
const eventController = new EventController();

router.post("/:userId", eventController.createEvent);
router.get("/:id", eventController.getEventById);
router.get("/user/:userId/events", eventController.getUserEvents);

export default router;
