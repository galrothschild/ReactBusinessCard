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
	token?: string,
) => {
	if (token) instance.defaults.headers.common["x-auth-token"] = token;
	const ID = id || "";
	try {
		const response: AxiosResponse<ICard | IUser | ICard[] | IUser[]> =
			await instance.get(`${ApiURL}/${api}/${ID}`);
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			return Promise.reject(error.message);
		}
		return Promise.reject(`Unidentified Error: ${error}`);
	}
};
type responseType = string | SignupResponse | ICard;
export const postToAPI = async (
	api: "users/login" | "users" | "cards",
	data: formDataType,
	token?: string,
) => {
	if (token) instance.defaults.headers.common["x-auth-token"] = token;
	try {
		const response: AxiosResponse<responseType> = await instance.post(
			`${ApiURL}/${api}`,
			data,
		);

		return response;
	} catch (error) {
		if (error instanceof Error) {
			return Promise.reject(error.message);
		}
		return Promise.reject(`Unidentified Error: ${error}`);
	}
};

export const patchtoAPI = async (
	api: "cards" | "users",
	id: string,
	token?: string,
	body?: { bizNumber: number },
) => {
	if (token) instance.defaults.headers.common["x-auth-token"] = token;
	let response: AxiosResponse;
	try {
		if (body) {
			response = await instance.patch(`${ApiURL}/${api}/${id}`, body);
		} else {
			response = await instance.patch(`${ApiURL}/${api}/${id}`);
		}
		return response;
	} catch (error) {
		if (error instanceof Error) {
			return Promise.reject(error.message);
		}
		return Promise.reject(`Unidentified Error: ${error}`);
	}
};

export const deleteFromAPI = async (
	api: "cards" | "users",
	id: string,
	token: string,
) => {
	instance.defaults.headers.common["x-auth-token"] = token;
	let response: AxiosResponse;
	try {
		response = await instance.delete(`${ApiURL}/${api}/${id}`);
		return response;
	} catch (error) {
		if (error instanceof Error) {
			return Promise.reject(error.message);
		}
		return Promise.reject(`Unidentified Error: ${error}`);
	}
};
