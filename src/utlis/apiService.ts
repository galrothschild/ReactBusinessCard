import { loginData } from "./../users/models/IUser.model";
import axios from "axios";
import { ICard } from "../cards/models/CardModel";
import { IUser, SignupResponse } from "../users/models/IUser.model";
import { AxiosResponse } from "axios";

const ApiURL: string = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";

const instance = axios.create();

instance.interceptors.response.use(undefined, (error) => {
  return Promise.reject(error);
});

export const getFromAPI = async (
  api: "users" | "cards",
  id?: string,
  token?: "string"
) => {
  if (token) axios.defaults.headers.common["x-auth-token"] = token;
  const ID = id || "";
  try {
    const response = await instance.get(`${ApiURL}/${api}/${ID}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject(`Unidentified Error: ${error}`);
    }
  }
};
type responseType = string | SignupResponse | ICard;
export const postToAPI = async (
  api: "users/login" | "users" | "cards",
  data: loginData | IUser | ICard,
  token?: "string"
) => {
  if (token) axios.defaults.headers.common["x-auth-token"] = token;
  try {
    const response: AxiosResponse<responseType> = await instance.post(
      `${ApiURL}/${api}`,
      data
    );
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return Promise.reject(`Unidentified Error: ${error}`);
    }
  }
};
