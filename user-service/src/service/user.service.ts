import { user } from "../types/type"
import { UserModel } from "../model/user.model";
import { encryptData } from "../utils/security";
import { ApiError } from "../utils/ApiError";

type UserLoginData = {
    userName: string,
    password: string,
    email: string,
}

export const userLogin = async (data: UserLoginData) => {

}

export const userRegister = async (data: user) => {
    const userExists = await UserModel.findOne({ userName: data.userName });

    if (userExists) {
        throw new ApiError(409, "Username already exists");
    }
    const hashedPassword = await encryptData(data.password);

    const user = await UserModel.create({
        userName: data.userName,
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: hashedPassword,
    });
    return user;
}
