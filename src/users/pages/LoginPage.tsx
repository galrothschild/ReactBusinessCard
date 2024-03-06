import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { useUser } from "../utils/useUser";
import loginSchema from "../models/loginSchema";
import { setLogin, setLoginErrors } from "../../redux/forms/formDataSlice";
import { memo } from "react";
import { initialLogin } from "../../redux/forms/initialForms";
import { useDispatch } from "react-redux";
import { resetUsers } from "../../redux/users/usersSlice";

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
	const dispatch = useDispatch();
	dispatch(resetUsers());
	return (
		<Form
			colNum={1}
			inputs={["email(*)", "password(Pass*)"]}
			title="Log In"
			formActions={formActions}
		/>
	);
};

export default memo(LoginPage);
