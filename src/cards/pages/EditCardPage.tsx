import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { useParams } from "react-router";
import { updateCard } from "../utils/cardsApiService";
import { ICard } from "../models/CardModel";
import { denormalizeCard, normalizeCard } from "../utils/normalizeCard";
import { createCardData, createCardSchema } from "../models/CreateCardModels";
import {
	setCreateCard,
	setCreateCardErrors,
} from "../../redux/forms/formDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import axios, { AxiosResponse } from "axios";
import useSnackbar from "../../snackbar/hooks/useSnackbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setUpdatedCard } from "../../redux/cards/cardsSlice";

const EditCardPage = () => {
	const { envokeSnackbar, somethingWentWrong } = useSnackbar();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cards = useSelector((state: RootState) => state.cards.cards);
	const token = useSelector((state: RootState) => state.user.token);
	let { id } = useParams();
	const handleUpdateCard = async (data: createCardData) => {
		const normalizedCard = normalizeCard(data);
		if (!id) return Promise.reject("something went wrong...");
		try {
			const response = (await updateCard(
				normalizedCard,
				id,
				token,
			)) as AxiosResponse<ICard>;
			if (response.status === 200) {
				envokeSnackbar("Successfully updated card", "success", 3000);
				dispatch(setUpdatedCard(response.data));
				navigate(-1);
			} else {
				somethingWentWrong();
			}
		} catch (err) {
			if (axios.isAxiosError(err)) {
				if (err.response?.data.includes("duplicate")) {
					const message = `Duplicate ${
						err.response?.data.match(/dup key: { (\w+):/)[1]
					}`;
					envokeSnackbar(message, "error", 3000);
				} else {
					somethingWentWrong();
				}
			} else {
				somethingWentWrong();
			}
		}
	};
	if (!id) id = cards[0]._id;
	const card = cards.find((card) => card._id === id) as ICard;
	const initialEditCard = denormalizeCard(card);
	if (initialEditCard.email === "") {
		navigate(-1);
	}
	const formActions = useForm(
		initialEditCard,
		"createCard",
		createCardSchema,
		handleUpdateCard,
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
			title="Update card"
			formActions={formActions}
		/>
	);
};

export default EditCardPage;
