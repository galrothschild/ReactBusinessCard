import { useCallback, useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import Joi, { ObjectSchema } from "joi";
import { resetForm, setFormError } from "../../redux/forms/formDataSlice";
import { formDataType } from "../models/formDataTypes";

export const useForm = (
	initialForm: formDataType,
	formName: "login" | "signup" | "createCard",
	schema: ObjectSchema,
	handleSubmit: Function,
	setData: ActionCreatorWithPayload<any>,
	setError: ActionCreatorWithPayload<any>,
) => {
	const data = useSelector(
		(state: RootState) => state.formData[`${formName}Data`],
	);
	const errors = useSelector(
		(state: RootState) => state.formData[`${formName}Errors`],
	);
	const formError = useSelector((state: RootState) => state.formData.formError);
	const dispatch = useDispatch();
	dispatch(setFormError(""));
	const handleReset = useCallback(() => {
		dispatch(resetForm(formName));
	}, [formName, dispatch]);
	type propertyType = {
		name: string;
		value: string;
		password?: string;
	};
	const validateProperty = useCallback(
		({ name, value }: propertyType) => {
			const obj = { [name]: value };
			const propertySchema = Joi.object({
				[name]: schema.extract(name),
			});

			const { error } = propertySchema.validate(obj);
			if (name === "password confirmation") {
				if ("password" in data && value === data.password) return null;
			}
			return error ? error.details[0].message : null;
		},
		[schema, data],
	);

	const onSubmit = useCallback(() => {
		handleSubmit(data).then((error: string | null) => {
			if (error) dispatch(setFormError(error));
		});
	}, [data, handleSubmit, dispatch]);

	const handleInputChange = useCallback(
		(currentTarget: HTMLInputElement) => {
			const { name, value } = currentTarget;
			if (!Object.keys(initialForm).includes(name))
				throw new Error("Soemthing went wrong...");
			const errorMessage = validateProperty({ name, value });
			dispatch(setError({ name, value: errorMessage }));
			dispatch(setData({ name, value }));
		},
		[dispatch, setData, initialForm, validateProperty, setError],
	);
	const handleCheckboxChange = (currentTarget: HTMLSpanElement) => {
		const { name } = currentTarget.querySelector("input") as HTMLInputElement;
		if (!Object.keys(initialForm).includes(name)) {
			throw new Error("Soemthing went wrong...");
		}
		dispatch(setData({ name, value: !data[name as keyof typeof data] }));
	};
	// Resetting form error
	useEffect(() => {
		dispatch(setFormError(""));
	});
	return {
		handleReset,
		validateProperty,
		onSubmit,
		handleInputChange,
		handleCheckboxChange,
		errors,
		formError,
		data,
	};
};
