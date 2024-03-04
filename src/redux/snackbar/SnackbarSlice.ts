import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface snackState {
	isOpen: boolean;
	snackMessage: string;
	snackColor: "success" | "error";
}
const initialState: snackState = {
	isOpen: false,
	snackMessage: "",
	snackColor: "success",
};

const snackbar = createSlice({
	name: "snackbar",
	initialState,
	reducers: {
		triggerSnack: (
			state,
			action: PayloadAction<{ message: string; color: "success" | "error" }>,
		) => {
			const { message, color } = action.payload;
			state.snackColor = color;
			state.snackMessage = message;
			state.isOpen = true;
		},
		closeSnack: (state) => {
			state.isOpen = false;
		},
	},
});

export const { triggerSnack, closeSnack } = snackbar.actions;
export default snackbar.reducer;
