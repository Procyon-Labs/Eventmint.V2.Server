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
const http_status_codes_1 = require("http-status-codes");
const bad_request_1 = __importDefault(require("../errors/bad-request"));
const actions_1 = require("@solana/actions");
const { getEventByQuery } = new event_service_1.default();
class ActionController {
    getAction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const baseHref = new URL(`${req.protocol}://${req.get("host")}${req.originalUrl}`).toString();
                const eventName = decodeURIComponent(req.params.name);
                const event = yield getEventByQuery({
                    name: eventName,
                });
                if (!event) {
                    throw new bad_request_1.default("invaild event Id");
                }
                let payload;
                payload = {
                    icon: event === null || event === void 0 ? void 0 : event.image,
                    label: `Buy Ticket (${event === null || event === void 0 ? void 0 : event.price} SOL)`,
                    description: `${event === null || event === void 0 ? void 0 : event.description}`,
                    title: `${event === null || event === void 0 ? void 0 : event.name}`,
                };
                res.set(actions_1.ACTIONS_CORS_HEADERS);
                res.status(http_status_codes_1.StatusCodes.OK).json(payload);
                return res.json(payload);
            }
            catch (error) {
                return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                    success: false,
                    message: `Error: ${error.message}`,
                });
            }
        });
    }
}
exports.default = ActionController;
