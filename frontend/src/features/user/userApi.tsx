import { axiosAPI } from "@/lib/axios";

export const loginUser = async (data: any) => axiosAPI.post("/user/login", data);
