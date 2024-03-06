import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../users/models/models";

interface usersState {
	users: IUser[];
	isPending: boolean;
}
const initialState: usersState = {
	users: [],
	isPending: false,
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<IUser[]>) => {
			state.users = action.payload;
		},
		addUserToUsers: (state, action: PayloadAction<IUser>) => {
			state.users.push(action.payload);
		},
		removeUserFromUsers: (state, action: PayloadAction<string>) => {
			state.users = state.users.filter((user) => user._id !== action.payload);
		},
		updateUserInUsers: (state, action: PayloadAction<IUser>) => {
			const index = state.users.findIndex(
				(user) => user._id === action.payload._id,
			);
			state.users[index] = action.payload;
		},
		resetUsers: (state) => {
			state.users = initialState.users;
		},
		setUsersPending: (state, action: PayloadAction<boolean>) => {
			state.isPending = action.payload;
		},
	},
});

export const {
	setUsers,
	addUserToUsers,
	removeUserFromUsers,
	updateUserInUsers,
	resetUsers,
	setUsersPending,
} = usersSlice.actions;
export default usersSlice.reducer;
