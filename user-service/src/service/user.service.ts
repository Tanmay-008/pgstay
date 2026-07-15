import { user } from "../types/type"
import { UserModel } from "../model/user.model";
import { encryptData, compareData } from "../utils/security";
import { ApiError } from "../utils/ApiError";

type UserLoginData = {
    userName: string,
    password: string
}

export const userLogin = async (data: UserLoginData) => {
    const user = await UserModel.findOne({ userName: data.userName });
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const isPasswordValid = await compareData(data.password, user.password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid password");
    }

    return user;
}

export const userRegister = async (data: user) => {
    const userExists = await UserModel.findOne({ userName: data.userName });

    if (userExists) {
        throw new ApiError(409, "Username already exists");
    }
    const hashedPassword = await encryptData(data.password);

    const user = await UserModel.create({
        userName: data.userName,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: hashedPassword,
    });
    return user;
}
