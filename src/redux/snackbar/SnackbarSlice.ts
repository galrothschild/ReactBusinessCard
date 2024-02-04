import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    snackMessage: "",
    snackColor: "success",
    snackVariant: "filled"
};

const snackbar = createSlice({
    name: "snackbar",
    initialState,
    reducers: {}
});

export default snackbar.reducer;