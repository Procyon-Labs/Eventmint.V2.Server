import { Router } from 'express';
import UserController from '../controllers/user.controller';
import multer from 'multer';
import os from 'os';

// Get the system temporary directory
const tempDir = os.tmpdir();

// Set up Multer with disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir); // Use the system temporary directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original file name
  },
});

// Configure multer to use Cloudinary as storage
export const upload = multer({ storage });

const router = Router();
const userController = new UserController();

router.post('/upload', upload.single('image'), userController.uploadImage);
router.post('/:id', upload.single('image'), userController.createUser);
router.get('/exists/:id', userController.checkUserExistence);
router.get('/:id', userController.getUserById);
router.get('/users', userController.getUsers);

export default router;
