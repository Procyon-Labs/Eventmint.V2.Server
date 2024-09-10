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
exports.ApiService = void 0;
const axios_1 = __importDefault(require("axios"));
class ApiService {
    constructor(baseURL) {
        this.api = axios_1.default.create({
            baseURL,
        });
    }
    request(method_1, url_1) {
        return __awaiter(this, arguments, void 0, function* (method, url, data = null, config = {}) {
            try {
                const response = yield this.api.request(Object.assign({ method,
                    url,
                    data }, config));
                return response.data;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    get(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, config = {}) {
            return this.request('GET', url, null, config);
        });
    }
    post(url_1, data_1) {
        return __awaiter(this, arguments, void 0, function* (url, data, config = {}) {
            return this.request('POST', url, data, config);
        });
    }
    put(url_1, data_1) {
        return __awaiter(this, arguments, void 0, function* (url, data, config = {}) {
            return this.request('PUT', url, data, config);
        });
    }
    patch(url_1, data_1) {
        return __awaiter(this, arguments, void 0, function* (url, data, config = {}) {
            return this.request('PATCH', url, data, config);
        });
    }
    delete(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, config = {}) {
            return this.request('DELETE', url, null, config);
        });
    }
}
exports.ApiService = ApiService;
