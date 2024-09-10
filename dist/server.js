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
require("express-async-errors");
const app_1 = __importDefault(require("./app"));
const database_configs_1 = __importDefault(require("../src/config/database.configs"));
const config_1 = require("./config");
const errors_middlewares_1 = require("../src/middleware/errors.middlewares");
const ping_util_1 = require("./utils/ping.util");
errors_middlewares_1.logger.info(`Attempting to run server on port ${config_1.PORT}`);
app_1.default.listen(config_1.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_configs_1.default)();
    errors_middlewares_1.logger.info(`Listening on port ${config_1.PORT}`);
}));
app_1.default.use((err, req, res, next) => {
    // throw Error('This is a sample error');
    console.log(`${'\x1b[31m'}${err.message}${'\x1b][0m]'} `);
    return res.status(500).send({ success: false, status: 500, message: err.message });
});
// (for render services) Keep the API awake by pinging it periodically
setInterval(() => {
    (0, ping_util_1.pingSelf)(config_1.BASE_URL);
}, 7 * 60 * 1000); //ping every 7 minutes
