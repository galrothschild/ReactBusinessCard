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
import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { ICard } from "../models/CardModel";

const CreateCardPage = () => {
	const navigate = useNavigate();
	const { triggerSnackbar } = useSnackbar();
	const initialForm = useSelector(
		(state: RootState) => state.formData.createCardData,
	);
	const dispatch = useDispatch();
	const handleCreateCard = useCallback(
		async (data: createCardData) => {
			const token = getToken();
			if (!token) return "something went wrong";
			const normalizedCard = normalizeCard(data);
			try {
				const response = (await createCard(
					normalizedCard,
					token,
				)) as AxiosResponse<ICard>;
				if (response.status === 201) {
					triggerSnackbar("Successfully created card", "success", 3000);
					const { _id: cardID } = response.data;
					const card = await getCardByID(cardID);
					if (card) {
						dispatch(addCard(card));
						navigate(ROUTES.MY_CARDS);
					}
				} else {
					triggerSnackbar("Something went wrong...", "error", 3000);
				}
			} catch (err) {
				if (axios.isAxiosError(err)) {
					if (err.response?.data.includes("duplicate")) {
						const message = `Duplicate ${
							err.response?.data.match(/dup key: { (\w+):/)[1]
						}`;
						triggerSnackbar(message, "error", 3000);
					} else {
						triggerSnackbar("Something went wrong...", "error", 3000);
					}
				} else {
					triggerSnackbar("Something went wrong...", "error", 3000);
				}
			}
		},
		[dispatch, navigate, triggerSnackbar],
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
