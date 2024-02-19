import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { memo } from "react";
import { ICard } from "../../models/CardModel";
import CardComponent from "./CardComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Props {
  cards: ICard[];
  isPending: boolean;
}

const MappedCards: React.FC<Props> = ({ cards, isPending }) => {
  if (isPending)
    return (
      <Box width="100%" sx={{ display: "grid", placeItems: "center", pt: 3 }}>
        <CircularProgress />
      </Box>
    );
  if (cards && !!cards.length) {
    return (
      <Grid container spacing={2} alignItems="center">
        {cards.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={`${index}-card`}
            sx={{ placeItems: "center", display: "grid" }}
          >
            <CardComponent card={card} />
          </Grid>
        ))}
      </Grid>
    ) as React.ReactElement<any, any> | null;
  }
  if (cards && !cards.length) {
    return (
      <Typography>It seems there are no cards to be displayed</Typography>
    ) as React.ReactElement<any, any> | null;
  } else {
    return <Typography>Error occured</Typography>;
  }
};

export default memo(MappedCards);
