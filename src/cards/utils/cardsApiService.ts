import axios from "axios";
import { getFromAPI } from "../../utlis/apiService";
export const getCards = () => {
  return getFromAPI("cards");
};
export const getCardByID = (id: string) => getFromAPI("cards", id);

export const getMyCards = () => getFromAPI("cards", "my-cards");

export const deleteCard = (id: string) => {};
export const likeCard = async (id: string) => {};
