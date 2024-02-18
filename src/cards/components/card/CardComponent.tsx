import { CardActionArea, Card } from "@mui/material";
import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { ICard } from "../../models/CardModel";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/helpers/ROUTES";
interface Props {
  card: ICard;
  isLiked: boolean;
}

const CardComponent: React.FC<Props> = ({ card, isLiked }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 280, width: 280 }}
      className="shadow-md border border-slate-400"
    >
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
      >
        <CardHeader image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar card={card} />
    </Card>
  );
};

export default CardComponent;
