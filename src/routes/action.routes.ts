// src/routes/action.routes.ts

import express from "express";
import ActionController from "../controllers/action.controllers";
const { getAction } = new ActionController();

const router = express.Router();

router.get("/:name", getAction);

export default router;
