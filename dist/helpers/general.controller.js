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
exports.GeneralController = void 0;
const general_service_1 = require("./general.service");
const config_1 = require("../config");
const utils_1 = require("../utils");
class GeneralController {
    constructor(model) {
        this.generalService = new general_service_1.GeneralService(model);
        this.create = this.create.bind(this);
        // this.delete = this.delete.bind(this);
        this.find = this.find.bind(this);
        this.getAllWithPagination = this.getAllWithPagination.bind(this);
        this.hardDelete = this.hardDelete.bind(this);
        this.update = this.update.bind(this);
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.generalService.registerModels();
            const data = yield this.generalService.create(req.body);
            if (!data)
                return (0, utils_1.InternalErrorResponse)(res);
            return (0, utils_1.SuccessResponse)(res, data);
        });
    }
    getAllWithPagination(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.generalService.getAllWithPagination(req.query);
            if (!data)
                return (0, utils_1.InternalErrorResponse)(res);
            if (data.data.length === 0)
                return (0, utils_1.NotFoundResponse)(res);
            return (0, utils_1.SuccessResponseWithPagination)(res, data.data, data.pagination);
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.generalService.find(req.query);
            if (!data)
                return (0, utils_1.InternalErrorResponse)(res);
            if (data.length === 0)
                return (0, utils_1.NotFoundResponse)(res);
            return (0, utils_1.SuccessResponse)(res, data);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const data = yield this.generalService.update({ _id: id }, req.body);
            if (!data)
                return (0, utils_1.NotFoundResponse)(res);
            return (0, utils_1.SuccessResponse)(res, data, config_1.MESSAGES.UPDATED);
        });
    }
    // async delete(req: Request, res: Response) {
    //   const { id } = req.params;
    //   const data = await this.generalService.softDelete({ _id: id });
    //   if (!data) return NotFoundResponse(res);
    //   return SuccessResponse(res, data, MESSAGES.DELETED);
    // }
    // Admins only
    hardDelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const data = yield this.generalService.hardDelete({ _id: id });
            if (!data)
                return (0, utils_1.NotFoundResponse)(res);
            return (0, utils_1.SuccessResponse)(res, data, config_1.MESSAGES.DELETED);
        });
    }
}
exports.GeneralController = GeneralController;
