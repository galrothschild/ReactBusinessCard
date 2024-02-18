import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { login, signup } from './userApiService';
import { getUser, setTokenInLocalStorage } from "./localStorageService";
import {
  logout,
  setLogged,
  setToken,
  setUser,
} from "../../redux/user/userSlice";
import { IUser, signupData } from '../models/models';
import normalizeUser from "./normalizeUser";

export const useUser = (useCase: "signup" | "login") => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  switch (useCase) {
    case "signup":
      {

      }
  }
  const data = useSelector((state: RootState) => state.formData[`${useCase}Data`]);
  const handleLogin = async () => {
    const token = await login(data);
    if (!token) return "Incorrect username or password";
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

  const handleSignup = async () => {

    const normalizedUser = normalizeUser(data as signupData)
  };
  return { handleLogin, handleLogout, handleSignup };
};
