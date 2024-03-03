import { AxiosResponse } from "axios";
import {
	getFromAPI,
	patchtoAPI,
	postToAPI,
	putToAPI,
} from "../../utlis/apiService";
import { createCardNormalizedData } from "../models/CreateCardModels";
import { ICard } from "../models/CardModel";
import { IUser } from "../../users/models/models";
export const getCards = async () => {
	const cards = (await getFromAPI("cards")) as ICard[];
	return cards;
};
export const getCardByID = async (id: string) => {
	const card = (await getFromAPI("cards", id)) as ICard;
	return card;
};

export const getMyCards = () => getFromAPI("cards", "my-cards");

export const deleteCard = (id: string) => {};
export const likeCard = async (cardID: string, token: string) => {
	patchtoAPI("cards", cardID, token);
};

export const createCard = async (
	data: createCardNormalizedData,
	token: string,
) => {
	return postToAPI("cards", data, token);
};
export const updateCard = async (
	normalizedCard: createCardNormalizedData,
	cardID: string,
	token: string,
) => {
	return putToAPI("cards", cardID, normalizedCard, token);
};
