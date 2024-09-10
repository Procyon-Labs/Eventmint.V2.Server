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
exports.pagination = pagination;
function pagination(filter_1) {
    return __awaiter(this, arguments, void 0, function* (filter, options = { limit: 10 }) {
        let limit = 10, skip = 0, page = 1;
        if (options.limit) {
            limit = +options.limit;
        }
        if (options.page) {
            page = +options.page < 1 ? 1 : +options.page;
            skip = (page - 1) * limit;
        }
        // use estimated document search in cases where there is no filter because it is more performant
        const total = Object.keys(filter).length > 0
            ? yield this.countDocuments(filter)
            : yield this.estimatedDocumentCount().exec();
        const mquery = this.find(filter).limit(limit).skip(skip).sort('-createdAt');
        if (options.populate) {
            mquery.populate(options.populate);
        }
        const docs = yield mquery.exec();
        const totalPages = Math.ceil(total / limit);
        return {
            data: docs,
            pagination: {
                hasNextPage: totalPages > page,
                totalPages,
                totalCount: total,
                nextPage: totalPages > page ? page + 1 : null,
                hasPreviousPage: page > 1,
            },
        };
    });
}
