import Joi from "joi";

const loginSchema = Joi.object({
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
});

export default loginSchema;
