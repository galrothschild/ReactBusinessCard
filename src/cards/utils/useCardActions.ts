import { likeCard } from "./cardsApiService";
import { ICard } from "../models/CardModel";
import { useDispatch, useSelector } from "react-redux";
import { setLikeCard } from "../../redux/cards/cardsSlice";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/helpers/ROUTES";
import { RootState } from "../../redux/store";
import { useCallback } from "react";

const useCardActions = (card: ICard) => {
  const userID = useSelector(
    (state: RootState) => state.user.user._id
  ) as string;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLike = useCallback(
    (token: string) => {
      likeCard(card._id, token).then(() =>
        dispatch(setLikeCard({ card, userID }))
      );
    },
    [card, dispatch, userID]
  );
  const handleDelete = () => console.log("Deleted card ", card._id);
  const handleEdit = () => navigate(`${ROUTES.EDIT_CARD}/${card._id}`);
  const handleCreateCard = useCallback(() => {

  }, [])
  return { handleLike, handleDelete, handleEdit };
};
export default useCardActions;
