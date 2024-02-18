import { postToAPI } from "../../utlis/apiService";
import { loginData } from "../models/IUser.model";

export const login = async (user: loginData) => {
  try {
    const res = await postToAPI("users/login", user);
    if (typeof res === "string") return false;
    return res?.data;
  } catch {
    return false;
  }
};
