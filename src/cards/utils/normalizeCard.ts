import {
	createCardData,
	createCardNormalizedData,
} from "../models/CreateCardModels";
import { ICard } from "../models/CardModel";

export const normalizeCard = (card: createCardData) => {
	const normalizedCard: createCardNormalizedData = {
		title: card.title,
		subtitle: card.subtitle,
		description: card.description,
		phone: card.phone,
		email: card.email,
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

export const denormalizeCard = (normalizedCard: ICard): createCardData => {
	const denormalizedCard: createCardData = {
		title: normalizedCard.title,
		subtitle: normalizedCard.subtitle,
		description: normalizedCard.description,
		phone: normalizedCard.phone,
		email: normalizedCard.email,
		website: normalizedCard.web || "", // Corrected property name
		"image address": normalizedCard.image.url,
		"image description": normalizedCard.image.alt,
		state: normalizedCard.address.state,
		country: normalizedCard.address.country,
		city: normalizedCard.address.city,
		street: normalizedCard.address.street,
		"house number": normalizedCard.address.houseNumber.toString(),
		zip: normalizedCard.address.zip.toString(),
	};
	return denormalizedCard;
};
