"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_service_1 = __importDefault(require("../services/event.service"));
const { create, getEventById, getEvents, getEventByQuery, uploadImage } = new event_service_1.default();
const deployedLink = 'https://dial.to/?action=solana-action:https://www.eventmint.onrender.com';
// const deployedLink = "http://localhost:5500.com";
class EventController {
    createEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundEvent = yield getEventByQuery({ name: req.body.name });
                if (foundEvent) {
                    return res.status(409).send({
                        success: false,
                        message: 'Event name already exists',
                    });
                }
                const event = yield create(Object.assign(Object.assign({}, req.body), { userId: req.params.userId }));
                return res.status(200).send({
                    success: true,
                    message: 'Event created successfully',
                    event,
                    blink: `${deployedLink}/api/v1/action/${encodeURIComponent(event.name)}`,
                });
            }
            catch (error) {
                return res.status(500).send({
                    success: false,
                    message: `Error occurred while creating event: ${error.message}`,
                });
            }
        });
    }
    getEventById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = yield getEventById(req.params.id);
                if (!event) {
                    return res.status(404).send({
                        success: false,
                        message: 'Event with the given ID not found',
                    });
                }
                return res.status(200).send({
                    success: true,
                    message: 'Event fetched successfully',
                    event,
                });
            }
            catch (error) {
                return res.status(500).send({
                    success: false,
                    message: `Error occurred while fetching event: ${error.message}`,
                });
            }
        });
    }
    getUserEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const events = yield getEvents({ userId: req.params.userId });
                if (events.length === 0) {
                    return res.status(404).send({
                        success: false,
                        message: 'Events with the given userId not found',
                    });
                }
                return res.status(200).send({
                    success: true,
                    message: 'Events fetched successfully',
                    events,
                });
            }
            catch (error) {
                return res.status(500).send({
                    success: false,
                    message: `Error occurred while fetching events: ${error.message}`,
                });
            }
        });
    }
    getAllEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const events = yield getEvents({}); // Fetch all events without filtering
                if (events.length === 0) {
                    return res.status(404).send({
                        success: false,
                        message: 'No events found',
                    });
                }
                return res.status(200).send({
                    success: true,
                    message: 'All events fetched successfully',
                    events,
                });
            }
            catch (error) {
                return res.status(500).send({
                    success: false,
                    message: `Error occurred while fetching events: ${error.message}`,
                });
            }
        });
    }
    uploadImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.file) {
                    const imageUrl = yield uploadImage(req.file.path); // Call the uploadImage method in the service
                    return res.status(201).send({
                        success: true,
                        message: 'Image uploaded successfully',
                        imageUrl,
                    });
                }
                return res.status(409).send({
                    success: false,
                    message: 'Include an Image file',
                });
            }
            catch (err) {
                return res.status(500).send({
                    success: false,
                    message: err.message,
                });
            }
        });
    }
}
exports.default = EventController;
