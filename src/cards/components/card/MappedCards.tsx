import { Grid, Typography } from '@mui/material';
import React from 'react';
import { ICard } from '../../models/CardModel';
import CardComponent from './CardComponent';

interface Props {
    cards: ICard[];
}

const MappedCards: React.FC<Props> = ({ cards }) => {
    if (cards && cards.length > 0) {
        return (

            <Grid container spacing={2}>
                {cards.map((card, index) => <Grid item xs={12} md={4} key={`${index}-card`}><CardComponent card={card} /></Grid>)}
            </Grid>
        ) as React.ReactElement<any, any> | null;
    }
    if (cards && !cards.length) {
        return (<Typography>It seems there are no cards to be displayed</Typography>) as React.ReactElement<any, any> | null;
    } else {
        return (<Typography>
            Error occured
        </Typography>);
    }
};

export default MappedCards;