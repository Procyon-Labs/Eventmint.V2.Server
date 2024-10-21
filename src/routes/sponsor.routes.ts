import { Router } from 'express';
import SponsorController from '../controllers/sponsor.controller';
import upload from '../config/multer.config';
const router = Router();
const sponsorController = new SponsorController();
router.get('/getsponsors', sponsorController.getAllSponsors);
router.post('/:userId', sponsorController.createSponsor);
router.get('/user/:userId/sponsors', sponsorController.getSponsorByUserId);

router.get('/user/:userId/sponsors', sponsorController.getSponsorEvents);
//upload profile image
router.post('/upload', upload.single('image'), sponsorController.uploadImage);

export default router;
