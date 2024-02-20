import { useSelector } from "react-redux";
import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { useUser } from "../utils/useUser";
import { RootState } from "../../redux/store";
import { setSignup, setSignupErrors } from "../../redux/forms/formDataSlice";
import signupSchema from "../models/signupSchema";
import { memo } from "react";

const SignupPage = () => {
  const { handleSignup } = useUser("signup");
  const initialForm = useSelector(
    (state: RootState) => state.formData.signupData
  );
  const formActions = useForm(
    initialForm,
    "signup",
    signupSchema,
    handleSignup,
    setSignup,
    setSignupErrors
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
