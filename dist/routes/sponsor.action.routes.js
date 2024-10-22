"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/action.routes.ts
const actions_1 = require("@solana/actions");
const express_1 = __importDefault(require("express"));
const sponsor_action_controller_1 = __importDefault(require("../controllers/sponsor.action.controller"));
const { getAction, postAction } = new sponsor_action_controller_1.default();
const router = express_1.default.Router();
router.get('/:keymessage', getAction);
//options action
router.options('/:keymessage', (_req, res) => {
    const headers = (0, actions_1.createActionHeaders)();
    res.set(headers);
    return res.json();
});
router.post('/:keymessage', postAction);
exports.default = router;
