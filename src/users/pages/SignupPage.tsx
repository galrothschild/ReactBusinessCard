import { useSelector } from "react-redux";
import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { useUser } from "../utils/useUser";
import { RootState } from "../../redux/store";
import loginSchema from "../models/loginSchema";
import { setLogin, setLoginErrors } from "../../redux/forms/formDataSlice";

const SignupPage = () => {
  const { handleLogin } = useUser();
  const initialForm = useSelector(
    (state: RootState) => state.formData.signupData
  );
  const formActions = useForm(
    initialForm,
    "signup",
    loginSchema,
    handleLogin,
    setLogin,
    setLoginErrors
  );
  return (
    <Form
      colNum={2}
      inputs={[
        "first name",
        "middle name",
        "last name",
        "phone",
        "email",
        "password",
        "password confirmation",
        "image url",
        "image alt",
        "state",
        "country",
        "city",
        "street",
        "houseNumber",
        "zip",
        "isBusiness",
      ]}
      title="Sign Up"
      formActions={formActions}
    />
  );
};

export default SignupPage;
