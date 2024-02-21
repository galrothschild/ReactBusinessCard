import { getFromAPI, patchtoAPI, postToAPI } from "../../utlis/apiService";
import { createCardData } from "../models/CreateCardModels";
export const getCards = () => {
  return getFromAPI("cards");
};
export const getCardByID = (id: string) => getFromAPI("cards", id);

export const getMyCards = () => getFromAPI("cards", "my-cards");

export const deleteCard = (id: string) => { };
export const likeCard = async (cardID: string, token: string) => {
  patchtoAPI("cards", cardID, token);
};

export const createCard = (data: createCardData, token: string) => {
  postToAPI("cards", data, token)
};
