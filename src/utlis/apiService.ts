import axios from "axios";
import { ICard } from "../cards/models/CardModel";
import { IUser, SignupResponse } from "../users/models/models";
import { AxiosResponse } from "axios";
import { formDataType } from "../forms/models/formDataTypes";

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
    const response: AxiosResponse<ICard | IUser | ICard[] | IUser[]> =
      await instance.get(`${ApiURL}/${api}/${ID}`);
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
  data: formDataType,
  token?: string
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
      return Promise.reject(error.message);
    } else {
      return Promise.reject(`Unidentified Error: ${error}`);
    }
  }
};

export const patchtoAPI = async (
  api: "cards" | "users",
  id: string,
  token?: string,
  body?: { bizNumber: number }
) => {
  if (token) instance.defaults.headers.common["x-auth-token"] = token;
  let response;
  try {
    !!body
      ? (response = await instance.patch(`${ApiURL}/${api}/${id}`, body))
      : (response = await instance.patch(`${ApiURL}/${api}/${id}`));
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject(`Unidentified Error: ${error}`);
    }
  }
};
