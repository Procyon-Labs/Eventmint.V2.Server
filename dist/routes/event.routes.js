"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controller_1 = __importDefault(require("../controllers/event.controller"));
const router = (0, express_1.Router)();
const eventController = new event_controller_1.default();
router.post("/events/:userId", eventController.createEvent);
router.get("/events/:id", eventController.getEventById);
router.get("/user/:userId/events", eventController.getUserEvents);
exports.default = router;
