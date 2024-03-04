import { jwtDecode } from "jwt-decode";
const TOKEN = "token";

export const setTokenInLocalStorage = (encodedToken: string) =>
	localStorage.setItem(TOKEN, encodedToken);

export const getUser = () => {
	try {
		const token = localStorage.getItem(TOKEN);
		if (token) return jwtDecode(token);
		throw new Error("No Token Found");
	} catch (error) {
		return null;
	}
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);
