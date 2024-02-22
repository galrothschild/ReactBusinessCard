import { createCard, getCardByID, likeCard } from "./cardsApiService";
import { ICard } from "../models/CardModel";
import { useDispatch, useSelector } from "react-redux";
import { addCard, setLikeCard } from "../../redux/cards/cardsSlice";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/helpers/ROUTES";
import { RootState } from "../../redux/store";
import { useCallback } from "react";
import { createCardData } from "../models/CreateCardModels";
import { normalizeCard } from "./normalizeCard";

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
  const handleCreateCard = useCallback(
    async (data: createCardData, token: string) => {
      const normalizedCard = normalizeCard(data);
      const response = await createCard(normalizedCard, token);
      if (response) {
        const { _id: cardID } = response;
        const card = await getCardByID(cardID);
        if (card) {
          dispatch(addCard(card));
        }
      }
    },
    [dispatch]
  );
  return { handleLike, handleDelete, handleEdit, handleCreateCard };
};
export default useCardActions;
