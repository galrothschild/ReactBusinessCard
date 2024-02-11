import { postToAPI } from "../../utlis/apiService";
import { loginData } from "../models/IUser.model";

export const login = async (user: loginData) => {
  try {
    const res = await postToAPI("users/login", user);
    console.log(res);
    return res?.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
