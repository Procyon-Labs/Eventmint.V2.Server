"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSponsorshipAdDto = exports.GetSponsorshipAdWithPaginationDto = exports.GetSponsorshipAdDto = exports.UpdateSponsorshipAdDto = exports.CreateSponsorshipAdDto = void 0;
const decorator_1 = require("../utils/decorator");
const class_validator_1 = require("class-validator");
class CreateSponsorshipAdDto {
}
exports.CreateSponsorshipAdDto = CreateSponsorshipAdDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSponsorshipAdDto.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSponsorshipAdDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSponsorshipAdDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSponsorshipAdDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSponsorshipAdDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSponsorshipAdDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSponsorshipAdDto.prototype, "image", void 0);
class UpdateSponsorshipAdDto {
}
exports.UpdateSponsorshipAdDto = UpdateSponsorshipAdDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSponsorshipAdDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSponsorshipAdDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSponsorshipAdDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateSponsorshipAdDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateSponsorshipAdDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSponsorshipAdDto.prototype, "image", void 0);
class GetSponsorshipAdDto {
}
exports.GetSponsorshipAdDto = GetSponsorshipAdDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSponsorshipAdDto.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSponsorshipAdDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSponsorshipAdDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSponsorshipAdDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, decorator_1.ConvertToInt)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetSponsorshipAdDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, decorator_1.ConvertToInt)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetSponsorshipAdDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetSponsorshipAdDto.prototype, "image", void 0);
class GetSponsorshipAdWithPaginationDto extends GetSponsorshipAdDto {
    constructor() {
        super(...arguments);
        this.pagination_size = 10;
        this.pagination_page = 1;
    }
}
exports.GetSponsorshipAdWithPaginationDto = GetSponsorshipAdWithPaginationDto;
__decorate([
    (0, decorator_1.ConvertToInt)() // Because by default any value passed through query is a string, we need to convert it back to a number.
    ,
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], GetSponsorshipAdWithPaginationDto.prototype, "pagination_size", void 0);
__decorate([
    (0, decorator_1.ConvertToInt)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], GetSponsorshipAdWithPaginationDto.prototype, "pagination_page", void 0);
class DeleteSponsorshipAdDto {
}
exports.DeleteSponsorshipAdDto = DeleteSponsorshipAdDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeleteSponsorshipAdDto.prototype, "id", void 0);
