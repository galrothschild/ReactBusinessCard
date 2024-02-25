import { getFromAPI, postToAPI } from "../../utlis/apiService";
import {
	SignupResponse,
	loginData,
	signupNormalizedData,
} from "../models/models";

export const login = async (user: loginData) => {
	try {
		const res = await postToAPI("users/login", user);
		if (typeof res === "string") return false;
		return res?.data;
	} catch {
		return false;
	}
};

export const signup = async (
	user: signupNormalizedData,
): Promise<boolean | SignupResponse> => {
	try {
		const res = await postToAPI("users", user);
		if (typeof res === "string") return false;
		return res?.data as SignupResponse;
	} catch (error) {
		return false;
	}
};
export const getUserByID = async (id: string, token: string) => {
	try {
		const res = await getFromAPI("users", id, token);
		return res;
	} catch (error) {
		return error;
	}
};