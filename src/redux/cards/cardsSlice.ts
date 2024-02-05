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
            state.cards = action.payload
        },
        setPending: (state, action: PayloadAction<boolean>) => {
            state.isPending = action.payload
        }
    },
}
);

export const { setCards, setPending } = cardsSlice.actions
export default cardsSlice.reducer;