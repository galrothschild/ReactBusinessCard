import React, { memo } from "react";
import { ICard } from "../../models/CardModel";
import {
	CardContent,
	CardHeader,
	Divider,
	Box,
	Typography,
} from "@mui/material";

interface Props {
	card: ICard;
}

const CardBody: React.FC<Props> = ({ card }) => {
	const {
		title,
		subtitle,
		phone,
		address: { street, houseNumber, city },
		bizNumber,
	} = card;
	return (
		<CardContent className="text-nowrap w-64 text-ellipsis overflow-hidden">
			<CardHeader title={title} subheader={subtitle} sx={{ p: 0, md: 1 }} />
			<Divider />
			<Box>
				<Typography variant="body2" color="text.secondary">
					<Typography variant="subtitle2" component="strong">
						Phone:{" "}
					</Typography>
					{phone}
				</Typography>

				<Typography
					variant="body2"
					color="text.secondary"
					className="text-nowrap w-64 text-ellipsis overflow-hidden"
				>
					<Typography variant="subtitle2" component="strong">
						Address:{" "}
					</Typography>
					{street} {houseNumber} {city}
				</Typography>

				<Typography variant="body2" color="text.secondary">
					<Typography variant="subtitle2" component="strong">
						Card Number:{" "}
					</Typography>
					{bizNumber}
				</Typography>
			</Box>
		</CardContent>
	);
};

export default memo(CardBody);
