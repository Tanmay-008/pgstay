import { userRegister, userLogin } from "../service/user.service"
import { UserResponse } from "../types/type";
import { AsyncError } from "../utils/AsyncError";
import { ApiResponse } from "../utils/ApiResponse";
import { generateToken } from "../service/jwt.service";

export const login = AsyncError(async (req: any, res: any, next: any) => {
    const user = await userLogin(req.body);

    const token = generateToken({
        userId: user._id.toString(),
        userName: user.userName,
        email: user.email
    });

    const userResponse: UserResponse = {
        id: user._id.toString(),
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber
    };

    const options = {
        httpOnly: true, // Prevents client-side JS from reading the cookie
        secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
    };

    res.status(200)
        .cookie("token", token, options)
        .json(
            new ApiResponse(200, { user: userResponse, token }, "user login successfully")
        );
});

export const register = AsyncError(async (req: any, res: any, next: any) => {
    const user = await userRegister(req.body);

    const userResponse: UserResponse = {
        id: user._id.toString(),
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber
    };

    res.status(201).json(
        new ApiResponse(201, userResponse, "user is created successfully")
    );
});
