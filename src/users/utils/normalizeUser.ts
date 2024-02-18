import { signupData, signupNormalizedData } from "../models/models";

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
    isBusiness: user["business account"],
  };
  return normalizedUser;
}
