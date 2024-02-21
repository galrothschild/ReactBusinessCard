import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginData, signupData } from "../../users/models/models";
import { initialLogin, initialSignup } from "./initialForms";
interface formsState {
  loginData: loginData;
  loginErrors: loginData;
  signupData: signupData;
  signupErrors: signupData;
  formError: string;
}
const initialState: formsState = {
  loginData: initialLogin,
  loginErrors: initialLogin,
  signupData: initialSignup,
  signupErrors: initialSignup,
  formError: "",
};
const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormError: (state, action: PayloadAction<string>) => {
      state.formError = action.payload;
    },
    setLogin: (
      state,
      action: PayloadAction<{ name: keyof loginData; value: string }>
    ) => {
      const { name, value } = action.payload;
      state.loginData[name] = value;
    },
    setLoginErrors: (
      state,
      action: PayloadAction<{ name: keyof loginData; value: string }>
    ) => {
      const { name, value } = action.payload;
      state.loginErrors[name] = value;
    },
    setSignup: (
      state,
      action: PayloadAction<{ name: keyof loginData; value: string }>
    ) => {
      const { name, value } = action.payload;
      state.signupData[name] = value;
    },
    setSignupErrors: (
      state,
      action: PayloadAction<{ name: keyof loginData; value: string }>
    ) => {
      const { name, value } = action.payload;
      state.signupErrors[name] = value;
    },
  },
});

export const {
  setLogin,
  setLoginErrors,
  setSignup,
  setSignupErrors,
  setFormError,
} = formDataSlice.actions;
export default formDataSlice.reducer;
