import { Router } from 'express';
import EventController from '../controllers/event.controller';
import upload from '../config/multer.config';
const router = Router();
const eventController = new EventController();
router.get('/getevents', eventController.getAllEvents);
router.post('/:userId', eventController.createEvent);
router.get('/:id', eventController.getEventById);
router.get('/user/:userId/events', eventController.getUserEvents);
//upload profile image
router.post('/upload', upload.single('image'), eventController.uploadImage);
export default router;
