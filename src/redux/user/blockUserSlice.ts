import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addToNow } from "./util/addToDate";

interface blockUserState {
	failedAttempts: {
		email: string;
		failedAttempts: number;
		isBlocked: boolean;
		blockExpiration: number;
	}[];
}

const initialState: blockUserState = {
	failedAttempts: [],
};

const blockedUserSlice = createSlice({
	name: "blockUser",
	initialState,
	reducers: {
		setFailedAttempts: (state, action: PayloadAction<string>) => {
			const user = state.failedAttempts.find(
				(user) => user.email === action.payload,
			);
			if (user) {
				user.failedAttempts++;
				if (user.failedAttempts >= 3) {
					user.isBlocked = true;
					user.blockExpiration = addToNow(24, "hours");
				}
			} else
				state.failedAttempts.push({
					email: action.payload,
					failedAttempts: 1,
					isBlocked: false,
					blockExpiration: 0,
				});
		},
		resetFailedAttempts: (state, action: PayloadAction<string>) => {
			state.failedAttempts = state.failedAttempts.filter(
				(user) => user.email !== action.payload,
			);
		},
	},
});

export const { resetFailedAttempts, setFailedAttempts } =
	blockedUserSlice.actions;
export default blockedUserSlice.reducer;
