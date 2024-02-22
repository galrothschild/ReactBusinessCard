import { createCardData } from "../../cards/models/CreateCardModels";
import { loginData, signupData } from "../../users/models/models";

export const initialLogin: loginData = { email: "", password: "" };
export const initialSignup: signupData = {
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
export const initialCreateCard: createCardData = {
  title: "",
  subtitle: "",
  description: "",
  phone: "",
  website: "",
  state: "",
  country: "",
  city: "",
  street: "",
  "house number": "",
  zip: "",
  "image address": "",
  "image description": "",
};
