"use strict";
// src/routes/action.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const action_controllers_1 = __importDefault(require("../controllers/action.controllers"));
const { getAction } = new action_controllers_1.default();
const router = express_1.default.Router();
router.get("/:name", getAction);
exports.default = router;
