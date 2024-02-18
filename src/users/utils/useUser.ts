import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { login } from "./userApiService";
import { getUser, setTokenInLocalStorage } from "./localStorageService";
import {
  logout,
  setLogged,
  setToken,
  setUser,
} from "../../redux/user/userSlice";
import { IUser } from "../models/IUser.model";

export const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const data = useSelector((state: RootState) => state.formData.loginData);
  const handleLogin = async () => {
    const token = await login(data);
    if (!token) return "Incorrect Username or password";
    if (typeof token === "string") {
      setTokenInLocalStorage(token);
      dispatch(setToken(token));
      const user = getUser() as IUser;
      dispatch(setUser(user));
      dispatch(setLogged(true));
      navigate("/cards");
    }
    return Promise.resolve();
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSignup = () => {};
  return { handleLogin, handleLogout, handleSignup };
};
