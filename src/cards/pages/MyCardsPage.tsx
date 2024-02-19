import React, { memo } from "react";
import useCards from "../utils/useCards";
import MappedCards from "../components/card/MappedCards";
import filterCards from "../utils/filterCards";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PageHeader from "../../pages/components/PageHeader";

const MyCardsPage = () => {
  const { cards, isPending } = useCards();
  const userID = useSelector((state: RootState) => state.user.user._id);
  const filteredCards = filterCards(cards, userID, "owner");
  return (
    <>
      <PageHeader
        title="My Cards"
        subtitle="This page displays the cards you've created"
      />
      <MappedCards cards={filteredCards} isPending={isPending} />
    </>
  );
};

export default memo(MyCardsPage);
