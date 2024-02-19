import React from 'react';
import { ICard } from '../../models/CardModel';
import { Box, CardActions, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Delete, Edit, Favorite, } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useCardActions from '../../utils/useCardActions';


interface Props {
    card: ICard;
    isLiked: boolean;
}
const CardActionBar: React.FC<Props> = ({ card, isLiked }) => {
    const token = useSelector((state: RootState) => state.user.token)
    const { handleLike, handleDelete, handleEdit } = useCardActions(card)

    const likedColor = isLiked ? "error" : "inherit"
    return (
        <>
            <CardActions disableSpacing >
                <Box>
                    <IconButton onClick={handleDelete}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={() => handleLike(token)}>
                        <Favorite color={likedColor} />
                    </IconButton>
                    <IconButton onClick={handleEdit}>
                        <Edit />
                    </IconButton>
                </Box>
            </CardActions>
        </>
    );
};

export default CardActionBar;