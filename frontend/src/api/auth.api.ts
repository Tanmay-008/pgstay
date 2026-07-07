import { axiosAPI } from "@/lib/axios";

export const loginAPI = async (data: any) => {
  const response = await axiosAPI.post("/user/login", data);
  return response.data;
};

export const registerAPI = async (data: any) => {
  const response = await axiosAPI.post("/user/register", data);
  return response.data;
};
