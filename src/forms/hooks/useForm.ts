import Joi from "joi";
import { useCallback, useState } from "react"

export const useForm = (initialForm: Record<string, string>, schema, handleSubmit) => {
    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleReset = useCallback(() => {
        setData(initialForm);
        setErrors({});
    }, [initialForm])
    type propertyType = {
        name: string;
        value: string;
    }
    const validateProperty = useCallback(({ name, value }: propertyType) => {
        const obj = { [name]: value };
        const propertySchema = Joi.object({ [name]: schema[name] })
        const { error } = propertySchema.validate(obj)
        return error ? error.details[0].message : null
    }, [schema])


}