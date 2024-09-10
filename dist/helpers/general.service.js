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
exports.GeneralService = void 0;
const models_1 = require("../models");
class GeneralService {
    constructor(_model) {
        this._model = _model;
        this.registerModels = () => __awaiter(this, void 0, void 0, function* () {
            yield models_1.UserModel.findOne();
            console.log('Registering user model');
        });
        this.create = (body) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(body);
        });
        this.update = (searchDetails, update) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model
                .findOneAndUpdate(Object.assign({}, searchDetails), update, {
                new: true,
            })
                .select('-__v');
        });
        this.find = (searchData) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model
                .find(Object.assign({}, searchData))
                .sort({ updatedAt: 'desc' })
                .select('-__v');
        });
        this.findOne = (searchData) => __awaiter(this, void 0, void 0, function* () {
            return this.model
                .findOne(Object.assign({}, searchData))
                .sort({ updatedAt: 'desc' })
                .select('-__v');
        });
        this.softDelete = (searchParams) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model
                .findOneAndUpdate(Object.assign(Object.assign({}, searchParams), { deleted: false }), { deleted: true }, {
                new: true,
            })
                .select('-__v');
        });
        this.hardDelete = (searchParams) => __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOneAndDelete(searchParams).select('-__v');
        });
        this.model = _model;
    }
    // getAll = async (pagination: number, searchDetails: object = {}): Promise<T[]> => {
    //   return await this.model.find(searchDetails)
    //     .limit(10)
    //     .skip(pagination)
    //     .sort({ updatedAt: 'desc' })
    //     .select('-__v');
    // };
    getAllWithPagination(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const page = (_a = filter.pagination_page) !== null && _a !== void 0 ? _a : 1;
            const size = (_b = filter.pagination_size) !== null && _b !== void 0 ? _b : 10;
            delete filter.pagination_page;
            delete filter.pagination_size;
            const data = yield this.model.paginate(filter, { limit: size, page: page });
            return data;
        });
    }
}
exports.GeneralService = GeneralService;
