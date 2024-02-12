import { useSelector } from "react-redux";
import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { useUser } from "../utils/useUser";
import { RootState } from "../../redux/store";
import { setSignup, setSignupErrors } from "../../redux/forms/formDataSlice";
import signupSchema from "../models/signupSchema";

const SignupPage = () => {
  const { handleLogin } = useUser();
  const initialForm = useSelector(
    (state: RootState) => state.formData.signupData
  );
  const formActions = useForm(
    initialForm,
    "signup",
    signupSchema,
    handleLogin,
    setSignup,
    setSignupErrors
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
        "image url",
        "image alt",
        "state",
        "country",
        "city",
        "street",
        "house number",
        "zip",
        "business account(Bool)",
        "password(Pass)",
        "password confirmation(Pass)",
      ]}
      title="Sign Up"
      formActions={formActions}
    />
  );
};

export default SignupPage;
