import Joi from "joi";

const signupSchema = Joi.object({
	"first name": Joi.string()
		.required()
		.min(2)
		.regex(/^[a-zA-Z.]+$/)
		.rule({
			message: "Please enter at least 2 characters with only english letters",
		}),
	"middle name": Joi.string()
		.regex(/^[a-zA-Z.]+$/)
		.rule({
			message: "Please enter at least 2 characters with only english letters",
		}),
	"last name": Joi.string()
		.regex(/^[a-zA-Z.]+$/)
		.rule({
			message: "Please enter at least 2 characters with only english letters",
		}),
	phone: Joi.string()
		.regex(/^[+\d]{9,11}$/)
		.rule({ message: "Phone must be between 9 and 11 digits" }),
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
	"password confirmation": Joi.string()
		.required()
		.valid(Joi.ref("password"))
		.messages({
			"any.only": "Passwords must match",
		}),
	"image url": Joi.string().uri(),
	"image alt": Joi.string(),
	state: Joi.string()
		.regex(/^[a-zA-Z ']+$/)
		.rule({ message: "Must only include English letters" }),
	country: Joi.string()
		.regex(/^[a-zA-Z ']+$/)
		.rule({ message: "Must only include English letters" })
		.required(),
	city: Joi.string()
		.regex(/^[a-zA-Z ']+$/)
		.rule({ message: "Must only include English letters" })
		.required(),
	street: Joi.string()
		.regex(/^[a-zA-Z ']+$/)
		.rule({ message: "Must only include English letters" })
		.required(),
	"house number": Joi.string()
		.regex(/^\d+$/)
		.message("Must be a number")
		.required(),
	zip: Joi.string().regex(/^\d+$/).message("Must be a number").required(),
	"business account": Joi.boolean().required(),
}).with("password", "password confirmation");

export default signupSchema;
