import { createSlice } from "@reduxjs/toolkit";

interface themeType {
	isDark: boolean;
}
const initialState: themeType = {
	isDark: Boolean(window.matchMedia("(prefers-color-scheme: dark)").matches),
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.isDark = !state.isDark;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
