import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICard } from "../../cards/models/CardModel";

interface cardsState {
	cards: ICard[];
	isPending: boolean;
}

const initialState: cardsState = { cards: [], isPending: false };

const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		setCards: (state, action: PayloadAction<ICard[]>) => {
			state.cards = action.payload;
		},
		addCard: (state, action: PayloadAction<ICard>) => {
			state.cards = [...state.cards, action.payload];
		},
		removeCard: (state, action: PayloadAction<string>) => {
			state.cards.splice(
				state.cards.findIndex((card) => card._id === action.payload),
				1,
			);
		},
		setPending: (state, action: PayloadAction<boolean>) => {
			state.isPending = action.payload;
		},
		setLikeCard: (
			state,
			action: PayloadAction<{ card: ICard; userID: string }>,
		) => {
			const { card, userID } = action.payload;
			const currentCard = state.cards.find(
				(selectedCard) => selectedCard._id === card._id,
			);
			if (currentCard) {
				if (currentCard?.likes.includes(userID)) {
					const likes = currentCard?.likes;
					currentCard.likes.splice(likes.indexOf(userID), 1);
				} else {
					currentCard.likes.push(userID);
				}
			}
		},
	},
});

export const { setCards, setPending, setLikeCard, addCard, removeCard } =
	cardsSlice.actions;
export default cardsSlice.reducer;
