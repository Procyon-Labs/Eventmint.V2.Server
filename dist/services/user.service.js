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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class UserService {
    create(User) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.create(User);
        });
    }
    checkUserExistence(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield models_1.UserModel.exists({ _id: id })) ? true : false;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.findById(id);
        });
    }
    findOne(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.findOne(param, '-__v');
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.findOne({ email });
        });
    }
    editById(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.findByIdAndUpdate(id, { $set: obj }, { new: true });
        });
    }
    getUsers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.find(query);
        });
    }
}
exports.default = UserService;
