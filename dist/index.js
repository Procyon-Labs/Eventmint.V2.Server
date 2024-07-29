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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const action_routes_1 = __importDefault(require("./routes/action.routes"));
const event_routes_1 = __importDefault(require("./routes/event.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const connect_1 = __importDefault(require("./db/connect"));
dotenv_1.default.config();
// Initialize the Express application
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGO_URI;
if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
}
// Middleware
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Routes
app.use("/api/v1/event-blink", action_routes_1.default);
app.use("/api/v1", user_routes_1.default);
app.use("/api/v1", event_routes_1.default);
// Catch-all route
app.get("*", (req, res) => {
    res.json("HELLO CHINEMEREM");
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    }
    catch (error) {
        console.log("Error starting the server:", error);
    }
});
start();
