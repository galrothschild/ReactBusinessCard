import Joi from "joi";
import { Address, Image } from "./CardModel";

export interface createCardNormalizedData {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  image: Omit<Image, "_id">;
  address: Omit<Address, "_id">;
}

export interface createCardData {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  website: string;
  state: string;
  country: string;
  city: string;
  street: string;
  "house number": string;
  zip: string
  "image address": string;
  "image description": string;
}

export const createCardSchema = Joi.object({
  title: Joi.string()
    .regex(/[\w ]{5,20}/)
    .rule({ message: "Must be only english letters upto 20 characters" })
    .required(),
  subtitle: Joi.string()
    .regex(/[\w ]{0,20}/)
    .rule({ message: "Must be only english letters upto 20 characters" })
    .required(),
  description: Joi.string()
    .regex(/[\w ]{0,80}/)
    .rule({ message: "Must be only english letters upto 80 characters" })
    .required(),
  phone: Joi.string()
    .regex(/^[+\d]{10,15}$/)
    .rule({ message: "Phone must be at least 10 digits" }),
  state: Joi.string()
    .regex(/^[a-zA-Z '0-9]+$/)
    .rule({ message: "Must only include English letters and digits" }),
  country: Joi.string()
    .regex(/^[a-zA-Z '0-9]+$/)
    .rule({ message: "Must only include English letters and digits" })
    .required(),
  city: Joi.string()
    .regex(/^[a-zA-Z '0-9]+$/)
    .rule({ message: "Must only include English letters and digits" })
    .required(),
  street: Joi.string()
    .regex(/^[a-zA-Z '0-9]+$/)
    .rule({ message: "Must only include English letters and digits" })
    .required(),
  "house number": Joi.number().required(),
  zip: Joi.number(),

  "image address": Joi.string().uri().required(),
  "image alt": Joi.string().required(),
});
