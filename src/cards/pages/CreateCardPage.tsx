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
        "title(*)",
        "subtitle(*)",
        "description(*)",
        "phone(*)",
        "website(*)",
        "state",
        "country(*)",
        "city(*)",
        "street(*)",
        "house number(*)",
        "zip",
        "image address(*)",
        "image description(*)",
      ]}
      title="Create a card"
      formActions={formActions}
    />
  );
};

export default memo(CreateCardPage);
