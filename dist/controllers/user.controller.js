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
const user_service_1 = __importDefault(require("../services/user.service"));
const cloudinary_configs_1 = __importDefault(require("../config/cloudinary.configs"));
const http_status_codes_1 = require("http-status-codes");
const { create, getUserById, getUserByEmail, getUsers, findOne } = new user_service_1.default();
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            if (email) {
                const userFromEmail = yield findOne({ email: email });
                if (userFromEmail) {
                    return res.status(http_status_codes_1.StatusCodes.CONFLICT).send({
                        success: false,
                        message: "Duplicate email",
                    });
                }
            }
            try {
                const foundUser = yield getUserByEmail(req.body.email);
                if (foundUser) {
                    return res.status(http_status_codes_1.StatusCodes.CONFLICT).send({
                        success: false,
                        message: "Email already exists",
                    });
                }
                let imageUrl;
                if (req.file) {
                    const result = yield cloudinary_configs_1.default.uploader.upload(req.file.path, {
                        folder: "EventMint",
                    });
                    imageUrl = result.secure_url;
                }
                const user = yield create(Object.assign(Object.assign({}, req.body), { imageUrl }));
                return res.status(http_status_codes_1.StatusCodes.OK).send({
                    success: true,
                    message: "User created successfully",
                    user,
                });
            }
            catch (error) {
                return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                    success: false,
                    message: `Error occurred while creating user: ${error.message}`,
                });
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield getUserById(req.params.id);
                if (!user) {
                    return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send({
                        success: false,
                        message: "User with the given ID not found",
                    });
                }
                return res.status(http_status_codes_1.StatusCodes.OK).send({
                    success: true,
                    message: "User fetched successfully",
                    user,
                });
            }
            catch (error) {
                return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                    success: false,
                    message: `Error occurred while fetching user: ${error.message}`,
                });
            }
        });
    }
    uploadImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.file) {
                    // Upload file to Cloudinary
                    const result = yield cloudinary_configs_1.default.uploader.upload(req.file.path, {
                        folder: "Verxio",
                    });
                    const imageUrl = result.secure_url;
                    if (!imageUrl) {
                        return res.status(http_status_codes_1.StatusCodes.CONFLICT).send({
                            success: false,
                            message: "File Upload Failed",
                        });
                    }
                    return res.status(http_status_codes_1.StatusCodes.CREATED).send({
                        success: true,
                        message: "Image uploaded successfully",
                        imageUrl,
                    });
                }
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({
                    success: false,
                    message: "Include an Image file",
                });
            }
            catch (err) {
                return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                    success: false,
                    message: `Error while uploading file`,
                });
            }
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield getUsers(req.query);
                return res.status(http_status_codes_1.StatusCodes.OK).send({
                    success: true,
                    message: "Users fetched successfully",
                    users,
                });
            }
            catch (error) {
                return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                    success: false,
                    message: `Error occurred while fetching users: ${error.message}`,
                });
            }
        });
    }
}
exports.default = UserController;
