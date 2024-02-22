import { AxiosResponse } from "axios";
import { getFromAPI, patchtoAPI, postToAPI } from "../../utlis/apiService";
import { createCardData, createCardNormalizedData } from "../models/CreateCardModels";
import { ICard } from '../models/CardModel';
import { IUser } from "../../users/models/models";
export const getCards = async () => {
  const cards = (await getFromAPI("cards")) as ICard[];
  return cards
};
export const getCardByID = async (id: string) => {
  const card = (await getFromAPI("cards")) as ICard;
  return card
};

export const getMyCards = () => getFromAPI("cards", "my-cards");

export const deleteCard = (id: string) => { };
export const likeCard = async (cardID: string, token: string) => {
  patchtoAPI("cards", cardID, token);
};

export const createCard = async (data: createCardNormalizedData, token: string) => {
  try {
    const res = await postToAPI("cards", data, token) as AxiosResponse<ICard | IUser>;
    if (typeof res === "string") return false;
    return res?.data
  } catch (error) {
    return false;
  }
};
