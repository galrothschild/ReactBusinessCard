import MappedCards from "../components/card/MappedCards";
import PageHeader from "../../pages/components/PageHeader";

import useCards from "../utils/useCards";
import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CardsPage = () => {
	const { cards, isPending } = useCards();
	const loggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
	const limitedCards = loggedIn ? cards : cards.slice(0, 3);
	return (
		<>
			<PageHeader title="Cards Page" subtitle="This page displays all cards" />
			<MappedCards cards={limitedCards} isPending={isPending} />
		</>
	);
};

export default memo(CardsPage);
