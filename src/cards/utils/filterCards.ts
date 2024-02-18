import { ICard } from "../models/CardModel";

const filterCards = (cards: ICard[], id: string, filter: "owner" | "likes") => {
  switch (filter) {
    case "owner":
      return cards.filter((card) => {
        return card.user_id === id;
      });
    case "likes":
      return cards.filter((card) => {
        return card.likes.includes(id);
      });
  }
};
export default filterCards;
