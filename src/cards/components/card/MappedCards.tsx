import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { memo } from "react";
import { ICard } from "../../models/CardModel";
import CardComponent from "./CardComponent";
import { useSearchParams } from "react-router-dom";

interface Props {
	cards: ICard[];
	isPending: boolean;
}

const MappedCards: React.FC<Props> = ({ cards, isPending }) => {
	const [searchParams] = useSearchParams();
	const filter = searchParams.get("q");
	if (filter) {
		cards = cards.filter((card) => {
			return (
				card.title.toLowerCase().includes(filter.toLowerCase()) ||
				card.subtitle.toLowerCase().includes(filter.toLowerCase()) ||
				card.description.toLowerCase().includes(filter.toLowerCase())
			);
		});
	}
	if (isPending)
		return (
			<Box width="100%" sx={{ display: "grid", placeItems: "center", pt: 3 }}>
				<CircularProgress />
			</Box>
		);
	if (cards && !!cards.length) {
		return (
			<Grid container spacing={2} alignItems="center">
				{cards.map((card) => (
					<Grid
						item
						xs={12}
						sm={cards.length < 2 ? 12 : 6}
						md={cards.length < 3 ? 12 / cards.length : 4}
						lg={cards.length < 4 ? 12 / cards.length : 3}
						key={card._id}
						sx={{ placeItems: "center", display: "grid", pl: 0 }}
					>
						<CardComponent card={card} />
					</Grid>
				))}
			</Grid>
		);
	}
	if (cards && !cards.length) {
		return <Typography>It seems there are no cards to be displayed</Typography>;
	}
	return <Typography>Error occured</Typography>;
};

export default memo(MappedCards);
