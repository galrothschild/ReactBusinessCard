import React, { useEffect } from 'react';

import MappedCards from '../components/card/MappedCards';
import PageHeader from '../../pages/components/PageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchCards } from '../../redux/cards/cardsSlice';



const CardsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cards = useSelector((state: RootState) => state.cards.cards);
    const isPending = useSelector((state: RootState) => state.cards.isPending);
    useEffect(() => { dispatch(fetchCards()); }, [dispatch]);
    return (
        <>
            <PageHeader title='Cards Page' subtitle='This page displays all cards' />
            <MappedCards cards={cards} isPending={isPending} />
        </>
    );
};

export default CardsPage;