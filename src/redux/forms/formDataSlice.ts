import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginData, signupData } from "../../users/models/IUser.model";

interface formsState {
  loginData: loginData;
  loginErrors: loginData;
  signupData: signupData;
  signupErrors: signupData;
}

const initialLogin = { email: "", password: "" };
const initialSignup: signupData = {
  "first name": "",
  "middle name": "",
  "last name": "",
  phone: "",
  email: "",
  password: "",
  "password confirmation": "",
  "image url": "",
  "image alt": "",
  state: "",
  country: "",
  city: "",
  street: "",
  "house number": "",
  zip: "",
  "business account": false,
};
const initialState: formsState = {
  loginData: initialLogin,
  loginErrors: initialLogin,
  signupData: initialSignup,
  signupErrors: initialSignup,
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
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
      state.loginData[name] = value;
    },
    setSignupErrors: (
      state,
      action: PayloadAction<{ name: keyof loginData; value: string }>
    ) => {
      const { name, value } = action.payload;
      state.loginErrors[name] = value;
    },
  },
});

export const { setLogin, setLoginErrors, setSignup, setSignupErrors } = formDataSlice.actions;
export default formDataSlice.reducer;
