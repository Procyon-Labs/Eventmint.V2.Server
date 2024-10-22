import { Response } from 'express';
import { PaginationData } from '../interfaces';

enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
  UNAVAILABLE = 503,
}

export function AuthFailureResponse(res: Response, message = "Auth failure"): Response {
  return res
    .status(ResponseStatus.UNAUTHORIZED)
    .send({ success: false, status: ResponseStatus.UNAUTHORIZED, message });
}

export function BadRequestResponseWithError(
  res: Response,
  errors: string[],
  message = "Bad parameters",
): Response {
  return res
    .status(ResponseStatus.BAD_REQUEST)
    .send({ success: false, status: ResponseStatus.BAD_REQUEST, message, errors });
}

export function NotFoundResponse(res: Response, message = "Not found"): Response {
  return res
    .status(ResponseStatus.NOT_FOUND)
    .send({ success: false, status: ResponseStatus.NOT_FOUND, message });
}

export function ForbiddenResponse(res: Response, message = "Forbidden"): Response {
  return res
    .status(ResponseStatus.FORBIDDEN)
    .send({ success: false, status: ResponseStatus.FORBIDDEN, message });
}

export function BadRequestResponse(res: Response, message = "Bad parameter"): Response {
  return res
    .status(ResponseStatus.BAD_REQUEST)
    .send({ success: false, status: ResponseStatus.BAD_REQUEST, message });
}

export function ForbiddenButWeMoveResponse<T>(
  res: Response,
  data: T,
  message = "Bad parameter",
): Response {
  return res
    .status(ResponseStatus.FORBIDDEN)
    .json({ success: true, status: ResponseStatus.FORBIDDEN, message, data });
}

export function InternalErrorResponse(res: Response, message = "Internal error"): Response {
  return res
    .status(ResponseStatus.INTERNAL_ERROR)
    .send({ success: false, status: ResponseStatus.INTERNAL_ERROR, message });
}

export function SuccessMsgResponse(res: Response, message = "Fetched"): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .send({ success: true, status: ResponseStatus.SUCCESS, message });
}

export function FailureMsgResponse(res: Response, message = "Error"): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .send({ success: false, status: ResponseStatus.SUCCESS, message });
}

export function SuccessResponse<T>(
  res: Response,
  data: T,
  message = "Success",
): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .json({ success: true, status: ResponseStatus.SUCCESS, message, data });
}

export function SuccessResponseWithPagination<T>(
  res: Response,
  data: T,
  pagination: PaginationData,
  message = "Success",
): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .json({ success: true, status: ResponseStatus.SUCCESS, message, data, pagination });
}

export function AccessTokenErrorResponse(
  res: Response,
  message = "Token error",
): Response {
  return res
    .status(ResponseStatus.UNAUTHORIZED)
    .send({ success: false, status: ResponseStatus.UNAUTHORIZED, message });
}

export function TokenRefreshResponse(
  res: Response,
  message = "Fetched",
  accessToken: string,
  refreshToken: string,
): Response {
  return res.status(ResponseStatus.SUCCESS).json({
    success: true,
    status: ResponseStatus.SUCCESS,
    message,
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
}

export function ComingSoonResponse(res: Response, message = "Coming soon"): Response {
  return res
    .status(ResponseStatus.UNAVAILABLE)
    .send({ success: false, status: ResponseStatus.UNAVAILABLE, message });
}
