import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { ICard } from "../models/CardModel";
import { setCards, setPending } from "../../redux/cards/cardsSlice";
import { getCards } from "./cardsApiService";
import { useEffect } from "react";
import useSnackbar from "../../snackbar/hooks/useSnackbar";
const useCards = () => {
	const { envokeSnackbar } = useSnackbar();
	const dispatch = useDispatch<AppDispatch>();
	const cards = useSelector((state: RootState) => state.cards.cards);
	const isPending = useSelector((state: RootState) => state.cards.isPending);
	let error: unknown;
	let allCards: ICard[];
	const fetchCardsIfEmpty = async (cards: ICard[]) => {
		if (!cards.length) {
			try {
				dispatch(setPending(true));
				cards = await getCards();
				envokeSnackbar("Success!", "success", 5000);
			} catch (err) {
				dispatch(setPending(false));
				error = err;
				envokeSnackbar("Something went wrong...", "error", 5000);
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
