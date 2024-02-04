import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: window.matchMedia("(prefers-color-scheme: dark)")
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {}
});

export default themeSlice.reducer;