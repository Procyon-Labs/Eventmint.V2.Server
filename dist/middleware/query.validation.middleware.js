"use strict";
// validation.middleware.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryDTO = validateQueryDTO;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const utils_1 = require("../utils");
function validateQueryDTO(dtoClass) {
    return (req, res, next) => {
        const dto = (0, class_transformer_1.plainToInstance)(dtoClass, req.query);
        (0, class_validator_1.validate)(dto).then((errors) => {
            if (errors.length > 0) {
                const errorMessage = errors.map((error) => {
                    return Object.values(error.constraints).join(', ');
                    // return {
                    //   message: `${error.property} has wrong value: ${error.value}`,
                    //   constraints: Object.values(error.constraints).join(', '),
                    // };
                });
                return (0, utils_1.BadRequestResponseWithError)(res, errorMessage);
            }
            else {
                req.query = dto;
                next();
            }
        });
    };
}
