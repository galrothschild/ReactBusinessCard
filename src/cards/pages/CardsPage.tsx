import MappedCards from "../components/card/MappedCards";
import PageHeader from "../../pages/components/PageHeader";

import useCards from "../utils/useCards";

const CardsPage = () => {
  const { cards, isPending } = useCards();
  return (
    <>
      <PageHeader title="Cards Page" subtitle="This page displays all cards" />
      <MappedCards cards={cards} isPending={isPending} />
    </>
  );
};

export default CardsPage;
