import { userRegister, userLogin } from "../service/user.service"
import { UserResponse } from "../types/type";
import { AsyncError } from "../utils/AsyncError";
import { ApiResponse } from "../utils/ApiResponse";
import { generateAccessToken, generateIdToken } from "../service/jwt.service";

export const login = AsyncError(async (req: any, res: any) => {
    const user = await userLogin(req.body);

    const accessToken = generateAccessToken({
        userId: user._id.toString(),
        role: user.role || "user"
    });

    const idToken = generateIdToken({
        userName: user.userName,
        email: user.email,
        fullName: user.fullName,
        phoneNumber: user.phoneNumber
    });

    const userResponse: UserResponse = {
        id: user._id.toString(),
        userName: user.userName,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role || "user"
    };

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    };

    res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("idToken", idToken, options)
        .json(
            new ApiResponse(200, { user: userResponse }, "user login successfully")
        );
});

export const register = AsyncError(async (req: any, res: any) => {
    const user = await userRegister(req.body);

    const userResponse: UserResponse = {
        id: user._id.toString(),
        userName: user.userName,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role || "user"
    };

    res.status(201).json(
        new ApiResponse(201, userResponse, "user is created successfully")
    );
});
