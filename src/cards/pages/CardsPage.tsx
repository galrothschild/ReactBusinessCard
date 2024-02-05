import React, { useEffect } from 'react';

import MappedCards from '../components/card/MappedCards';
import PageHeader from '../../pages/components/PageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import {  setCards, setPending } from '../../redux/cards/cardsSlice';
import { getCards } from '../utils/cardsApiService';
import { ICard } from '../models/CardModel';



const CardsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cards = useSelector((state: RootState) => state.cards.cards);
    const isPending = useSelector((state: RootState) => state.cards.isPending);
    const fetchCardsIfEmpty =async (cards: ICard[]) => {
        if (!cards.length) {
            try{
                dispatch(setPending(true))
                cards = await getCards();
            } catch(error) {
                dispatch(setPending(false))
                console.log(error)
            } finally {
                dispatch(setPending(false))
            }
        }
        dispatch(setCards(cards))
    }
    useEffect(() => { fetchCardsIfEmpty(cards) }, );
    return (
        <>
            <PageHeader title='Cards Page' subtitle='This page displays all cards' />
            <MappedCards cards={cards} isPending={isPending} />
        </>
    );
};

export default CardsPage;