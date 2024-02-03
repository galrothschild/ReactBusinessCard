import React from 'react';
import CardComponent from '../components/card/CardComponent';
import { ICard } from '../models/CardModel';
import { Box, Grid } from '@mui/material';
import MappedCards from '../components/card/MappedCards';
import { cards } from '../components/data/cards';



const CardsPage = () => {
    return (
        <MappedCards cards={cards} />
    );
};

export default CardsPage;