import { getCards, likeCard } from "./cardsApiService";
import { ICard } from "../models/CardModel";
import { useDispatch, useSelector } from "react-redux";
import { setCards, setLikeCard, setPending } from "../../redux/cards/cardsSlice";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/helpers/ROUTES";
import { RootState } from "../../redux/store";

const useCardActions = (card: ICard) => {
    const userID = useSelector((state: RootState) => state.user.user._id) as string
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLike = (token: string) => {
        likeCard(card._id, token)
            .then(() => {
                dispatch(setLikeCard({ card, userID }
                ))
            })
    };
    const handleDelete = () => console.log("Deleted card ", card._id);
    const handleEdit = () => navigate(`${ROUTES.EDIT_CARD}/${card._id}`);
    return { handleLike, handleDelete, handleEdit }
}
export default useCardActions