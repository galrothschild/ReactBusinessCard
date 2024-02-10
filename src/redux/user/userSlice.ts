import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../users/models/IUser.model";

interface userState {
  user: IUser;
  token: string;
  isLoggedIn: boolean;
}

const initialState: userState = {
  user: {} as IUser,
  token: "",
  isLoggedIn: false,
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
      state.isLoggedIn = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, setToken, setLogged, logout } = userSlice.actions;
export default userSlice.reducer;
