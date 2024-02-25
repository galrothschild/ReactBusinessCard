import React from "react";
import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { useParams } from "react-router";
import { getCardByID } from "../utils/cardsApiService";
import { ICard } from "../models/CardModel";
import { denormalizeCard } from "../utils/normalizeCard";
import { createCardSchema } from "../models/CreateCardModels";
import {
	setCreateCard,
	setCreateCardErrors,
} from "../../redux/forms/formDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Typography } from "@mui/material";

const EditCardPage = () => {
	const cards = useSelector((state: RootState) => state.cards.cards);
	const dispatch = useDispatch();
	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		console.log(formData);
	};
	let { id } = useParams();
	if (!id) id = cards[0]._id;
	const card = cards.find((card) => card._id === id) as ICard;
	const initialEditCard = denormalizeCard(card);
	const formActions = useForm(
		initialEditCard,
		"createCard",
		createCardSchema,
		handleSubmit,
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

export default EditCardPage;
