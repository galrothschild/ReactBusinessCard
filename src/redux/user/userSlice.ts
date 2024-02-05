import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {},
    users: []
};

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
});

export default usersSlice.reducer;