import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";

export const errorMiddleware = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";
    let success = false;

    if (err.code === 11000) {
        statusCode = 409;
        message = "Duplicate key error: " + Object.keys(err.keyValue).join(", ") + " already exists.";
    }

    res.status(statusCode).json({
        success,
        message,
        ...(err instanceof ApiError && err.data ? { data: err.data } : {}),
        ...(process.env.NODE_ENV === "development" ? { stack: err.stack } : {})
    });
};
