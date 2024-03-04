import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../users/models/models";
import { addToNow } from "./util/addToDate";

interface userState {
	user: IUser;
	token: string;
	isLoggedIn: boolean;
	sessionExpiration: number;
}

const initialState: userState = {
	user: {} as IUser,
	token: "",
	isLoggedIn: false,
	sessionExpiration: 0,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		setLogged: (state, action: PayloadAction<boolean>) => {
			// set session expiration to 30 minutes from now
			state.sessionExpiration = addToNow(30, "minutes");
			state.isLoggedIn = action.payload;
		},
		logout: () => {
			return initialState;
		},
		resetSessionExpiration: (state) => {
			state.sessionExpiration = addToNow(30, "minutes");
		},
	},
});

export const { setUser, setToken, setLogged, logout, resetSessionExpiration } =
	userSlice.actions;
export default userSlice.reducer;
