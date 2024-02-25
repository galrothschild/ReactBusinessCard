import { useDispatch, useSelector } from "react-redux";
import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { RootState } from "../../redux/store";
import {
	setCreateCard,
	setCreateCardErrors,
} from "../../redux/forms/formDataSlice";
import { memo, useCallback } from "react";
import { createCardData, createCardSchema } from "../models/CreateCardModels";
import { createCard, getCardByID } from "../utils/cardsApiService";
import { normalizeCard } from "../utils/normalizeCard";
import { addCard } from "../../redux/cards/cardsSlice";
import { getToken } from "../../users/utils/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/helpers/ROUTES";
import useSnackbar from "../../snackbar/hooks/useSnackbar";

const CreateCardPage = () => {
	const navigate = useNavigate();
	const { envokeSnackbar } = useSnackbar();
	const initialForm = useSelector(
		(state: RootState) => state.formData.createCardData,
	);
	const dispatch = useDispatch();
	const handleCreateCard = useCallback(
		async (data: createCardData) => {
			const token = getToken();
			if (!token) return "something went wrong";
			const normalizedCard = normalizeCard(data);
			const response = await createCard(normalizedCard, token);
			if (response) {
				envokeSnackbar("Successfully created card", "success", 3000);
				const { _id: cardID } = response;
				const card = await getCardByID(cardID);
				if (card) {
					dispatch(addCard(card));
					navigate(ROUTES.MY_CARDS);
				}
			} else {
				envokeSnackbar("Something went wrong...", "error", 3000);
			}
		},
		[dispatch, navigate, envokeSnackbar],
	);
	const formActions = useForm(
		initialForm,
		"createCard",
		createCardSchema,
		handleCreateCard,
		setCreateCard,
		setCreateCardErrors,
	);
	return (
		<Form
			colNum={2}
			inputs={[
				"title(*)",
				"subtitle(*)",
				"description(*)",
				"phone(*)",
				"email(*)",
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
