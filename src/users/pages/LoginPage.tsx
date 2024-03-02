import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { useUser } from "../utils/useUser";
import loginSchema from "../models/loginSchema";
import { setLogin, setLoginErrors } from "../../redux/forms/formDataSlice";
import { memo } from "react";
import { initialLogin } from "../../redux/forms/initialForms";

const LoginPage = () => {
	const { handleLogin } = useUser("login");
	const initialForm = initialLogin;
	const formActions = useForm(
		initialForm,
		"login",
		loginSchema,
		handleLogin,
		setLogin,
		setLoginErrors,
	);
	return (
		<Form
			colNum={1}
			inputs={["email", "password(Pass)"]}
			title="Log In"
			formActions={formActions}
		/>
	);
};

export default memo(LoginPage);
