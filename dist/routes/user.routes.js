"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const multer_1 = __importDefault(require("multer"));
const os_1 = __importDefault(require("os"));
// Get the system temporary directory
const tempDir = os_1.default.tmpdir();
// Set up Multer with disk storage
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempDir); // Use the system temporary directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep the original file name
    },
});
// Configure multer to use Cloudinary as storage
exports.upload = (0, multer_1.default)({ storage });
const router = (0, express_1.Router)();
const userController = new user_controller_1.default();
router.post('/upload', exports.upload.single('image'), userController.uploadImage);
router.post('/:id', exports.upload.single('image'), userController.createUser);
router.get('/exists/:id', userController.checkUserExistence);
router.get('/:id', userController.getUserById);
router.get('/users', userController.getUsers);
exports.default = router;
