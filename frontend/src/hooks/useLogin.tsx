import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/features/user/userApi";
import { addUserInfo } from "@/features/user/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      const res = await loginUser(data);
      dispatch(addUserInfo(res.data));
      navigate("/");
    } catch (err: any) {
      console.error("Login failed", err);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
