import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginData, signupData } from "../../users/models/models";
import { initialCreateCard, initialLogin, initialSignup } from "./initialForms";
import { createCardData } from "../../cards/models/CreateCardModels";
import { formDataType } from "../../forms/models/formDataTypes";
interface formsState {
	loginData: loginData;
	loginErrors: loginData;
	signupData: signupData;
	signupErrors: signupData;
	createCardData: createCardData;
	createCardErrors: createCardData;

	formError: string;
}
const initialState: formsState = {
	loginData: initialLogin,
	loginErrors: initialLogin,
	signupData: initialSignup,
	signupErrors: initialSignup,
	createCardData: initialCreateCard,
	createCardErrors: initialCreateCard,
	formError: "",
};
const formDataSlice = createSlice({
	name: "formData",
	initialState,
	reducers: {
		setFormError: (state, action: PayloadAction<string>) => {
			state.formError = action.payload;
		},
		resetForm: (state, action: PayloadAction<string>) => {
			switch (action.payload) {
				case "login":
					state.loginData = initialLogin;
					state.loginErrors = initialLogin;
					break;
				case "signup":
					state.signupData = initialSignup;
					state.signupErrors = initialSignup;
					break;
				case "createCard":
					state.createCardData = initialCreateCard;
					state.createCardErrors = initialCreateCard;
					break;
				default:
					break;
			}
		},
		setFormData: (
			state,
			action: PayloadAction<{ formName: string; formData: formDataType }>,
		) => {
			const { formName, formData } = action.payload;
			switch (formName) {
				case "login":
					state.loginData = formData as loginData;
					break;
				case "signup":
					state.signupData = formData as signupData;
					state.signupData["business account"] = JSON.parse(
						state.signupData["business account"] as string,
					) as boolean;
					break;
				case "createCard":
					state.createCardData = formData as createCardData;
					break;
				default:
					break;
			}
		},
		setLogin: (
			state,
			action: PayloadAction<{ name: keyof loginData; value: string }>,
		) => {
			const { name, value } = action.payload;
			state.loginData[name] = value;
		},
		setLoginErrors: (
			state,
			action: PayloadAction<{ name: keyof loginData; value: string }>,
		) => {
			const { name, value } = action.payload;
			state.loginErrors[name] = value;
		},
		setSignup: (
			state,
			action: PayloadAction<{ name: keyof signupData; value: string }>,
		) => {
			const { name, value } = action.payload;
			state.signupData[name] = value;
		},
		setSignupErrors: (
			state,
			action: PayloadAction<{ name: keyof signupData; value: string }>,
		) => {
			const { name, value } = action.payload;
			state.signupErrors[name] = value;
		},
		setCreateCard: (
			state,
			action: PayloadAction<{ name: keyof createCardData; value: string }>,
		) => {
			const { name, value } = action.payload;
			state.createCardData[name] = value;
		},
		setCreateCardErrors: (
			state,
			action: PayloadAction<{ name: keyof createCardData; value: string }>,
		) => {
			const { name, value } = action.payload;
			state.createCardErrors[name] = value;
		},
		resetFormState: () => {
			return initialState;
		},
	},
});

export const {
	setLogin,
	setLoginErrors,
	setSignup,
	setSignupErrors,
	setCreateCard,
	setCreateCardErrors,
	setFormError,
	resetForm,
	setFormData,
	resetFormState,
} = formDataSlice.actions;
export default formDataSlice.reducer;
