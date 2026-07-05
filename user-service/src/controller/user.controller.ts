import { userRegister } from "../service/user.service"
import { UserResponse } from "../types/type";
import { AsyncError } from "../utils/AsyncError";
import { ApiResponse } from "../utils/ApiResponse";

export const login = AsyncError(async (req: any, res: any, next: any) => {

});

export const register = AsyncError(async (req: any, res: any, next: any) => {
    const user = await userRegister(req.body);

    const userResponse: UserResponse = {
        id: user._id.toString(),
        userName: user.userName,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber
    };

    res.status(201).json(
        new ApiResponse(201, userResponse, "user is created successfully")
    );
});
