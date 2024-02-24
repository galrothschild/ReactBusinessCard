import { useDispatch, useSelector } from "react-redux";
import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { RootState } from "../../redux/store";
import { setCreateCard, setCreateCardErrors } from "../../redux/forms/formDataSlice";
import { memo, useCallback } from "react";
import { createCardData, createCardSchema } from "../models/CreateCardModels";
import { createCard, getCardByID } from "../utils/cardsApiService";
import { normalizeCard } from "../utils/normalizeCard";
import { addCard } from "../../redux/cards/cardsSlice";
import { getToken } from "../../users/utils/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/helpers/ROUTES";

const CreateCardPage = () => {
  const navigate = useNavigate()
  const initialForm = useSelector(
    (state: RootState) => state.formData.createCardData
  );
  const {email} = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const handleCreateCard = useCallback(
    async (data: createCardData) => {
      const token = getToken()
      if (!token) return "something went wrong"
      const normalizedCard = normalizeCard(data,email);
      const response = await createCard(normalizedCard, token);
      if (response) {
        const { _id: cardID } = response;
        const card = await getCardByID(cardID);
        if (card) {
          dispatch(addCard(card));
          navigate(ROUTES.MY_CARDS)
        }
      }
    },
    [dispatch, email, navigate]
  );
  const formActions = useForm(
    initialForm,
    "createCard",
    createCardSchema,
    handleCreateCard,
    setCreateCard,
    setCreateCardErrors
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
