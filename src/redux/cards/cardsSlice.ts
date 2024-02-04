import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import { getCards } from "./utils/cardsApiService";
import { store } from "../store";

const initialState = { cards: [], isPending: false };

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.isPending = false;
                state.cards = action.payload;
            })
            .addCase(fetchCards.pending, (state) => {
                state.isPending = true;
            });
    }
});

export const fetchCards = createAsyncThunk(
    'cards/getCards',
    getCards
);
export default cardsSlice.reducer;