"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFailureResponse = AuthFailureResponse;
exports.BadRequestResponseWithError = BadRequestResponseWithError;
exports.NotFoundResponse = NotFoundResponse;
exports.ForbiddenResponse = ForbiddenResponse;
exports.BadRequestResponse = BadRequestResponse;
exports.ForbiddenButWeMoveResponse = ForbiddenButWeMoveResponse;
exports.InternalErrorResponse = InternalErrorResponse;
exports.SuccessMsgResponse = SuccessMsgResponse;
exports.FailureMsgResponse = FailureMsgResponse;
exports.SuccessResponse = SuccessResponse;
exports.SuccessResponseWithPagination = SuccessResponseWithPagination;
exports.AccessTokenErrorResponse = AccessTokenErrorResponse;
exports.TokenRefreshResponse = TokenRefreshResponse;
exports.ComingSoonResponse = ComingSoonResponse;
const config_1 = require("../config");
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["SUCCESS"] = 200] = "SUCCESS";
    ResponseStatus[ResponseStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ResponseStatus[ResponseStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ResponseStatus[ResponseStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    ResponseStatus[ResponseStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    ResponseStatus[ResponseStatus["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
    ResponseStatus[ResponseStatus["UNAVAILABLE"] = 503] = "UNAVAILABLE";
})(ResponseStatus || (ResponseStatus = {}));
function AuthFailureResponse(res, message = config_1.MESSAGES.AUTH_FAILURE) {
    return res
        .status(ResponseStatus.UNAUTHORIZED)
        .send({ success: false, status: ResponseStatus.UNAUTHORIZED, message });
}
function BadRequestResponseWithError(res, errors, message = config_1.MESSAGES.BAD_PARAMETERS) {
    return res
        .status(ResponseStatus.BAD_REQUEST)
        .send({ success: false, status: ResponseStatus.BAD_REQUEST, message, errors });
}
function NotFoundResponse(res, message = config_1.MESSAGES.NOT_FOUND) {
    return res
        .status(ResponseStatus.NOT_FOUND)
        .send({ success: false, status: ResponseStatus.NOT_FOUND, message });
}
function ForbiddenResponse(res, message = config_1.MESSAGES.FORBIDDEN) {
    return res
        .status(ResponseStatus.FORBIDDEN)
        .send({ success: false, status: ResponseStatus.FORBIDDEN, message });
}
function BadRequestResponse(res, message = config_1.MESSAGES.BAD_PARAMETERS) {
    return res
        .status(ResponseStatus.BAD_REQUEST)
        .send({ success: false, status: ResponseStatus.BAD_REQUEST, message });
}
function ForbiddenButWeMoveResponse(res, data, message = config_1.MESSAGES.BAD_PARAMETERS) {
    return res
        .status(ResponseStatus.FORBIDDEN)
        .json({ success: true, status: ResponseStatus.FORBIDDEN, message, data });
}
function InternalErrorResponse(res, message = config_1.MESSAGES.INTERNAL_ERROR) {
    return res
        .status(ResponseStatus.INTERNAL_ERROR)
        .send({ success: false, status: ResponseStatus.INTERNAL_ERROR, message });
}
function SuccessMsgResponse(res, message = config_1.MESSAGES.FETCHED) {
    return res
        .status(ResponseStatus.SUCCESS)
        .send({ success: true, status: ResponseStatus.SUCCESS, message });
}
function FailureMsgResponse(res, message = config_1.MESSAGES.ERROR) {
    return res
        .status(ResponseStatus.SUCCESS)
        .send({ success: false, status: ResponseStatus.SUCCESS, message });
}
function SuccessResponse(res, data, message = config_1.MESSAGES.SUCCESSFUL) {
    return res
        .status(ResponseStatus.SUCCESS)
        .json({ success: true, status: ResponseStatus.SUCCESS, message, data });
}
function SuccessResponseWithPagination(res, data, pagination, message = config_1.MESSAGES.SUCCESSFUL) {
    return res
        .status(ResponseStatus.SUCCESS)
        .json({ success: true, status: ResponseStatus.SUCCESS, message, data, pagination });
}
function AccessTokenErrorResponse(res, message = config_1.MESSAGES.ACCESS_TOKEN_ERROR_RESPONSE) {
    return res
        .status(ResponseStatus.UNAUTHORIZED)
        .send({ success: false, status: ResponseStatus.UNAUTHORIZED, message });
}
function TokenRefreshResponse(res, message = config_1.MESSAGES.FETCHED, accessToken, refreshToken) {
    return res.status(ResponseStatus.SUCCESS).json({
        success: true,
        status: ResponseStatus.SUCCESS,
        message,
        accessToken: accessToken,
        refreshToken: refreshToken,
    });
}
function ComingSoonResponse(res, message = config_1.MESSAGES.COMING_SOON) {
    return res
        .status(ResponseStatus.UNAVAILABLE)
        .send({ success: false, status: ResponseStatus.UNAVAILABLE, message });
}
