"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidObjectId = isValidObjectId;
const mongoose_1 = require("mongoose");
function isValidObjectId(value) {
    return mongoose_1.Types.ObjectId.isValid(value);
}
