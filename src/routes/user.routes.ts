import { Router } from "express";
import UserController from "../controllers/user.controller";
import multer from "multer";
import path from "path";

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) =>
      cb(null, Date.now() + path.extname(file.originalname)),
  }),
});

const router = Router();
const userController = new UserController();

router.post("/:id", upload.single("image"), userController.createUser);
router.get("/:id", userController.getUserById);
router.get("/users", userController.getUsers);
router.post("/upload", upload.single("file"), userController.uploadImage);

export default router;
