import { useSelector } from "react-redux";
import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { useUser } from "../utils/useUser";
import { RootState } from "../../redux/store";
import loginSchema from "../models/loginSchema";
import { setLogin, setLoginErrors } from "../../redux/forms/formDataSlice";

const LoginPage = () => {
  const { handleLogin } = useUser();
  const initialForm = useSelector(
    (state: RootState) => state.formData.loginData
  );
  const formActions = useForm(
    initialForm,
    "login",
    loginSchema,
    handleLogin,
    setLogin,
    setLoginErrors
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

export default LoginPage;
