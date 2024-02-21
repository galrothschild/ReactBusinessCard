import { useSelector } from "react-redux";
import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { RootState } from "../../redux/store";
import { setSignup, setSignupErrors } from "../../redux/forms/formDataSlice";
import { memo } from "react";
import { createCardSchema } from "../models/CreateCardModels";
import { createCard } from "../utils/cardsApiService";

const CreateCardPage = () => {
  const initialForm = useSelector(
    (state: RootState) => state.formData.signupData
  );
  const formActions = useForm(
    initialForm,
    "signup",
    createCardSchema,
    createCard,
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

export default memo(CreateCardPage);
