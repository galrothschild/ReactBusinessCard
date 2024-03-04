import React from "react";
import { ICard } from "../models/CardModel";
import { Box, Button, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
type CardDetailProps = {
	card: ICard;
};

const CardDetails: React.FC<CardDetailProps> = ({ card }) => {
	const createdAtDate = new Date(card.createdAt);
	const day = createdAtDate.getDate();
	const month = createdAtDate.getMonth();
	const year = createdAtDate.getFullYear();
	const address = `${card.address.country} ${card.address.street} ${card.address.houseNumber} ${card.address.city}`;
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	return (
		<Box
			sx={{
				display: "grid",
				placeItems: "center",
				color: isDark ? "#fff" : "#121212",
			}}
		>
			<Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
				<img
					src={card.image.url}
					alt={card.image.alt}
					width={300}
					height={300}
				/>
				<Box>
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography variant="h5" component="p" sx={{ mr: 2 }}>
							Title:
						</Typography>
						<Typography variant="h5" component="p" textAlign={"end"}>
							{card.title}
						</Typography>
					</Box>
					<Divider />
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography variant="h5" component="p" sx={{ mr: 2 }}>
							Subtitle:
						</Typography>
						<Typography variant="h5" component="p" textAlign={"end"}>
							{card.subtitle}
						</Typography>
					</Box>
					<Divider />
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography variant="h5" component="p" sx={{ mr: 2 }}>
							Description:
						</Typography>
						<Typography variant="h5" component="p" textAlign={"end"}>
							{card.description}
						</Typography>
					</Box>
					<Divider />
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Typography variant="h5" component="p" sx={{ mr: 2 }}>
							Phone:
						</Typography>
						<Typography variant="h5" component="p" textAlign={"end"}>
							<Button
								variant="text"
								href={`tel:${card.phone}`}
								color="inherit"
								sx={{ fontSize: "inherit", p: 0 }}
							>
								{card.phone}
							</Button>
						</Typography>
					</Box>
					<Divider />
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography variant="h5" component="p" sx={{ mr: 2 }}>
							Address:
						</Typography>
						<Typography variant="h5" component="p" textAlign={"end"}>
							{address}
						</Typography>
					</Box>
					<Divider />
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography variant="h5" component="p" sx={{ mr: 2 }}>
							Card Number:
						</Typography>
						<Typography variant="h5" component="p" textAlign={"end"}>
							{card.bizNumber}
						</Typography>
					</Box>
					<Divider />
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography variant="h5" component="p" sx={{ mr: 2 }}>
							Likes:
						</Typography>
						<Typography variant="h5" component="p" textAlign={"end"}>
							{card.likes.length}
						</Typography>
					</Box>
					<Divider />
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography variant="h5" component="p" sx={{ mr: 2 }}>
							Created at:
						</Typography>
						<Typography variant="h5" component="p" textAlign={"end"}>
							{`${day}/${month}/${year}`}
						</Typography>
					</Box>
					<iframe
						title="Map"
						style={{ maxWidth: "100%" }}
						width="600"
						height="450"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD0mVcLletdjdkce5W7BmAls5tbdN73cDQ&q=${address.replaceAll(
							" ",
							"+",
						)}`}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default CardDetails;
