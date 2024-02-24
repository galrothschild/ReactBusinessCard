import { useSelector } from "react-redux";
import {
	createCardData,
	createCardNormalizedData,
} from "../models/CreateCardModels";

export const normalizeCard = (card: createCardData, email: string) => {
	const normalizedCard: createCardNormalizedData = {
		title: card.title,
		subtitle: card.subtitle,
		description: card.description,
		phone: card.phone,
		email,
		web: card.website,
		image: {
			url: card["image address"],
			alt: card["image description"],
		},
		address: {
			state: card.state,
			country: card.country,
			city: card.city,
			street: card.street,
			houseNumber: parseInt(card["house number"]),
			zip: +card.zip,
		},
	};
	return normalizedCard;
};
