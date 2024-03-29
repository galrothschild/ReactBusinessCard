import { CardActionArea, Card, useTheme } from "@mui/material";
import React, { memo } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { ICard } from "../../models/CardModel";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/helpers/ROUTES";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
interface Props {
	card: ICard;
	extended?: boolean;
}

const CardComponent: React.FC<Props> = ({ card }) => {
	const navigate = useNavigate();
	const {
		palette: { mode: themeMode },
	} = useTheme();
	const userID = useSelector((state: RootState) => state.user.user._id);
	return (
		<Card
			sx={{ maxWidth: 270, width: 270 }}
			className={`shadow-md border ${
				themeMode === "dark" ? "border-slate-700" : "border-slate-400"
			}
        `}
		>
			<CardActionArea
				onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
			>
				<CardHeader image={card.image} />
				<CardBody card={card} />
			</CardActionArea>
			<CardActionBar card={card} isLiked={card.likes.includes(userID)} />
		</Card>
	);
};

export default memo(CardComponent);
