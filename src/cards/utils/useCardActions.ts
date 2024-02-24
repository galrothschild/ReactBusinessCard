import { likeCard } from "./cardsApiService";
import { ICard } from "../models/CardModel";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, setLikeCard } from "../../redux/cards/cardsSlice";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/helpers/ROUTES";
import { RootState } from "../../redux/store";
import { useCallback } from "react";
import { deleteFromAPI } from "../../utlis/apiService";

const useCardActions = (card: ICard) => {
	const {
		user: { _id: userID },
		token,
	} = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLike = useCallback(
		(token: string) => {
			likeCard(card._id, token).then(() =>
				dispatch(setLikeCard({ card, userID })),
			);
		},
		[card, dispatch, userID],
	);
	const handleDelete = async () => {
		const response = await deleteFromAPI("cards", card._id, token);
		if (response.status === 200) {
			dispatch(removeCard(card._id));
		}
	};
	const handleEdit = () => navigate(`${ROUTES.EDIT_CARD}/${card._id}`);

	return { handleLike, handleDelete, handleEdit };
};
export default useCardActions;
