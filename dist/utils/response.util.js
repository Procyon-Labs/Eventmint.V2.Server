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
function AuthFailureResponse(res, message = "Auth failure") {
    return res
        .status(ResponseStatus.UNAUTHORIZED)
        .send({ success: false, status: ResponseStatus.UNAUTHORIZED, message });
}
function BadRequestResponseWithError(res, errors, message = "Bad parameters") {
    return res
        .status(ResponseStatus.BAD_REQUEST)
        .send({ success: false, status: ResponseStatus.BAD_REQUEST, message, errors });
}
function NotFoundResponse(res, message = "Not found") {
    return res
        .status(ResponseStatus.NOT_FOUND)
        .send({ success: false, status: ResponseStatus.NOT_FOUND, message });
}
function ForbiddenResponse(res, message = "Forbidden") {
    return res
        .status(ResponseStatus.FORBIDDEN)
        .send({ success: false, status: ResponseStatus.FORBIDDEN, message });
}
function BadRequestResponse(res, message = "Bad parameter") {
    return res
        .status(ResponseStatus.BAD_REQUEST)
        .send({ success: false, status: ResponseStatus.BAD_REQUEST, message });
}
function ForbiddenButWeMoveResponse(res, data, message = "Bad parameter") {
    return res
        .status(ResponseStatus.FORBIDDEN)
        .json({ success: true, status: ResponseStatus.FORBIDDEN, message, data });
}
function InternalErrorResponse(res, message = "Internal error") {
    return res
        .status(ResponseStatus.INTERNAL_ERROR)
        .send({ success: false, status: ResponseStatus.INTERNAL_ERROR, message });
}
function SuccessMsgResponse(res, message = "Fetched") {
    return res
        .status(ResponseStatus.SUCCESS)
        .send({ success: true, status: ResponseStatus.SUCCESS, message });
}
function FailureMsgResponse(res, message = "Error") {
    return res
        .status(ResponseStatus.SUCCESS)
        .send({ success: false, status: ResponseStatus.SUCCESS, message });
}
function SuccessResponse(res, data, message = "Success") {
    return res
        .status(ResponseStatus.SUCCESS)
        .json({ success: true, status: ResponseStatus.SUCCESS, message, data });
}
function SuccessResponseWithPagination(res, data, pagination, message = "Success") {
    return res
        .status(ResponseStatus.SUCCESS)
        .json({ success: true, status: ResponseStatus.SUCCESS, message, data, pagination });
}
function AccessTokenErrorResponse(res, message = "Token error") {
    return res
        .status(ResponseStatus.UNAUTHORIZED)
        .send({ success: false, status: ResponseStatus.UNAUTHORIZED, message });
}
function TokenRefreshResponse(res, message = "Fetched", accessToken, refreshToken) {
    return res.status(ResponseStatus.SUCCESS).json({
        success: true,
        status: ResponseStatus.SUCCESS,
        message,
        accessToken: accessToken,
        refreshToken: refreshToken,
    });
}
function ComingSoonResponse(res, message = "Coming soon") {
    return res
        .status(ResponseStatus.UNAVAILABLE)
        .send({ success: false, status: ResponseStatus.UNAVAILABLE, message });
}
