"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["USER"] = "user";
    UserType["ADMIN"] = "admin";
    UserType["SUPER_ADMIN"] = "superAdmin";
})(UserType || (exports.UserType = UserType = {}));
var Roles;
(function (Roles) {
    Roles["BUSINESS_OWNER"] = "businessOwner";
    Roles["SPONSOR"] = "sponsor";
    Roles["CUSTOMER"] = "customer";
})(Roles || (exports.Roles = Roles = {}));
