import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ErrorPage from "../../pages/ErrorPage";
import PageHeader from "../../pages/components/PageHeader";
import CardDetails from "../components/CardDetails";

const CardDetailPage = () => {
	const { id } = useParams();
	const cards = useSelector((state: RootState) => state.cards.cards);
	const currentCard = cards.find((card) => card._id === id) || false;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	if (currentCard) {
		return (
			<>
				<PageHeader
					title={"Card Details"}
					subtitle={`Details about card ${currentCard._id}`}
				/>
				<CardDetails card={currentCard} />
			</>
		);
	}
	return <ErrorPage />;
};

export default CardDetailPage;
