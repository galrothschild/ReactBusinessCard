import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { setSignup, setSignupErrors } from "../../redux/forms/formDataSlice";
import signupSchema from "../models/signupSchema";
import { memo } from "react";
import { useUpdateUser } from "../utils/useUpdateUser";

const EditUserPage = () => {
	const { initialForm, handleUpdateUser } = useUpdateUser();
	const formActions = useForm(
		initialForm,
		"signup",
		signupSchema,
		handleUpdateUser,
		setSignup,
		setSignupErrors,
	);
	return (
		<Form
			colNum={2}
			inputs={[
				"first name(*)",
				"middle name",
				"last name(*)",
				"phone(*)",
				"image url(*)",
				"image alt(*)",
				"state",
				"country(*)",
				"city(*)",
				"street(*)",
				"house number(*)",
				"zip(*)",
				"business account(Bool)",
			]}
			title="Update User"
			formActions={formActions}
		/>
	);
};

export default memo(EditUserPage);
