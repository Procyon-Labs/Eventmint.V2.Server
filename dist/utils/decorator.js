"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertToInt = ConvertToInt;
exports.ToLowerCase = ToLowerCase;
exports.Trim = Trim;
const class_transformer_1 = require("class-transformer");
function ConvertToInt() {
    return (0, class_transformer_1.Transform)(({ value }) => {
        return parseInt(value, 10);
    });
}
function ToLowerCase() {
    return (0, class_transformer_1.Transform)(({ value }) => {
        const lowerCaseValue = value.toLowerCase();
        return lowerCaseValue;
    });
}
function Trim() {
    return (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.trim() : value));
}
