import React, { memo } from "react";
import useCards from "../utils/useCards";
import MappedCards from "../components/card/MappedCards";
import filterCards from "../utils/filterCards";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PageHeader from "../../pages/components/PageHeader";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/helpers/ROUTES";

const MyCardsPage = () => {
  const { cards, isPending } = useCards();
  const userID = useSelector((state: RootState) => state.user.user._id);
  const filteredCards = filterCards(cards, userID, "owner");
  const navigate = useNavigate();
  return (
    <>
      <PageHeader
        title="My Cards"
        subtitle="This page displays the cards you've created"
      />
      <Button
        variant="text"
        color="primary"
        onClick={() => navigate(ROUTES.CREATE_CARD)}
      >
        Create new card
      </Button>
      <MappedCards cards={filteredCards} isPending={isPending} />
    </>
  );
};

export default memo(MyCardsPage);
