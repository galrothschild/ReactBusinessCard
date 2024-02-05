import { getFromAPI } from '../../users/utils/apiService';
export const getCards = () => {
    return getFromAPI("cards");
};
export const getCardByID = (id: string) => getFromAPI("cards", id);

export const getMyCards = () => getFromAPI("cards", "my-cards");

export const deleteCard = (id: string) => {

};