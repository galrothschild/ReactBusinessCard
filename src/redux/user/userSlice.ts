import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../users/models/models";

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
			state.sessionExpiration = new Date().getTime() + 1000 * 60 * 30;
			state.isLoggedIn = action.payload;
		},
		logout: () => {
			return initialState;
		},
	},
});

export const { setUser, setToken, setLogged, logout } = userSlice.actions;
export default userSlice.reducer;
