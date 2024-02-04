import axios from "axios";

const ApiURL: string = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";

export const getFromAPI = async (api: "users" | "cards", id?: string, token?: "string") => {
    if (token) axios.defaults.headers.common['x-auth-token'] = token;
    const ID = id || "";
    try {
        const response = await axios.get(`${ApiURL}/${api}/${ID}`);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            return Promise.reject(error.message);
        } else {
            return Promise.reject(`Unidentified Error: ${error}`);
        }
    };
};
