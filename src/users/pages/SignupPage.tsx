import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { useUser } from "../utils/useUser";
import { setSignup, setSignupErrors } from "../../redux/forms/formDataSlice";
import signupSchema from "../models/signupSchema";
import { memo } from "react";
import { initialSignup } from "../../redux/forms/initialForms";

const SignupPage = () => {
	const { handleSignup } = useUser("signup");
	const initialForm = initialSignup;
	const formActions = useForm(
		initialForm,
		"signup",
		signupSchema,
		handleSignup,
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
				"email(*)",
				"image url",
				"image alt",
				"state",
				"country(*)",
				"city(*)",
				"street(*)",
				"house number(*)",
				"zip(*)",
				"password(Pass*)",
				"password confirmation(Pass*)",
				"business account(Bool)",
			]}
			title="Sign Up"
			formActions={formActions}
		/>
	);
};

export default memo(SignupPage);
