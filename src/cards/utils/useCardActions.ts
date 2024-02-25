import { likeCard } from "./cardsApiService";
import { ICard } from "../models/CardModel";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, setLikeCard } from "../../redux/cards/cardsSlice";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/helpers/ROUTES";
import { RootState } from "../../redux/store";
import { useCallback } from "react";
import { deleteFromAPI } from "../../utlis/apiService";
import useSnackbar from "../../snackbar/hooks/useSnackbar";

const useCardActions = (card: ICard) => {
	const { envokeSnackbar } = useSnackbar();
	const {
		user: { _id: userID },
		token,
	} = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLike = useCallback(
		(token: string) => {
			likeCard(card._id, token).then(() => {
				dispatch(setLikeCard({ card, userID }));
				envokeSnackbar("Success!", "success", 1000);
			});
		},
		[card, dispatch, userID, envokeSnackbar],
	);
	const handleDelete = async () => {
		const response = await deleteFromAPI("cards", card._id, token);
		if (response.status === 200) {
			dispatch(removeCard(card._id));
			envokeSnackbar("Successfully deleted card", "success", 3000);
		} else {
			envokeSnackbar("Something went wrong..", "error", 3000);
		}
	};
	const handleEdit = () => navigate(`${ROUTES.EDIT_CARD}/${card._id}`);

	return { handleLike, handleDelete, handleEdit };
};
export default useCardActions;
