import React from 'react';
import { ICard } from '../../models/CardModel';
import { Box, CardActions, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/helpers/ROUTES';
import { Delete, Edit, Favorite, } from '@mui/icons-material';


interface Props {
    card: ICard;
}
const CardActionBar: React.FC<Props> = ({ card }) => {
    const handleLike = () => console.log("Liked card ", card._id);
    const handleDelete = () => console.log("Deleted card ", card._id);
    const navigate = useNavigate();
    const handleEdit = () => navigate(`${ROUTES.EDIT_CARD}/${card._id}`);
    return (
        <>
            <CardActions disableSpacing >
                <Box>
                    <IconButton onClick={handleDelete}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={handleLike}>
                        <Favorite />
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