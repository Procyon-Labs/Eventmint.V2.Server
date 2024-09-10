"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = connectToMongo;
const mongoose_1 = __importDefault(require("mongoose"));
const constants_configs_1 = require("./constants.configs");
mongoose_1.default.set('strictQuery', true);
function connectToMongo() {
    mongoose_1.default
        .connect(process.env.MONGO_URI, {
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 50000, // Close sockets after 45 seconds of inactivity
        family: 4, // Use IPv4, skip trying IPv6
    })
        .then(() => {
        console.log(constants_configs_1.MESSAGES.DATABASE.CONNECTED);
    })
        .catch((err) => {
        console.log(constants_configs_1.MESSAGES.DATABASE.ERROR, err);
    });
}
