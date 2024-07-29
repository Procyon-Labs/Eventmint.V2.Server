"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => cb(null, "uploads/"),
        filename: (req, file, cb) => cb(null, Date.now() + path_1.default.extname(file.originalname)),
    }),
});
const router = (0, express_1.Router)();
const userController = new user_controller_1.default();
router.post("/users", upload.single("image"), userController.createUser);
router.get("/users/:id", userController.getUserById);
router.get("/users", userController.getUsers);
router.post("/upload", upload.single("file"), userController.uploadImage);
exports.default = router;
