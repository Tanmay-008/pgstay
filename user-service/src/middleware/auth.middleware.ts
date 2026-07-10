import { AsyncError } from "../utils/AsyncError";
import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../service/jwt.service";
import { ApiError } from "../utils/ApiError";
import { UserModel } from "../model/user.model";

export interface AuthRequest extends Request {
    user?: {
        userId: string;
        userName: string;
        email?: string;
    };
}

export const isAuthenticatedUser = AsyncError(async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { token } = req.cookies;

    if (!token) {
        throw new ApiError(401, "Please login to access this resource");
    }

    const decodedPayload = verifyToken(token);

    if (!decodedPayload || !decodedPayload.userId) {
        throw new ApiError(401, "Invalid token payload");
    }

    const user = await UserModel.findById(decodedPayload.userId);
    if (!user) {
        throw new ApiError(401, "The user belonging to this token no longer exists");
    }

    req.user = {
        userId: decodedPayload.userId,
        userName: decodedPayload.userName,
        email: decodedPayload.email
    };

    next();
});  