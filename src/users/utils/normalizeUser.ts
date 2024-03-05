import {
	IUser,
	signupData,
	signupNormalizedData,
	updateUserData,
	updateUserNormalizedData,
} from "../models/models";

export default function normalizeUser(user: signupData): signupNormalizedData {
	const normalizedUser: signupNormalizedData = {
		name: {
			first: user["first name"],
			middle: user["middle name"],
			last: user["last name"],
		},
		phone: user.phone,
		email: user.email,
		password: user.password,
		image: {
			url: user["image url"],
			alt: user["image alt"],
		},
		address: {
			state: user.state,
			country: user.country,
			city: user.city,
			street: user.street,
			houseNumber: +user["house number"],
			zip: +user.zip,
		},
		isBusiness: Boolean(user["business account"]),
	};
	return normalizedUser;
}

type updateUserDataPlusBusiness = updateUserData & {
	"business account": string;
};
export const denormalizeUser = (user: IUser): updateUserDataPlusBusiness => {
	return {
		"first name": user.name.first,
		"middle name": user.name.middle,
		"last name": user.name.last,
		phone: user.phone,
		"image url": user.image.url,
		"image alt": user.image.alt,
		state: user.address.state,
		country: user.address.country,
		city: user.address.city,
		street: user.address.street,
		"house number": user.address.houseNumber.toString(),
		zip: user.address.zip.toString(),
		"business account": user.isBusiness ? "true" : "false",
	};
};
export const normalizeUserForUpdate = (
	user: updateUserData,
): updateUserNormalizedData => {
	return {
		name: {
			first: user["first name"],
			middle: user["middle name"],
			last: user["last name"],
		},
		phone: user.phone,
		image: {
			url: user["image url"],
			alt: user["image alt"],
		},
		address: {
			state: user.state,
			country: user.country,
			city: user.city,
			street: user.street,
			houseNumber: +user["house number"],
			zip: +user.zip,
		},
	};
};
