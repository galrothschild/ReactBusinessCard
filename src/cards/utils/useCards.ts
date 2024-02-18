import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { ICard } from "../models/CardModel";
import { setCards, setPending } from "../../redux/cards/cardsSlice";
import { getCards } from "./cardsApiService";
import { useEffect } from "react";
const useCards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: RootState) => state.cards.cards);
  const isPending = useSelector((state: RootState) => state.cards.isPending);
  let error;
  const fetchCardsIfEmpty = async (cards: ICard[]) => {
    if (!cards.length) {
      try {
        dispatch(setPending(true));
        cards = await getCards();
      } catch (err) {
        dispatch(setPending(false));
        error = err;
      } finally {
        dispatch(setPending(false));
      }
    }
    dispatch(setCards(cards));
  };
  useEffect(() => {
    fetchCardsIfEmpty(cards);
  });

  return { cards, isPending, error };
};
export default useCards;
