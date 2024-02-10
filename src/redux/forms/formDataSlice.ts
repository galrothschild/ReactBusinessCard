import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginInfo } from "../../users/models/IUser.model";

interface formsState {
  loginData: loginInfo;
}

const initialState: formsState = {
  loginData: { email: "", password: "" } as loginInfo,
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setLogin: (
      state,
      action: PayloadAction<{ name: "email" | "password"; value: string }>
    ) => {
      const { name, value } = action.payload;
      state.loginData[name] = value;
    },
  },
});

export const { setLogin } = formDataSlice.actions;
export default formDataSlice.reducer;
