import {
	deleteFromAPI,
	getFromAPI,
	patchToAPI,
	postToAPI,
	putToAPI,
} from "../../utlis/apiService";
import {
	SignupResponse,
	loginData,
	signupNormalizedData,
	updateUserNormalizedData,
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

export const updateUser = async (
	user: updateUserNormalizedData,
	id: string,
	token: string,
) => {
	try {
		const res = await putToAPI("users", id, user, token);
		return res;
	} catch (error) {
		return error;
	}
};

export const patchUserBusinessStatus = async (id: string, token: string) => {
	return patchToAPI("users", id, token);
};

export const deleteUser = async (id: string, token: string) => {
	return deleteFromAPI("users", id, token);
};

export const getUsers = async (token: string) => {
	try {
		const res = await getFromAPI("users", undefined, token);
		return res;
	} catch (error) {
		return error;
	}
};
