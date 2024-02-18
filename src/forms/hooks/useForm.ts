import { useCallback } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { loginData } from "../../users/models/IUser.model";
import Joi, { ObjectSchema } from "joi";
import { setFormError } from "../../redux/forms/formDataSlice";

export const useForm = (
  initialForm: loginData,
  formName: "login" | "signup",
  schema: ObjectSchema,
  handleSubmit: Function,
  setData: ActionCreatorWithPayload<any>,
  setError: ActionCreatorWithPayload<any>
) => {
  const data = useSelector(
    (state: RootState) => state.formData[`${formName}Data`]
  );
  const errors = useSelector(
    (state: RootState) => state.formData[`${formName}Errors`]
  );
  let formError = useSelector((state: RootState) => state.formData.formError);
  setFormError("");
  const dispatch = useDispatch();
  const handleReset = useCallback(() => {
    dispatch(setData(initialForm));
    dispatch(setError({}));
  }, [initialForm, dispatch, setData, setError]);
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
        if (value === data["password"]) return null;
      }
      return error ? error.details[0].message : null;
    },
    [schema, data]
  );

  const onSubmit = useCallback(async () => {
    const error = await handleSubmit(data);
    dispatch(setFormError(error));
  }, [data, handleSubmit, dispatch]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (!Object.keys(initialForm).includes(name))
        throw new Error("Soemthing went wrong...");
      const errorMessage = validateProperty({ name, value });
      dispatch(setError({ name, value: errorMessage }));
      dispatch(setData({ name, value }));
    },
    [dispatch, setData, initialForm, validateProperty, setError]
  );
  return {
    handleReset,
    validateProperty,
    onSubmit,
    handleChange,
    errors,
    formError,
  };
};
