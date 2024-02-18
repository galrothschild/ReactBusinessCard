import React from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../components/card/CardComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ErrorPage from "../../pages/ErrorPage";

const CardDetailPage = () => {
  const { id } = useParams();
  const cards = useSelector((state: RootState) => state.cards.cards);
  const currentCard = cards.find((card) => card._id === id) || false;
  return currentCard ? (
    <CardComponent card={currentCard} isLiked={true} />
  ) : (
    <ErrorPage />
  );
};

export default CardDetailPage;
