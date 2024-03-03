import React, { memo } from "react";
import { ICard } from "../../models/CardModel";
import { Box, CardActions, IconButton } from "@mui/material";
import { Delete, Edit, Favorite, Phone } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useCardActions from "../../utils/useCardActions";

interface Props {
	card: ICard;
	isLiked: boolean;
}
const CardActionBar: React.FC<Props> = ({ card, isLiked }) => {
	const { token, isLoggedIn } = useSelector((state: RootState) => state.user);
	const { _id } = useSelector((state: RootState) => state.user.user);
	const { handleLike, handleDelete, handleEdit } = useCardActions(card);

	const likedColor = isLiked ? "error" : "inherit";
	return (
		<>
			<CardActions disableSpacing>
				{isLoggedIn && (
					<>
						<IconButton
							onClick={() => {
								handleLike(token);
							}}
						>
							<Favorite color={likedColor} />
						</IconButton>

						<IconButton href={`tel:${card.phone}`}>
							<Phone />
						</IconButton>
					</>
				)}

				{card.user_id === _id && (
					<>
						<IconButton onClick={handleEdit} sx={{ ml: "auto" }}>
							<Edit />
						</IconButton>

						<IconButton onClick={handleDelete}>
							<Delete />
						</IconButton>
					</>
				)}
			</CardActions>
		</>
	);
};

export default memo(CardActionBar);
