import Joi from "joi";

const signupSchema = {
    "first name": Joi.string().required().min(2).regex(/^[a-zA-Z.]+$/).rule({ message: "Please enter at least 2 characters" }),
    "middle name": Joi.string().regex(/^[a-zA-Z.]+$/).rule({ message: "Please enter at least 2 characters with only english letters" }),
    "last name": Joi.string().regex(/^[a-zA-Z.]+$/).rule({ message: "Please enter at least 2 characters with only english letters" }),
    phone: Joi.string().regex(/^[+\d]{10,15}$/).rule({ message: "Phone must be at least 10 digits" }),
    email: Joi.string()
        .required()
        .regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
        .rule({ message: "Please enter a valid email" }),
    password: Joi.string()
        .min(9)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_])/)
        .rule({
            message:
                "Password must be over 9 characters, with a capital letter, lowecase letter a number and a special character from !@#$%^&*-_",
        })
        .required(),
    "password confirmation": Joi.ref('password'),
    "image url": Joi.string().uri(),
    "image alt": Joi.string(),
    state: Joi.string().regex(/^[a-zA-Z]+$/).rule({ message: "Must only include English letters" }),
    country: Joi.string().regex(/^[a-zA-Z]+$/).rule({ message: "Must only include English letters" }).required(),
    city: Joi.string().regex(/^[a-zA-Z]+$/).rule({ message: "Must only include English letters" }).required(),
    "house number": Joi.string().regex(/^\d+$/).message("Must be a number").required(),
    "zip": Joi.string().regex(/^\d+$/).message("Must be a number").required(),
    "business account": Joi.boolean().required()
};

export default signupSchema;
type temp = {
    "first name": string;
    "middle name": string;
    "last name": string;
    phone: string;
    email: string;
    password: string;
    "password confirmation": string;
    "image url": string;
    "image alt": string;
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: string;
    zip: string;
    isBusiness: boolean;
}